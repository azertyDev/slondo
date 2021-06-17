import {FC} from 'react';
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
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {BetsList} from '@src/components/elements/bets_list/BetsList';

type DetailedPostViewPropsType = {
    data: CardDataType,
    detailedModalOpen: boolean,
    handleDeactivate?: (auction_id: number) => () => void,
    handleDetailedClose: () => void,
    handleNotificationsOpen?: (id: number) => () => void,
    handleRejectVictory?: (auction_id: number) => () => void
}

export const DetailedPostView: FC<DetailedPostViewPropsType> = (props) => {
    const userInfo = useSelector((store: RootState) => store.user.info);
    const {t} = useTranslation(['auction', 'common', 'locations']);
    const {
        data,
        handleDeactivate,
        detailedModalOpen,
        handleDetailedClose,
        handleNotificationsOpen,
        handleRejectVictory
    } = props;


    const isAuction = data.ads_type === 'auc' || data.ads_type === 'exauc';
    const isWinner = userInfo.id === data.auction?.winner_id;
    const isOwner = userInfo.id === data.author?.id;

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
                    <ListCard cardData={data} />
                </Grid>
                {/*{!!data.available_days && !!data.exchange && !!data.ddataivery && !!data.ddataivery && !!data.safe_deal && (*/}
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        {!!data.available_days && (
                            <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <PhoneIcon />
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
                                    <ExchangeIcon />
                                    </span>
                                <Typography variant="body1">
                                    Возможен обмен
                                </Typography>
                            </div>
                        )}
                        {!!data.delivery && (
                            <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <DeliveryIcon />
                                    </span>
                                <Typography variant="body1">
                                    Есть доставка
                                </Typography>
                            </div>
                        )}
                        {!!data.safe_deal && (
                            <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <SafeIcon />
                                    </span>
                                <Typography variant="body1">
                                    Безопасная покупка
                                </Typography>
                            </div>
                        )}
                        {!!data.auction?.auto_renewal && (
                            <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <RenewalIcon />
                                    </span>
                                <Typography variant="body1">
                                    Автопродление
                                </Typography>
                            </div>
                        )}
                    </Paper>
                </Grid>
                {/*)}*/}
                <Grid item xs={12} md={6}>
                    <CustomButton
                        className={`${classes.btn} notification`}
                        disabled={!data.observer?.number_of_notifications}
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
                    <CustomButton
                        className={`${classes.btn} settings`}
                        // disabled={!data.observer.number_of_notifications}
                        // onClick={}
                    >
                        <Typography
                            variant="subtitle1"
                            color="initial"
                            noWrap
                        >
                            Настройки
                        </Typography>
                        <ChevronRightIcon color='action' />
                    </CustomButton>
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
                            title={t('auction:extremeRates')}
                            auctionId={data.auction.id}
                            showBetsCount={2}
                            archive={0}
                        />
                    </Grid>
                )}
                <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' gutterBottom>
                        Победитель аукциона
                    </Typography>
                    <Paper className={classes.paper}>
                        {/*   Менять данные пользователя на победителя (АУКЦИОН)   */}
                        <Box className={classes.userInfo}>
                            {isWinner && (
                                <UserInfoWithAvatar
                                    owner={data.auction.winner}
                                    isOwner={true}
                                    width='50px'
                                    height='50px'
                                />
                            )}
                            {isOwner && (
                                <UserInfoWithAvatar
                                    owner={data.author}
                                    isOwner={true}
                                    width='50px'
                                    height='50px'
                                />
                            )}

                            <Box>
                                {data.creator && (data.status === 'suspended') && (
                                    <div className="status-buttons">
                                        <CustomButton className='end-auction' onClick={handleDeactivate(data.id)}>
                                            <Typography variant='subtitle1'>
                                                Завершить аукцион
                                            </Typography>
                                        </CustomButton>
                                    </div>
                                )}
                                {((data.status === 'suspended') && !data.creator && (userInfo.id === data.auction.winner_id)) && (
                                    <div className="status-buttons">
                                        <CustomButton onClick={handleRejectVictory(data.auction.id)}>
                                            <Typography variant='subtitle1'>Отказать</Typography>
                                        </CustomButton>
                                    </div>
                                )}
                            </Box>
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
                </Grid>
            </Grid>
        </CabinetModal>
    );
};
