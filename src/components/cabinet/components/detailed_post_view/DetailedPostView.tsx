import {FC} from 'react';
import {CardDataType} from '@root/interfaces/CardData';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {Box, Grid, Paper, Typography} from '@material-ui/core';
import {DeliveryIcon, ExchangeIcon, PhoneIcon, RenewalIcon, RocketIcon, SafeIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';

type DetailedPostViewPropsType = {
    data: CardDataType,
    detailedModalOpen: boolean,
    handleDetailedClose: () => void
}

export const DetailedPostView: FC<DetailedPostViewPropsType> = (props) => {
    const {t} = useTranslation('common');
    const {
        data,
        detailedModalOpen,
        handleDetailedClose
    } = props;

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
                            {t(data.ads_type)} №: {data.id}
                        </strong>
                    </Typography>
                </Box>
                <Grid item xs={12}>
                    <ListCard cardData={data} />
                </Grid>
                <Grid item xs={6}>
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
                <Grid item xs={6}>
                    <CustomButton
                        className={classes.advertise}
                        disabled
                    >
                        <RocketIcon />
                        &nbsp;
                        <Typography variant='subtitle1'>
                            Рекламировать
                        </Typography>
                    </CustomButton>
                </Grid>
            </Grid>
        </CabinetModal>
    );
};
