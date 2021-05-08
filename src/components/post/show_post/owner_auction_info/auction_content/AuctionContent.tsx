import {FC, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {WithT} from 'i18next';
import {Grid, Hidden, TextField, Typography} from '@material-ui/core';
import {LockIcon, RefreshIcon} from '@src/components/elements/icons';
import {AuctionTimer} from './AuctionTimer';
import {numberPrettier} from '@root/src/helpers';
import {AuctionForm} from './AuctionForm/AuctionForm';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {socketIO, userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useStyles} from './useStyles';


type AuctionInfoPropsType = {
    postData,
} & WithT;

export const AuctionContent: FC<AuctionInfoPropsType> = (props) => {
    const {
        t,
        postData
    } = props;

    const dispatch = useDispatch();
    const date = new Date(postData.expiration_at).getTime();
    const isExAuc = postData.ads_type.mark === 'exauc';
    const hasOfferPrice = !!postData.auction.offer_the_price;

    const [isFetch, setIsFetch] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [openBuyNow, setOpenBuyNow] = useState(false);
    const [openOfferPrice, setOpenOfferPrice] = useState(false);
    const [offerPrice, setOfferPrice] = useState('');
    const [page, setPage] = useState(1);
    const [bets, setBets] = useState([]);
    const betsRef = useRef(bets);
    const [lastBet] = bets;

    const hasReservePrice = postData.auction?.reserve_price > lastBet?.bet;
    const hasBuyNow = !!postData.auction?.price_buy_now && postData.auction.price_buy_now > lastBet?.bet;

    const handleModalBuyNow = value => () => {
        setOpenBuyNow(value);
    };

    const handleModalOfferPrice = value => () => {
        setOpenOfferPrice(value);
    };

    const handleOfferPrice = async () => {
        try {
            setIsFetch(true);
            await userAPI.offerThePrice(postData.auction.id, offerPrice);
            setOfferPrice('');
            setIsFetch(false);
            setOpenOfferPrice(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleBuyNow = async () => {
        try {
            setIsFetch(true);
            await userAPI.buyNow(postData.auction.id, postData.id);
            setIsFetch(false);
        } catch ({response}) {
            setIsFetch(false);
            dispatch(
                setErrorMsgAction(t(`errors:${response.data.message}`))
            );
        }
    };

    const handleBet = async (bet) => {
        try {
            setIsFetch(true);
            await userAPI.betAuction(bet, postData.auction.id);
            setIsFetch(false);
        } catch ({response}) {
            setIsFetch(false);
            dispatch(
                setErrorMsgAction(t(`errors:${response.data.message}`))
            );
        }
    };

    const handleScroll = ({target}) => {
        const isScrollBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
        if (isScrollBottom) {
            setPage(prev => prev + 1);
        }
    };

    const handleOfferPriceInput = ({target}) => {
        setOfferPrice(target.value);
    };

    const handleRefreshBets = async () => {
        try {
            setIsFetch(true);
            const bets = await userAPI.getAuctionBets(postData.auction.id, 1);
            setBets(bets.postData);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const auctionBetsPagination = async () => {
        try {
            setIsFetch(true);
            const {data} = await userAPI.getAuctionBets(postData.auction.id, page);
            setBets([...bets, ...data]);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        betsRef.current = bets;
    });

    useEffect(() => {
        auctionBetsPagination();
    }, [page]);

    useEffect(() => {
        socketIO.on('bet-channel', async (lastBet) => {
            setBets([lastBet, ...betsRef.current]);
        });
        () => socketIO.off('bet-channel');
    }, []);

    // console.log('bets', bets);
    // console.log('betsRef', betsRef.current);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                {hasReservePrice && (
                    <div className="reserve-price">
                        <LockIcon/>
                        <div>
                            <Typography variant="subtitle2" color="initial">
                                Резервная цена:
                            </Typography>
                            <Typography variant="h6" color="initial">
                                {numberPrettier(postData.auction.reserve_price)}{' '}
                                {postData.currency.name}
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
                            {bets.map((item) => (
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
                {!postData.creator && (
                    <>
                        <AuctionForm
                            t={t}
                            handleBet={handleBet}
                            lastBet={lastBet}
                        />
                        {hasBuyNow && (
                            <div>
                                <Hidden mdDown>
                                    <div className="buy-now">
                                        <Typography variant="subtitle1" color="initial">
                                            {numberPrettier(postData.auction.price_buy_now)} сум
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
                                                {numberPrettier(postData.auction.price_buy_now)}
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
                                        onChange={handleOfferPriceInput}
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
