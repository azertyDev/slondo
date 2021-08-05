import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {numberPrettier, weekDaysHelper} from '@src/helpers';
import Box from '@material-ui/core/Box';
import {DeliveryIcon, ExchangeIcon, PhoneIcon, RenewalIcon, SafeIcon} from '@src/components/elements/icons';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';

type DefaultParamsPropsType = {
    values,
    isAuction: boolean,
    avalTimeActive: boolean,
    isAdvanceAuction: boolean,
    priceLabel: string,
    location
};

export const CommonFormPreview: FC<DefaultParamsPropsType> = (props) => {
    const {
        values,
        location,
        isAuction,
        priceLabel,
        avalTimeActive,
        isAdvanceAuction
    } = props;

    const {t} = useTranslation('post');

    const {auction, avalTime} = values;
    const locationText = `${t(`locations:${location.region.name}.name`)}${location.city ? `, ${t(`locations:${location.region.name}.${location.city.name}`)}` : ''}`;
    const hasService = !!values.delivery || !!values.exchange || !!values.auto_renewal || !!auction.auto_renewal || !!auction.offer_the_price || !!values.safe_deal;

    const classes = useStyles();
    return (
        <>
            {(isAuction && isAdvanceAuction) ? null : (
                <Grid container item spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" color='textSecondary'>
                            {t(`filters:${priceLabel}`)}:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="subtitle1">
                            {numberPrettier(values.price)}&nbsp;
                            {values.currency.name}
                        </Typography>
                    </Grid>
                </Grid>
            )}
            {isAuction && (
                <>
                    {values.price && (
                        <Grid container item spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1" color='textSecondary'>
                                    {t('filters:start_price')}:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">
                                    {numberPrettier(values.price)}&nbsp;
                                    {values.currency.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                    {auction?.duration?.hours && (
                        <Grid container item>
                            <Grid item xs={4}>
                                <Typography variant="subtitle1">
                                    {t('auction:auc_duration')}:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">
                                    {auction?.duration?.hours}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                    {auction.reserve_price && (
                        <Grid container item spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1" color='textSecondary'>
                                    {t('filters:reserve_price')}:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="subtitle1">
                                    {auction.reserve_price}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </>
            )}
            {auction.price_buy_now.value && (
                <Grid container item spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" color='textSecondary'>
                            {t('filters:buy_now')}:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="subtitle1">
                            {auction.price_buy_now.value}
                        </Typography>
                    </Grid>
                </Grid>
            )}
            {hasService && (
                <Grid container item>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" color='textSecondary'>
                            {t('additionalServices')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} container>
                        {values.delivery && (
                            <Box className={classes.serviceItem}>
                                <DeliveryIcon />
                                <Typography variant="subtitle1">
                                    {t('filters:delivery')}
                                </Typography>
                            </Box>
                        )}
                        {values.exchange && (
                            <Box className={classes.serviceItem}>
                                <ExchangeIcon />
                                <Typography variant="subtitle1">
                                    {t('filters:exchange')}
                                </Typography>
                            </Box>
                        )}
                        {auction.auto_renewal && (
                            <Box className={classes.serviceItem}>
                                <RenewalIcon />
                                <Typography variant="subtitle1">
                                    {t('filters:auto_renewal')}
                                </Typography>
                            </Box>
                        )}
                        {auction.offer_the_price && (
                            <Box className={classes.serviceItem}>
                                <Typography variant="subtitle1">
                                    {t('filters:offer_price')}
                                </Typography>
                            </Box>
                        )}
                        {values.safe_deal && (
                            <Box className={classes.serviceItem}>
                                <SafeIcon />
                                <Typography variant="subtitle1">
                                    {t('filters:safe_deal')}
                                </Typography>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            )}
            <Grid container item spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1" color='textSecondary'>
                        {t('locations:location')}:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1">
                        {locationText}
                    </Typography>
                </Grid>
            </Grid>

            {!!values.phone && !RegExp(/_/g).test(values.phone) && (
                <Grid container item spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" color='textSecondary'>
                            {t('filters:additional_phone')}:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="subtitle1">
                            {values.phone}
                        </Typography>
                    </Grid>
                </Grid>
            )}
            {avalTimeActive && (
                <Grid container item spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" color='textSecondary'>
                            {t('common:call_times')}:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box className={classes.serviceItem}>
                            <PhoneIcon />
                            <Typography variant="subtitle1">
                                {`${avalTime.available_start_time} - ${avalTime.available_end_time}`}&nbsp;
                                ({weekDaysHelper(avalTime.available_days, t)})
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </>
    );
};