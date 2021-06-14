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
    handleDetailedClose: () => void
}

export const DetailedPostView: FC<DetailedPostViewPropsType> = (props) => {
    const userInfo = useSelector((store: RootState) => store.user.info);
    const {t} = useTranslation(['auction', 'common', 'locations']);
    const {
        data,
        detailedModalOpen,
        handleDetailedClose
    } = props;

    const isAuction = data.ads_type === 'auc' || data.ads_type === 'exauc';

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
                {/*{!!data.available_days && !!data.exchange && !!data.delivery && !!data.delivery && !!data.safe_deal && (*/}
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        {!!data.available_days && (
                            <div className="bonus_item">
                                    <span className='icon-bg'>
                                        <PhoneIcon />
                                    </span>
                                <Typography variant="body1">
                                    {/*{weekDaysHelper(data.available_days, t)}&nbsp;*/}
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
                        className={classes.btn}
                        disabled
                    >
                        <RocketIcon />
                        &nbsp;
                        <Typography variant='subtitle1'>
                            Рекламировать
                        </Typography>
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
                        className={classes.btn}
                        disabled={!data.observer.number_of_notifications}
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
                </Grid>
                {isAuction && (
                    <Grid item xs={12} md={6}>
                        <BetsList
                            title={t('auction:extremeRates')}
                            auctionId={data.auction.id}
                            showBetsCount={2}
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
                            <UserInfoWithAvatar
                                owner={userInfo}
                                isOwner={true}
                                width='50px'
                                height='50px'
                            />
                        </Box>
                        <Box ml={2} width='40%'>
                            <CustomButton>
                                <PhoneIcon />
                                <Typography variant='subtitle2'>
                                    Написать
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
                {isAuction && (
                    <Grid item xs={12} md={6}>
                        {/*<BetsList*/}
                        {/*    title={t('auction:extremeRates')}*/}
                        {/*    auctionId={data.id}*/}
                        {/*    showBetsCount={2}*/}
                        {/*/>*/}
                    </Grid>
                )}
            </Grid>
        </CabinetModal>
    );
};
