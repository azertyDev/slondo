import {FC, useContext} from 'react';
import {WithT} from "i18next";
import {CardDataType} from '@root/interfaces/CardData';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {Box, CircularProgress, Grid, Paper, Typography} from '@material-ui/core';
import {
    DeliveryIcon,
    ExchangeIcon,
    LetterIcon,
    LocationIcon,
    PhoneIcon,
    RenewalIcon,
    SafeIcon
} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {BetsList} from '@src/components/elements/bets_list/BetsList';
import {numberPrettier} from '@src/helpers';
import {UserCtx} from "@src/context/UserCtx";
import {UserCard} from "@src/components/cabinet/components/user_card/UserCard";
import {useStyles} from './useStyles';

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
        setFetchedBetsData,
        handleCloseDetailModal,
        handleOffersOpen,
        handleAccept,
        handleReject
    } = props;

    const {
        author,
        ads_type,
        status,
        auction,
        available_days,
        exchange,
        delivery,
        safe_deal
    } = post;

    const {user} = useContext(UserCtx);

    const auctionId = auction?.id;
    const offer = auction?.offer;
    const offerUser = offer?.user;
    const winner = auction?.winner;
    const isUserWinner = winner?.id === user.id;
    const isUserCreator = author?.id === user.id;
    const hasOffer = offerUser && status === 'public';
    const isAuction = ads_type === 'auc' || ads_type === 'exauc';
    const inactive = status === 'archive' || status === 'history';
    const userData = (isUserWinner || !isUserCreator) ? author : winner ?? offerUser;

    const classes = useStyles();
    return (
        <div>
            <CabinetModal
                maxWidth='lg'
                openDialog={open}
                handleCloseDialog={handleCloseDetailModal}
            >
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Box
                            width={1}
                            my={2}
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Typography variant='h6'>
                                <strong>
                                    {`${t(`common:${ads_type}`)} №: ${post.id}`}
                                </strong>
                            </Typography>
                        </Box>
                        <Grid item xs={12}>
                            <ListCard cardData={post}/>
                        </Grid>
                        {!!(
                            available_days
                            || exchange
                            || delivery
                            || safe_deal
                            || auction?.auto_renewal
                        ) && (
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
                                                Возможен обмен
                                            </Typography>
                                        </div>
                                    )}
                                    {!!post.delivery && (
                                        <div className="bonus_item">
                                        <span className='icon-bg'>
                                            <DeliveryIcon/>
                                        </span>
                                            <Typography variant="body1">
                                                Есть доставка
                                            </Typography>
                                        </div>
                                    )}
                                    {!!post.safe_deal && (
                                        <div className="bonus_item">
                                            <span className='icon-bg'>
                                                <SafeIcon/>
                                            </span>
                                            <Typography variant="body1">
                                                Безопасная покупка
                                            </Typography>
                                        </div>
                                    )}
                                    {!!auction?.auto_renewal && (
                                        <div className="bonus_item">
                                            <span className='icon-bg'>
                                                <RenewalIcon/>
                                            </span>
                                            <Typography variant="body1">
                                                Автопродление
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
                        <Grid container item spacing={2}>
                            {isAuction && (
                                <>
                                    <Grid item xs={12} md={6}>
                                        {isBetsFetch
                                            ? <CircularProgress color="primary"/>
                                            : <BetsList
                                                bets={bets}
                                                showBetsCount={2}
                                                betsCount={betsCount}
                                                auctionId={auctionId}
                                                handleRefresh={setFetchedBetsData}
                                                title={t('auction:extremeRates')}
                                            />}
                                    </Grid>
                                    <Grid item xs={12} md={6} className={classes.userInfoWrapper}>
                                        <div className='user-info-title'>
                                            {(isUserWinner || isUserCreator) && userData && (
                                                <Typography variant='subtitle2' gutterBottom>
                                                    {t(isUserWinner
                                                        ? 'seller'
                                                        : offer && !winner
                                                            ? 'maxOffer'
                                                            : 'winner')}
                                                </Typography>
                                            )}
                                            {isUserCreator && offer && !winner && (
                                                <>
                                                    <Typography variant='subtitle2'>
                                                        &nbsp;{t('offer_price', {price: numberPrettier(offer?.price)})}&nbsp;
                                                    </Typography>
                                                    <Typography
                                                        variant='subtitle2'
                                                        className='all-offers'
                                                        onClick={handleOffersOpen}
                                                    >
                                                        {t('all_offers', {offers: auction?.number_of_offers})}
                                                    </Typography>
                                                </>
                                            )}
                                        </div>
                                        <Paper className='paper-block'>
                                            {userData
                                                ? <UserCard userData={userData}/>
                                                : <div>{t(`auction:last_bet`, {lastBet: bets[0]?.bet})}</div>}
                                        </Paper>
                                        {(isUserCreator || isUserWinner) && !inactive && (
                                            <Box>
                                                <div className={classes.actionButtons}>
                                                    {(isUserWinner || (offerUser && !winner)) && (
                                                        <CustomButton
                                                            color='primary'
                                                            disabled={isFetch}
                                                            onClick={handleReject}
                                                        >
                                                            <Typography variant='subtitle1'>
                                                                {t(`common:reject`)}
                                                            </Typography>
                                                        </CustomButton>
                                                    )}
                                                    {(winner || hasOffer) && isUserCreator && (
                                                        <CustomButton
                                                            color='primary'
                                                            disabled={isFetch}
                                                            onClick={handleAccept}
                                                        >
                                                            <Typography variant='subtitle1'>
                                                                {t(`common:${winner ? 'finish' : 'accept'}`)}
                                                            </Typography>
                                                        </CustomButton>
                                                    )}
                                                </div>
                                            </Box>
                                        )}
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </div>
            </CabinetModal>
        </div>
    );
};
