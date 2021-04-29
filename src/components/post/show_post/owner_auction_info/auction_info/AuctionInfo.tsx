import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import {WithT} from 'i18next';
import {Grid, Hidden, TextField, Typography} from '@material-ui/core';
import {LockIcon, RefreshIcon} from '@src/components/elements/icons';
import {AuctionTimer} from './AuctionTimer';
import {numberPrettier} from '@root/src/helpers';
import {AuctionForm} from './AuctionForm/AuctionForm';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';


type AuctionInfoPropsType = {
    data,
} & WithT;

export const AuctionInfo: FC<AuctionInfoPropsType> = (props) => {
    const {
        t,
        data
    } = props;

    const router = useRouter();
    const dispatch = useDispatch();
    const date = new Date(data.expiration_at).getTime();
    const isExAuc = data.ads_type.mark === 'exauc';
    const hasBuyNow = !!data.auction.price_buy_now;
    const hasOfferPrice = !!data.auction.offer_the_price;

    const initAuctionsBets = {
        isFetch: false,
        list: []
    };

    const [showAll, setShowAll] = useState(false);
    const [openBuyNow, setOpenBuyNow] = useState(false);
    const [openOfferPrice, setOpenOfferPrice] = useState(false);
    const [offerPrice, setOfferPrice] = useState({isFetch: false, price: null});
    const [page, setPage] = useState(1);
    const [auctionsBets, setAuctionBets] = useState(initAuctionsBets);

    const handleModalBuyNow = (value) => () => {
        setOpenBuyNow(value);
    };
    const handleModalOfferPrice = (value) => () => {
        setOpenOfferPrice(value);
    };
    const handleBuyNow = async () => {
        try {
            await userAPI.buyNow(data.auction.id, data.id);
            router.push('/');
        } catch ({response}) {
            dispatch(
                setErrorMsgAction(t(`errors:${response.data.message}`))
            );
        }
    };
    const handleBet = async (bet) => {
        try {
            await userAPI.betAuction(bet, data.auction.id);
            const bets = await userAPI.getAuctionBets(data.auction.id, 1);
            setAuctionBets({...auctionsBets, list: bets.data});
        } catch (e) {
            dispatch(
                setErrorMsgAction(t(`errors:${e.response.data.message}`))
            );
        }
    };
    const handleScroll = (e) => {
        const isScrollBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (isScrollBottom) {
            setPage(prev => prev + 1);
        }
    };
    const handleOfferPrice = async () => {
        try {
            setOfferPrice({...offerPrice, isFetch: true});
            await userAPI.offerThePrice(data.auction.id, offerPrice.price);
            setOfferPrice({price: null, isFetch: false});
            setOpenOfferPrice(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleTextField = ({target}) => {
        setOfferPrice({...offerPrice, price: target.value});
    };
    const handleRefreshBets = async () => {
        try {
            setAuctionBets({
                ...auctionsBets,
                isFetch: true
            });
            const bets = await userAPI.getAuctionBets(data.auction.id, 1);
            setAuctionBets({
                ...auctionsBets,
                isFetch: false,
                list: bets.data
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const auctionBetsPagination = async () => {
        try {
            setAuctionBets({...auctionsBets, isFetch: true});
            const bets = await userAPI.getAuctionBets(data.auction.id, page);
            setAuctionBets({
                ...auctionsBets,
                isFetch: false,
                list: [...auctionsBets.list, ...bets.data]
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        auctionBetsPagination();
    }, [page]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                {data.auction && data.auction.reserve_price > auctionsBets[0]?.bet && (
                    <div className="reserve-price">
                        <LockIcon/>
                        <div>
                            <Typography variant="subtitle2" color="initial">
                                Резервная цена:
                            </Typography>
                            <Typography variant="h6" color="initial">
                                {numberPrettier(data.auction.reserve_price)}{' '}
                                {data.currency.name}
                            </Typography>
                        </div>
                    </div>
                )}
                <div className="lot-timer">
                    {!!date && <AuctionTimer date={date}/>}
                </div>
                <div className="lot-participants-block">
                    <Typography
                        variant="subtitle1" color="initial"
                        style={{display: 'flex', justifyContent: 'space-between'}}
                    >
                        <div>
                            Текущие ставки
                        </div>
                        <div onClick={handleRefreshBets} style={{cursor: 'pointer'}}>
                            <RefreshIcon/>
                        </div>
                    </Typography>
                    <div
                        className="participants"
                        style={{height: showAll ? 400 : 200, overflow: showAll ? 'auto' : 'hidden'}}
                        onScroll={handleScroll}
                    >
                        <ul>
                            {auctionsBets.list.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <div className="participant-name">
                                            <Typography variant="subtitle1" noWrap>
                                                {item.user.name}
                                                {item.number_of_bets && <span>({item.number_of_bets})</span>}
                                            </Typography>
                                        </div>
                                        <div className="dateAndTime">
                                            <Typography
                                                noWrap
                                                variant="subtitle1"
                                                className="bet-time"
                                            >
                                                {item.created_at?.slice(11, 16)}
                                            </Typography>
                                            <Typography
                                                noWrap
                                                variant="subtitle1"
                                                className="bet-date"
                                            >
                                                {item.created_at?.slice(0, 10)}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="bet">
                                        <Typography
                                            noWrap
                                            variant="subtitle1"
                                            className="final-bet"
                                        >
                                            {numberPrettier(item.bet)}
                                        </Typography>
                                        <Typography
                                            noWrap
                                            variant="subtitle1"
                                            className="per-bet"
                                        >
                                            {item.outbid === 0
                                             ? <span className='started-price'>Стартовая цена</span>
                                             : `+ ${numberPrettier(item.outbid)}`}
                                        </Typography>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Typography
                        variant="subtitle1"
                        color="initial"
                        className="all-bets"
                        style={{cursor: 'pointer'}}
                        onClick={() => setShowAll(!showAll)}
                    >
                        Все ставки
                    </Typography>
                </div>
                {!data.creator && (
                    <>
                        <AuctionForm
                            t={t}
                            handleBet={handleBet}
                            auctionsBets={auctionsBets.list}
                        />
                        {hasBuyNow && (
                            <div>
                                <Hidden mdDown>
                                    <div className="buy-now">
                                        <Typography variant="subtitle1" color="initial">
                                            {numberPrettier(data.auction.price_buy_now)} сум
                                        </Typography>
                                        <ButtonComponent onClick={handleModalBuyNow(true)}>
                                            <Typography variant="subtitle1" color="initial">
                                                Купить сейчас
                                            </Typography>
                                        </ButtonComponent>
                                    </div>
                                </Hidden>
                                <CustomModal handleModalClose={handleModalBuyNow(false)} openModal={openBuyNow}>
                                    <>
                                        <Typography className="title" variant="h6">
                                            Купить сейчас
                                        </Typography>
                                        <Typography
                                            variant='subtitle1'
                                            className='subtitle'
                                        >
                                            Нажимая кнопку “Купить сейчас” вы выкупаете лот на сумму&nbsp;
                                            <span className='buy-now-price'>
                                                {numberPrettier(data.auction.price_buy_now)}
                                            </span>
                                            сум и соглашаетесь с &nbsp;
                                            <span className='condition'>
                                                <Link href="#">
                                                    <a>условиями&nbsp;</a>
                                                </Link>
                                            </span>
                                            сайта
                                        </Typography>
                                        <div className='confirm'>
                                            <ButtonComponent
                                                className='submit'
                                                onClick={handleBuyNow}
                                            >
                                                <Typography variant='subtitle1'>
                                                    Купить сейчас
                                                </Typography>
                                            </ButtonComponent>
                                        </div>
                                    </>
                                </CustomModal>
                            </div>
                        )}
                        <div>
                            <Hidden lgUp>
                                <Grid container spacing={1}>
                                    {hasOfferPrice && (
                                        <Grid
                                            item xs={isExAuc && hasBuyNow ? 6 : 12}
                                            className='suggest_price'
                                        >
                                            <ButtonComponent onClick={handleModalOfferPrice(true)}>
                                                <Typography variant="subtitle1" color="initial">
                                                    Предложить цену
                                                </Typography>
                                            </ButtonComponent>
                                        </Grid>
                                    )}
                                    {isExAuc && hasBuyNow && (
                                        <Grid item xs={6} className="btn-buy-now">
                                            <ButtonComponent>
                                                <Typography variant='subtitle2'>Купить сейчас</Typography>
                                            </ButtonComponent>
                                        </Grid>
                                    )}
                                </Grid>
                            </Hidden>
                            {hasOfferPrice && (
                                <Hidden mdDown>
                                    <div className='suggest_price'>
                                        <ButtonComponent onClick={handleModalOfferPrice(true)}>
                                            <Typography variant="subtitle1" color="initial">
                                                Предложить цену
                                            </Typography>
                                        </ButtonComponent>
                                    </div>
                                </Hidden>
                            )}
                            <CustomModal handleModalClose={handleModalOfferPrice(false)} openModal={openOfferPrice}>
                                Предложить цену
                                <Typography variant='subtitle1'>
                                    Предложенная стоимость не может быть <br/>
                                    меньше стартовой цены или сделанной ставки
                                </Typography>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Outlined"
                                        variant="outlined"
                                        placeholder='Впишите сумму'
                                        onChange={handleTextField}
                                    />
                                    <ButtonComponent onClick={handleOfferPrice}>
                                        Предложить
                                    </ButtonComponent>
                                </div>
                            </CustomModal>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
