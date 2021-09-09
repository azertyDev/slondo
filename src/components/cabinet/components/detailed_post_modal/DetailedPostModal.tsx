import {FC, useContext} from 'react';
import {WithT} from "i18next";
import {CardDataType} from '@root/interfaces/CardData';
import {Box, CircularProgress, Grid, Paper, Typography} from '@material-ui/core';
import {
    DeliveryIcon,
    ExchangeIcon,
    LocationIcon,
    PhoneIcon,
    RenewalIcon,
    SafeIcon
} from '@src/components/elements/icons';
import {AuthCtx} from "@src/context";
import {numberPrettier} from '@src/helpers';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {BetsList} from '@src/components/elements/bets_list/BetsList';
import {UserCard} from "@src/components/cabinet/components/user_card/UserCard";
import {useStyles} from './useStyles';
import {Trans} from 'next-i18next';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';

type DetailedPostViewPropsType = {
    isFetch: boolean,
    betsCount: number,
    isBetsFetch: boolean,
    post: CardDataType,
    open: boolean,
    bets,
    setFetchedBetsData,
    handleOffersOpen: () => void,
    handleReject: () => void,
    handleAccept: () => void,
    handleOpenRating: () => void,
    handleCloseDetailModal: () => void
} & WithT;

export const DetailedPostModal: FC<DetailedPostViewPropsType> = (props) => {
    const {
        t,
        open,
        post,
        bets,
        isFetch,
        betsCount,
        isBetsFetch,
        handleOpenRating,
        setFetchedBetsData,
        handleCloseDetailModal,
        handleOffersOpen,
        handleAccept,
        handleReject
    } = props;

    const {
        buyer,
        author,
        ads_type,
        status,
        auction,
        available_days,
        exchange,
        delivery,
        safe_deal,
        reasons = []
    } = post;

    const {user} = useContext(AuthCtx);

    const isAuction = ads_type === 'auc' || ads_type === 'exauc';
    const isNotPassModeration = status === 'blocked' || status === 'refuse';
    const inactiveStatus = status === 'archive' || status === 'history' || status === 'sold';

    const reason = reasons.map(({reason}, index) => {
        return (
            <Grid item xs={12} key={index}>
                <Typography variant='subtitle1' component='p' className='error-text'>
                    {t(`${reason.name}`)}
                </Typography>
            </Grid>
        );
    });

    const auctionId = auction?.id;
    const offer = auction?.offer;
    const offerUser = offer?.user;
    const winner = auction?.winner;

    const isUserWinner = winner?.id === user.id;
    const isUserCreator = author?.id === user.id;
    const isUserBuyer = buyer?.id === user.id;

    const hasBuyer = !!buyer;
    const hasOffer = offerUser && status === 'public';
    const hasServices = !!(available_days || exchange || delivery || safe_deal || auction?.auto_renewal);
    const hasUserForRating = !!((isUserWinner || isUserBuyer) ? author : !!winner && inactiveStatus ? winner : buyer ?? null);

    let userData = !isUserCreator ? author : winner ?? offerUser ?? null;

    const getUserInfoTitle = () => {
        if (hasBuyer && isUserCreator) return 'buyer';
        if (isAuction && winner !== null && isUserCreator) return 'winner';
        if (hasOffer && !winner && isUserCreator) return 'maxOffer';
        return isUserCreator || isNotPassModeration ? '' : 'seller';
    };

    if (hasBuyer) {
        userData = isUserBuyer ? author : buyer;
    }

    const classes = useStyles();
    return (
        <>
            <CabinetModal
                maxWidth='lg'
                openDialog={open}
                title={`${t(`common:${ads_type}`)} №: ${post.id}`}
                handleCloseDialog={handleCloseDetailModal}
            >
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CabinetCard cardData={post}/>
                        </Grid>
                        {hasServices && (
                            <Grid item xs={12} md={6}>
                                <Paper className='paper-block'>
                                    {!!post.available_days && (
                                        <div className="bonus_item">
                                            <span className='icon-bg'>
                                                <PhoneIcon/>
                                            </span>
                                            <Typography variant="body1">
                                                {`${post.available_start_time}-${post.available_end_time}`}
                                            </Typography>
                                        </div>
                                    )}
                                    {!!post.exchange && (
                                        <div className="bonus_item">
                                            <span className='icon-bg'>
                                                <ExchangeIcon/>
                                            </span>
                                            <Typography variant="body1">
                                                {t('common:exchange')}
                                            </Typography>
                                        </div>
                                    )}
                                    {!!post.delivery && (
                                        <div className="bonus_item">
                                        <span className='icon-bg'>
                                            <DeliveryIcon/>
                                        </span>
                                            <Typography variant="body1">
                                                {t('common:delivery')}
                                            </Typography>
                                        </div>
                                    )}
                                    {!!post.safe_deal && (
                                        <div className="bonus_item">
                                            <span className='icon-bg'>
                                                <SafeIcon/>
                                            </span>
                                            <Typography variant="body1">
                                                {t('common:safe_deal')}
                                            </Typography>
                                        </div>
                                    )}
                                    {!!auction?.auto_renewal && (
                                        <div className="bonus_item">
                                            <span className='icon-bg'>
                                                <RenewalIcon/>
                                            </span>
                                            <Typography variant="body1">
                                                {t('common:auto_ren')}
                                            </Typography>
                                        </div>
                                    )}
                                </Paper>
                            </Grid>
                        )}
                        <Grid item xs={12} md={6}>
                            <Paper className='paper-block'>
                                <Box className='location' width={1}>
                                    <LocationIcon/>
                                    <Typography
                                        noWrap
                                        color="initial"
                                        variant="subtitle1"
                                    >
                                        {post.city
                                            ? `${t(`locations:${post.region.name}.${post.city.name}`)}, ${t(`locations:${post.region.name}.name`)}`
                                            : t(`locations:${post.region.name}.name`)}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        {isAuction && (
                            <Grid item xs={12} md={6}>
                                {isBetsFetch
                                    ? <CircularProgress color="primary" />
                                    : <BetsList
                                        bets={bets}
                                        showBetsCount={2}
                                        betsCount={betsCount}
                                        auctionId={auctionId}
                                        handleRefresh={setFetchedBetsData}
                                        title={t('auction:extremeRates')}
                                    />}
                            </Grid>
                        )}
                        <Grid item xs={12} md={6} container spacing={1} className={classes.userInfoWrapper}>
                            <Grid item xs={12} container className='user-info-title'>
                                <Grid item xs={12} sm={8}>
                                    <Typography variant='subtitle2' gutterBottom>
                                        {t(getUserInfoTitle())}&nbsp;
                                        {hasOffer && !winner && isUserCreator && (
                                            <Trans
                                                t={t}
                                                i18nKey="offer_price"
                                                tOptions={{price: numberPrettier(offer?.price)}}
                                                components={[<strong />]}
                                            />
                                        )}
                                    </Typography>
                                </Grid>
                                {isUserCreator && hasOffer && !winner && (
                                    <Grid item xs={12} sm={4}>
                                        <Typography
                                            variant='subtitle2'
                                            className='all-offers'
                                            onClick={handleOffersOpen}
                                        >
                                            {t('all_offers_count', {offers: auction?.number_of_offers})}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                            {(isAuction || hasBuyer) && (
                                <Grid item xs={12}>
                                    <Paper className='paper-block'>
                                        {userData
                                            ? <UserCard
                                                t={t}
                                                userData={userData}
                                                hasUserForRating={hasUserForRating}
                                                handleOpenRating={handleOpenRating}
                                            />
                                            : <Typography variant='subtitle1'>
                                                {t(`auction:last_bet`, {lastBet: bets[0]?.bet})}
                                            </Typography>
                                        }
                                    </Paper>
                                </Grid>
                            )}
                            {(isUserCreator || isUserWinner) && !inactiveStatus && (
                                <>
                                    {(isUserWinner || (offerUser && !winner)) && (
                                        <Grid item xs={12}>
                                            <CustomButton
                                                color='silver'
                                                disabled={isFetch}
                                                onClick={handleReject}
                                            >
                                                <Typography variant='subtitle1' component='p'>
                                                    {t(`common:reject`)}
                                                </Typography>
                                            </CustomButton>
                                        </Grid>
                                    )}
                                    {(winner || hasOffer) && isUserCreator && (
                                        <Grid item xs={12}>
                                            <CustomButton
                                                color='primary'
                                                disabled={isFetch}
                                                onClick={handleAccept}
                                            >
                                                <Typography variant='subtitle1' component='p'>
                                                    {t(`common:${winner ? 'finish' : 'accept'}`)}
                                                </Typography>
                                            </CustomButton>
                                        </Grid>
                                    )}
                                </>
                            )}
                        </Grid>
                        {isNotPassModeration && (
                            <Grid item xs={12} md={6}>
                                <Paper className='paper-block'>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant='subtitle1' component='p' gutterBottom>
                                                {t('ban_reason')}:
                                            </Typography>
                                        </Grid>
                                        {reason}
                                    </Grid>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </CabinetModal>
        </>
    );
};
