import {FC, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import Link from 'next/link';
import {userAPI} from '@src/api/api';
import {AuctionTimer} from './AuctionTimer';
import {BetsList} from '@src/components/elements/bets_list/BetsList';
import {Grid, Hidden, TextField, Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {LockIcon} from '@src/components/elements/icons';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {AuctionForm} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionForm/AuctionForm';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {useBetsData} from '@src/hooks/useBetsData';
import {useStyles} from './useStyles';


type AuctionInfoPropsType = {
    postData,
    setFetchedPostData: () => Promise<void>
} & WithT;

export const AuctionContent: FC<AuctionInfoPropsType> = (props) => {
    const {
        t,
        postData,
        setFetchedPostData
    } = props;

    const auctionId = postData.auction.id;

    const dispatch = useDispatch();
    const date = new Date(postData.expiration_at).getTime();
    const isExAuc = postData.ads_type.mark === 'exauc';
    const hasOfferPrice = !!postData.auction.offer_the_price;

    const [isFetch, setIsFetch] = useState(false);
    const [openBuyNow, setOpenBuyNow] = useState(false);
    const [openOfferPrice, setOpenOfferPrice] = useState(false);
    const [offerPrice, setOfferPrice] = useState('');

    const {bets, betsCount, setFetchedBetsData} = useBetsData(
        {
            auction_id: auctionId,
            page: 1,
            itemsPerPage: 5,
            archive: 0
        }
    );
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
            await setFetchedPostData();
            setOpenBuyNow(false);
            setIsFetch(false);
        } catch ({response}) {
            setIsFetch(false);
            dispatch(
                setErrorMsgAction(t(`errors:${response.data.message}`))
            );
        }
    };

    const handleOfferPriceInput = ({target}) => {
        setOfferPrice(target.value);
    };

    // useEffect(() => {
    //     socketIO.on('bet-channel', async (lastBet) => {
    //         setBets([lastBet, ...betsRef.current]);
    //     });
    //     () => socketIO.off('bet-channel');
    // }, []);

    useEffect(() => {
        setFetchedBetsData();
    }, []);

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
                <BetsList
                    bets={bets}
                    showBetsCount={5}
                    auctionId={auctionId}
                    betsCount={betsCount}
                    handleRefresh={setFetchedBetsData}
                    title={t('auction:currentRates')}
                />
                {!postData.creator && (
                    <>
                        <AuctionForm
                            t={t}
                            lastBet={lastBet}
                            auctionId={auctionId}
                            handleRefresh={setFetchedBetsData}
                        />
                        {hasBuyNow && (
                            <div>
                                <Hidden mdDown>
                                    <div className="buy-now">
                                        <Typography variant="subtitle1" color="initial">
                                            {numberPrettier(postData.auction.price_buy_now)} сум
                                        </Typography>
                                        <CustomButton onClick={handleModalBuyNow(true)}>
                                            <Typography variant="subtitle1" color="initial">
                                                Купить сейчас
                                            </Typography>
                                        </CustomButton>
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
                                            <CustomButton
                                                className='submit'
                                                onClick={handleBuyNow}
                                            >
                                                <Typography variant='subtitle1'>
                                                    Купить сейчас
                                                </Typography>
                                            </CustomButton>
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
                                            <CustomButton onClick={handleModalOfferPrice(true)}>
                                                <Typography variant="subtitle1" color="initial">
                                                    Предложить цену
                                                </Typography>
                                            </CustomButton>
                                        </Grid>
                                    )}
                                    {isExAuc && hasBuyNow && (
                                        <Grid item xs={6} className="btn-buy-now">
                                            <CustomButton>
                                                <Typography variant='subtitle2'>Купить сейчас</Typography>
                                            </CustomButton>
                                        </Grid>
                                    )}
                                </Grid>
                            </Hidden>
                            {hasOfferPrice && (
                                <Hidden mdDown>
                                    <div className='suggest_price'>
                                        <CustomButton onClick={handleModalOfferPrice(true)}>
                                            <Typography variant="subtitle1" color="initial">
                                                Предложить цену
                                            </Typography>
                                        </CustomButton>
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
                                    <CustomButton onClick={handleOfferPrice}>
                                        Предложить
                                    </CustomButton>
                                </div>
                            </CustomModal>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
