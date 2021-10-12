import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {AuctionTimer} from './AuctionTimer';
import {unstable_batchedUpdates} from "react-dom";
import {Box, Grid, Hidden, TextField, Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {LockIcon} from '@src/components/elements/icons';
import {BetsList} from '@src/components/elements/bets_list/BetsList';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {AuctionForm} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionForm/AuctionForm';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useTranslation} from "next-i18next";
import {AuthCtx, ErrorCtx} from "@src/context";
import {useDate} from "@src/hooks";
import {useStyles} from './useStyles';

type AuctionInfoPropsType = {
    postData,
    auctionInfo,
    setFetchedPostData: () => Promise<void>
};

export const AuctionContent: FC<AuctionInfoPropsType> = (props) => {
    const {
        postData,
        auctionInfo,
        setFetchedPostData
    } = props;

    const {t} = useTranslation('post');

    const auctionId = postData.auction.id;
    const isPublic = postData.status === 'public';

    const {setErrorMsg} = useContext(ErrorCtx);
    const {auth: {isAuth}, user, setAuthModalOpen} = useContext(AuthCtx);
    const {milliSeconds} = useDate()(postData.expiration_at);

    const isExAuc = postData.ads_type.mark === 'exauc';
    const hasOfferPrice = !!postData.auction.offer_the_price;

    const [offerPrice, setOfferPrice] = useState('');
    const [isFetch, setIsFetch] = useState(false);
    const [openBuyNow, setOpenBuyNow] = useState(false);
    const [openOfferPrice, setOpenOfferPrice] = useState(false);

    const {bets, betsCount} = auctionInfo;
    const [lastBet] = bets;

    const hasReservePrice = postData.auction?.reserve_price > lastBet?.bet;
    const hasBuyNow = !!postData.auction?.price_buy_now && postData.auction.price_buy_now > lastBet?.bet;

    const isCreator = user.id === postData.author.id;

    const handleModalBuyNow = value => () => {
        isAuth
            ? setOpenBuyNow(value)
            : setAuthModalOpen(true)
    };

    const handleModalOfferPrice = value => () => {
        isAuth
            ? setOpenOfferPrice(value)
            : setAuthModalOpen(true);
    };

    const handleOfferPrice = async () => {
        try {
            setIsFetch(true);
            await userAPI.offerThePrice(postData.auction.id, offerPrice);
            unstable_batchedUpdates(() => {
                setOfferPrice('');
                setIsFetch(false);
                setOpenOfferPrice(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleBuyNow = async () => {
        try {
            setIsFetch(true);
            await userAPI.buyNow(postData.auction.id, postData.id);
            await setFetchedPostData();
            unstable_batchedUpdates(() => {
                setOpenBuyNow(false);
                setIsFetch(false);
            });
        } catch ({response}) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(response.data.message);
            });
        }
    };

    const handleOfferPriceInput = ({target}) => {
        setOfferPrice(target.value);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                {hasReservePrice && (
                    <div className="reserve-price">
                        <LockIcon/>
                        <div>
                            <Typography variant="subtitle2" color="initial">
                                {t('reservePrice')}:
                            </Typography>
                            <Typography variant="h6" color="initial">
                                {numberPrettier(postData.auction.reserve_price)}{' '}
                                {t(`common:${postData.currency.name}`)}
                            </Typography>
                        </div>
                    </div>
                )}
                {!!milliSeconds && (
                    <div className="lot-timer">
                        <AuctionTimer date={milliSeconds}/>
                    </div>
                )}
                <BetsList
                    bets={bets}
                    showBetsCount={5}
                    auctionId={auctionId}
                    betsCount={betsCount}
                    title={t('auction:currentRates')}
                />
                {isPublic && !isCreator && (
                    <>
                        <AuctionForm
                            lastBet={lastBet}
                            auctionId={auctionId}
                        />
                        {hasBuyNow && (
                            <div>
                                <Hidden mdDown>
                                    <div className="buy-now">
                                        <Typography variant="subtitle1" color="initial">
                                            {numberPrettier(postData.auction.price_buy_now)} {t('common:sum')}
                                        </Typography>
                                        <CustomButton onClick={handleModalBuyNow(true)}>
                                            <Typography variant="subtitle1" color="initial">
                                                {t('buyNow')}
                                            </Typography>
                                        </CustomButton>
                                    </div>
                                </Hidden>
                                <ResponsiveModal
                                    maxWidth='xs'
                                    openDialog={openBuyNow}
                                    handleCloseDialog={handleModalBuyNow(false)}
                                >
                                    <ModalHeader
                                        title={t('buyNow')}
                                        handleCloseDialog={handleModalBuyNow(false)}
                                    />
                                    <Box
                                        p={3}
                                        className={classes.buyNowModal}
                                    >
                                        <Typography
                                            variant='subtitle1'
                                            className='subtitle'
                                        >
                                            {t('buyNowRule.firstPart')}
                                            &nbsp;<br/>
                                            <span className='buy-now-price'>
                                                {numberPrettier(postData.auction.price_buy_now)}
                                            </span>
                                            &nbsp;
                                            {t('buyNowRule.secondPart')}
                                        </Typography>
                                        <div className='confirm'>
                                            <CustomButton
                                                className='submit'
                                                onClick={handleBuyNow}
                                            >
                                                <Typography variant='subtitle1'>
                                                    {t('common:perform')}
                                                </Typography>
                                            </CustomButton>
                                        </div>
                                    </Box>
                                </ResponsiveModal>
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
                                                    {t('suggestPrice')}
                                                </Typography>
                                            </CustomButton>
                                        </Grid>
                                    )}
                                    {isExAuc && hasBuyNow && (
                                        <Grid item xs={6} className="btn-buy-now">
                                            <CustomButton onClick={handleModalBuyNow(true)}>
                                                <Typography variant='subtitle2'>
                                                    {t('buyNow')}
                                                </Typography>
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
                                                {t('suggestPrice')}
                                            </Typography>
                                        </CustomButton>
                                    </div>
                                </Hidden>
                            )}
                            <ResponsiveModal
                                maxWidth='xs'
                                openDialog={openOfferPrice}
                                handleCloseDialog={handleModalOfferPrice(false)}
                            >
                                <ModalHeader
                                    title={t('suggestPrice')}
                                    handleCloseDialog={handleModalOfferPrice(false)}
                                />
                                <Box
                                    p={3}
                                    className={classes.suggestPriceModal}
                                >
                                    <Grid
                                        container
                                        spacing={2}
                                        direction='column'
                                    >
                                        <Grid item xs={12}>
                                            <Typography variant='subtitle1' component='p'>
                                                {t('suggestPriceRule')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                id="outlined-basic"
                                                className='suggest-input'
                                                onChange={handleOfferPriceInput}
                                                placeholder={t('enterPrice')}
                                            />
                                        </Grid>
                                        <Grid item xs={12} container alignItems='center'>
                                            <CustomButton
                                                color='secondary'
                                                disabled={isFetch}
                                                onClick={handleOfferPrice}
                                                className={classes.fullWidth}
                                            >
                                                <Typography variant="subtitle1" color="initial" component='p'>
                                                    {t('suggest')}
                                                </Typography>
                                            </CustomButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </ResponsiveModal>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
