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
import {useStyles} from './useStyles';

type DetailedPostViewPropsType = {
    data: CardDataType,
    detailedModalOpen: boolean,
    fetchPostData?: (t?: string) => Promise<void>,
    handleDetailedClose: () => void,
    handleNotificationsOpen: (id: number) => () => void,
    handleRejectVictory?: (auction_id: number) => () => void,
    handleDeactivate?: () => Promise<void>,
    handleSettingsOpen?: (postId: number, post, index: number) => () => void
}

export const DetailedPostView: FC<DetailedPostViewPropsType> = (props) => {
    const {
        data,
        fetchPostData,
        detailedModalOpen,
        handleDetailedClose,
        handleNotificationsOpen,
        handleRejectVictory,
        handleDeactivate,
        handleSettingsOpen
    } = props;

    const dispatch = useDispatch();
    const {t} = useTranslation('auction');
    const userInfo = useSelector((store: RootState) => store.user.info);

    const initialOffersState: OffersStateType = {
        total: null,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [offersData, setOffersData] = useState(initialOffersState);

    const auctionId = data.auction?.id;
    const isAuction = data.ads_type === 'auc' || data.ads_type === 'exauc';
    const archive = data.status === 'archive' || data.status === 'history' ? 1 : 0;
    const isPublic = data.status === 'public';

    const offer = data.auction?.offer;
    const offering = offer?.user;
    const author = data.author;
    const winner = data.auction?.winner;
    const isUserWinner = winner?.id === userInfo.id;
    const isUserCreator = author?.id === userInfo.id;

    const userData = (isUserWinner || !isUserCreator) ? author : winner ?? offering;

    const {bets, betsCount, isBetsFetch, setFetchedBetsData} = useBetsData(
        {
            auction_id: auctionId,
            page: 1,
            itemsPerPage: 2,
            archive: archive
        }
    );

    const [lastBet] = bets;

    const acceptOfferThePrice = (offer_id: number, accept = false) => async () => {
        try {
            setIsFetch(true);

            await userAPI.acceptOfferThePrice(offer_id, accept);
            fetchPostData && await Promise.all([fetchPostData(), fetchPostData('auc')]);

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        detailedModalOpen && !!auctionId && setFetchedBetsData();
    }, [auctionId, detailedModalOpen]);

    console.log(data);
    const classes = useStyles();
    return (
        <CabinetModal
            maxWidth='lg'
            openDialog={detailedModalOpen}
            handleCloseDialog={handleDetailedClose}
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
                                {`${t(`common:${data.ads_type}`)} №: ${data.id}`}
                            </strong>
                        </Typography>
                    </Box>
                    <Grid item xs={12}>
                        <ListCard cardData={data}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className='paper-block'>
                            {!!data.available_days && (
                                <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <PhoneIcon/>
                                    </span>
                                    <Typography variant="body1">
                                        {`${data.available_start_time}-${data.available_end_time}`}
                                    </Typography>
                                </div>
                            )}
                            {!!data.exchange && (
                                <div className="bonus_item">
                                    <span className='icon-bg'>
                                    <ExchangeIcon/>
                                    </span>
                                    <Typography variant="body1">
                                        Возможен обмен
                                    </Typography>
                                </div>
                            )}
                            {!!data.delivery && (
                                <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <DeliveryIcon/>
                                    </span>
                                    <Typography variant="body1">
                                        Есть доставка
                                    </Typography>
                                </div>
                            )}
                            {!!data.safe_deal && (
                                <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <SafeIcon/>
                                    </span>
                                    <Typography variant="body1">
                                        Безопасная покупка
                                    </Typography>
                                </div>
                            )}
                            {!!data.auction?.auto_renewal && (
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
                            onClick={handleNotificationsOpen(data.id)}
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
                        {handleSettingsOpen && !archive && isUserCreator && (
                            <CustomButton
                                className={`${classes.btn} settings`}
                                onClick={handleSettingsOpen(data.id, data, 1)}
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
                                    {`${t(`locations:${data.region?.name ?? ''}`)}`}
                                    {`, ${t(`locations:${data.city?.name ?? ''}`)}`}
                                    {`, ${t(`locations:${data.district?.name ?? ''}`)}`}
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
                                     archive={archive}
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
                                            {`${numberPrettier(offer?.price)} сум.`}
                                        </Typography>&nbsp;
                                            <Typography className='all-offers' variant='subtitle2'>
                                                Все предложения ({data.auction?.number_of_offers})
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
                                     : <div>Last bet: {` ${lastBet?.bet} sum`}</div>}
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
                                                    disabled={isFetch}
                                                    color='primary'
                                                    onClick={acceptOfferThePrice(offer.id)}
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
    );
};
