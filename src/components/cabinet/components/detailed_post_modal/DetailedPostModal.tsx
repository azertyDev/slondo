import {FC, useEffect, useState} from 'react';
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
    RocketIcon,
    SafeIcon
} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {useTranslation} from 'next-i18next';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {BetsList} from '@src/components/elements/bets_list/BetsList';
import {useBetsData} from '@src/hooks/useBetsData';
import {numberPrettier} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {OffersStateType} from '@root/interfaces/Cabinet';
import {useModal} from '@src/hooks/useModal';
import {RatingModal} from '@src/components/elements/rating_modal/RatingModal';
import {SettingsModal} from '@src/components/cabinet/components/settings_modal/SettingsModal';
import {useStyles} from './useStyles';

type DetailedPostViewPropsType = {
    post: CardDataType,
    open: boolean,
    handleRefresh: () => void,
    onClose: () => void,
    handleNotificationsOpen: (id: number) => () => void,
    handleDeactivate?: () => Promise<void>,
}

export const DetailedPostModal: FC<DetailedPostViewPropsType> = (props) => {
    const {
        open,
        onClose,
        post,
        handleRefresh,
        handleNotificationsOpen
    } = props;

    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');
    const userInfo = useSelector((store: RootState) => store.user.info);

    const auctionId = post.auction?.id;
    const isPublic = post.status === 'public';
    const isAuction = post.ads_type === 'auc' || post.ads_type === 'exauc';
    const archive = post.status === 'archive' || post.status === 'history';

    const offer = post.auction?.offer;
    const offering = offer?.user;
    const author = post.author;
    const winner = post.auction?.winner;
    const isUserWinner = winner?.id === userInfo.id;
    const isUserCreator = author?.id === userInfo.id;
    const userForRating = isUserWinner ? winner : author;

    const userData = (isUserWinner || !isUserCreator) ? author : winner ?? offering;

    const initialOffersState: OffersStateType = {
        total: null,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);

    const {modalOpen: ratingOpen, handleModalOpen: handleOpenRating, handleModalClose: handleCloseRating} = useModal();
    const {modalOpen: settingsModalOpen, handleModalClose: closeSettingsModal, handleModalOpen: openSettingsModal} = useModal();

    const {bets, betsCount, isBetsFetch, setFetchedBetsData} = useBetsData(
        {
            page: 1,
            itemsPerPage: 2,
            auction_id: auctionId
        }
    );

    const [lastBet] = bets;

    const acceptOfferThePrice = (offer_id: number, accept = false) => async () => {
        try {
            setIsFetch(true);

            await userAPI.acceptOfferThePrice(offer_id, accept);

            handleRefresh();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleDeactivate = async () => {
        try {
            setIsFetch(true);
            await userAPI.deactivateById(post.id);
            onClose();
            handleOpenRating();
            handleRefresh();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleSettingsClose = () => {
        closeSettingsModal();
    };

    const handleSettingsOpen = () => {
        onClose();
        openSettingsModal();
    };

    const handleRejectVictory = (auction_id) => async () => {
        try {
            setIsFetch(true);
            await userAPI.rejectVictory(auction_id);
            handleRefresh();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        open && !!auctionId && setFetchedBetsData();
    }, [auctionId, open]);

    console.log(post);
    const classes = useStyles();
    return (
        <div>
            <CabinetModal
                maxWidth='lg'
                openDialog={open}
                handleCloseDialog={onClose}
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
                                    {`${t(`common:${post.ads_type}`)} №: ${post.id}`}
                                </strong>
                            </Typography>
                        </Box>
                        <Grid item xs={12}>
                            <ListCard cardData={post}/>
                        </Grid>
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
                                {!!post.auction?.auto_renewal && (
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
                        <Grid item xs={12} md={6}>
                            <CustomButton
                                className={`${classes.btn} notification`}
                                // disabled={!data.observer.number_of_notifications}
                                onClick={handleNotificationsOpen(post.id)}
                            >
                                <Typography
                                    noWrap
                                    color="initial"
                                    variant="subtitle1"
                                >
                                    Уведомления / История
                                </Typography>
                                <ChevronRightIcon color='action'/>
                            </CustomButton>
                            {!archive && isUserCreator && (
                                <CustomButton
                                    className={`${classes.btn} settings`}
                                    onClick={handleSettingsOpen}
                                >
                                    <Typography variant='subtitle1'>
                                        {t('settings')}
                                    </Typography>
                                    <ChevronRightIcon color='action'/>
                                </CustomButton>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper className='paper-block'>
                                <Box className='location' width={1}>
                                    <LocationIcon/>
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                        noWrap
                                    >
                                        {`${t(`locations:${post.region?.name ?? ''}`)}`}
                                        {`, ${t(`locations:${post.city?.name ?? ''}`)}`}
                                        {`, ${t(`locations:${post.district?.name ?? ''}`)}`}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomButton
                                disabled
                                className={`${classes.btn} advertise`}
                            >
                                <RocketIcon/>&nbsp;
                                <Typography variant='subtitle1'>
                                    Рекламировать
                                </Typography>
                            </CustomButton>
                        </Grid>
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
                                                {isUserWinner
                                                 ? 'Продавец'
                                                 : offer && !winner
                                                   ? 'Макс. предложенная цена:'
                                                   : 'Победитель аукциона'}
                                            </Typography>
                                        )}
                                        {isUserCreator && offer && (
                                            <>
                                                &nbsp;<Typography variant='subtitle2'>
                                                {`${numberPrettier(offer?.price)} сум`}
                                            </Typography>&nbsp;
                                                <Typography className='all-offers' variant='subtitle2'>
                                                    Все предложения ({post.auction?.number_of_offers})
                                                </Typography>
                                            </>
                                        )}
                                    </div>
                                    <Paper className='paper-block'>
                                        {userData
                                         ? <div className='user-info'>
                                             <UserInfoWithAvatar
                                                 isOwner
                                                 width='50px'
                                                 height='50px'
                                                 owner={userData}
                                             />
                                             <div className='contacts-btns'>
                                                 <CustomButton>
                                                     <PhoneIcon/>
                                                     <Typography variant='subtitle2'>
                                                         Позвонить
                                                     </Typography>
                                                 </CustomButton>
                                                 <CustomButton disabled>
                                                     <LetterIcon/>
                                                     <Typography variant='subtitle2'>
                                                         Написать
                                                     </Typography>
                                                 </CustomButton>
                                             </div>
                                         </div>
                                         : <div>{t(`last_bet`, lastBet?.bet)}</div>}
                                    </Paper>
                                    {(isUserCreator || isUserWinner) && !archive && (
                                        <Box>
                                            <div className={classes.actionButtons}>
                                                {isUserCreator && offering && isPublic && (
                                                    <CustomButton
                                                        disabled={isFetch}
                                                        color='primary'
                                                        className={isUserWinner ? 'reject-btn' : ''}
                                                        onClick={acceptOfferThePrice(offer.id, true)}
                                                    >
                                                        <Typography variant='subtitle1'>
                                                            {t('common:accept')}
                                                        </Typography>
                                                    </CustomButton>
                                                )}
                                                {(isUserWinner || offering) && (
                                                    <CustomButton
                                                        color='primary'
                                                        disabled={isFetch}
                                                        onClick={acceptOfferThePrice(offer?.id)}
                                                    >
                                                        <Typography variant='subtitle1'>
                                                            {t(`common:reject`)}
                                                        </Typography>
                                                    </CustomButton>
                                                )}
                                                {isUserCreator && winner && (
                                                    <CustomButton
                                                        disabled={isFetch}
                                                        color='primary'
                                                        onClick={handleDeactivate}
                                                    >
                                                        <Typography variant='subtitle1'>
                                                            {t(`finish`)}
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
                </div>
            </CabinetModal>
            <RatingModal
                open={ratingOpen}
                user={userForRating}
                handleCloseRating={handleCloseRating}
            />
            <SettingsModal
                post={post}
                open={settingsModalOpen}
                onClose={handleSettingsClose}
                handleDeactivate={handleDeactivate}
            />
        </div>
    );
};
