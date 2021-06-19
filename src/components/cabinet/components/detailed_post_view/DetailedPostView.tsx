import {FC, useEffect} from 'react';
import {CardDataType} from '@root/interfaces/CardData';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {Box, Grid, Paper, Typography} from '@material-ui/core';
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
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {BetsList} from '@src/components/elements/bets_list/BetsList';
import {useBetsData} from '@src/hooks/useBetsData';
import {useStyles} from './useStyles';
import {numberPrettier} from '@src/helpers';

type DetailedPostViewPropsType = {
    data: CardDataType,
    detailedModalOpen: boolean,
    handleDetailedClose: () => void,
    handleNotificationsOpen: (id: number) => () => void,
    handleRejectVictory?: (auction_id: number) => () => void,
    handleDeactivate?,
    handleSettingsOpen?: (postId: number, post, index: number) => () => void
}

export const DetailedPostView: FC<DetailedPostViewPropsType> = (props) => {
    const {
        data,
        detailedModalOpen,
        handleDetailedClose,
        handleNotificationsOpen,
        handleRejectVictory,
        handleDeactivate,
        handleSettingsOpen
    } = props;

    const userInfo = useSelector((store: RootState) => store.user.info);
    const {t} = useTranslation(['auction', 'common', 'locations']);

    const auctionId = data.auction?.id;
    const isAuction = data.ads_type === 'auc' || data.ads_type === 'exauc';
    const isSuspend = data.status === 'suspended';
    const isSold = data.status === 'sold';
    const isPublic = data.status === 'public';
    const isWinner = data.auction?.winner_id === userInfo.id;
    const isCreator = data.creator;

    const {bets, betsCount, setFetchedBetsData} = useBetsData(
        {
            auction_id: auctionId,
            page: 1,
            itemsPerPage: 2
        }
    );

    useEffect(() => {
        !!auctionId && setFetchedBetsData();
    }, [auctionId]);

    const classes = useStyles();
    return (
        <CabinetModal
            openDialog={detailedModalOpen}
            handleCloseDialog={handleDetailedClose}
            maxWidth='lg'
        >
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
                            {/*{t(`common:${data.ads_type}`)} №: {data.id}*/}
                            {`${t(`common:${data.ads_type}`)} №: ${data.id}`}
                        </strong>
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <ListCard cardData={data}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        {!!data.available_days && (
                            <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <PhoneIcon/>
                                    </span>
                                <Typography variant="body1">
                                    {/*{weekDaysHdataper(data.available_days, t)}&nbsp;*/}
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
                            variant="subtitle1"
                            color="initial"
                            noWrap
                        >
                            Уведомления/ История
                        </Typography>
                        <ChevronRightIcon color='action' />
                    </CustomButton>
                    {
                        isCreator && (
                            <CustomButton
                                className={`${classes.btn} settings`}
                                onClick={handleSettingsOpen(data.id, data, 1)}
                            >
                                <Typography variant='subtitle1'>
                                    Настройки
                                </Typography>
                                <ChevronRightIcon color='action' />
                            </CustomButton>
                        )
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Box className='location' width={1}>
                            <LocationIcon />
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
                        className={`${classes.btn} advertise`}
                        disabled
                    >
                        <RocketIcon />
                        &nbsp;
                        <Typography variant='subtitle1'>
                            Рекламировать
                        </Typography>
                    </CustomButton>
                </Grid>
                {isAuction && (
                    <Grid item xs={12} md={6}>
                        <BetsList
                            bets={bets}
                            betsCount={betsCount}
                            auctionId={auctionId}
                            showBetsCount={2}
                            handleRefresh={setFetchedBetsData}
                            title={t('auction:extremeRates')}
                        />
                    </Grid>
                )}
                <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' gutterBottom>
                        {isWinner ? 'Продавец' : 'Победитель аукциона'}
                        {isCreator ? 'Предложенная цена' : null}
                    </Typography>
                    <Paper className={classes.paper}>
                        <Box className={classes.userInfo}>
                            {/* Если я не победитель и если я не создатель то отображать последнюю свою ставку */}
                            {/* Если я не победитель и если я создатель и статус 'suspend' или 'sold' то отображать победителя */}
                            {isAuction && isCreator && isSuspend || isSold && (
                                <UserInfoWithAvatar
                                    owner={data.auction?.winner}
                                    isOwner
                                    width='50px'
                                    height='50px'
                                />
                            )}
                            {/* Если я создатель и статус 'public' то ничего не отображать но если есть предложенные */}
                            {isAuction && isCreator && isPublic && !!data.auction?.offer && (
                                <Box>
                                    <UserInfoWithAvatar
                                        owner={data.auction?.offer?.user}
                                        isOwner
                                        width='50px'
                                        height='50px'
                                    />
                                    <Box>
                                        <Typography variant='h5'>
                                            {`${numberPrettier(data.auction?.offer?.price)} сум`}
                                        </Typography>
                                        <Typography variant='subtitle2'>
                                            Все предложения ({data.auction?.number_of_offers})
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                            {/*Если я не создатель то отображать последнюю свою ставку */}

                            {/* Если я победитель показать продавца или если я продавец то победителя*/}
                            <UserInfoWithAvatar
                                owner={isWinner ? data?.author : data.auction?.winner}
                                isOwner
                                width='50px'
                                height='50px'
                            />
                        </Box>
                        <Box ml={2} width='40%'>
                            <CustomButton>
                                <PhoneIcon />
                                <Typography variant='subtitle2'>
                                    Позвонить
                                </Typography>
                            </CustomButton>
                            <CustomButton>
                                <LetterIcon />
                                <Typography variant='subtitle2'>
                                    Написать
                                </Typography>
                            </CustomButton>
                        </Box>
                    </Paper>
                    <Box>
                        {isCreator && isSuspend && (
                            <div className={classes.actionButtons}>
                                <CustomButton color='primary'>
                                    <Typography variant='subtitle1'>
                                        Завершить аукцион
                                    </Typography>
                                </CustomButton>
                            </div>
                        )}
                        {isWinner && isSuspend && !isCreator && (
                            <div className={classes.actionButtons}>
                                <CustomButton className='reject-btn' onClick={handleRejectVictory(data.auction.id)}>
                                    <Typography variant='subtitle1'>Отказать</Typography>
                                </CustomButton>
                            </div>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </CabinetModal>
    );
};
