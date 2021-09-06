import {FC} from 'react';
import Box from '@material-ui/core/Box';
import {Grid, Typography} from '@material-ui/core';
import {getTime, numberPrettier, timeFormat, weekDaysHelper} from '@src/helpers';
import {
    SafeIcon,
    PhoneIcon,
    RenewalIcon,
    DeliveryIcon,
    ExchangeIcon
} from '@src/components/elements/icons';
import {useTranslation} from 'next-i18next';
import {useRouter} from "next/router";
import {useStyles} from './useStyles';

type DefaultParamsPropsType = {
    values,
    isAuction: boolean,
    avalTimeActive: boolean,
    priceLabel: string
};

export const CommonFormPreview: FC<DefaultParamsPropsType> = (props) => {
    const {
        values,
        isAuction,
        priceLabel,
        avalTimeActive
    } = props;

    const {t} = useTranslation('post');
    const {main_ctgr, region, city} = useRouter().query;

    const urlRegion = JSON.parse(region as string);
    const urlCity = city ? JSON.parse(city as string) : null;

    const {
        auction,
        available_days,
        available_end_time,
        available_start_time
    } = values;

    const isFree = values.price === '0';
    const isService = main_ctgr === 'service';
    const locationText = `${t(`locations:${urlRegion.name}.name`)}${urlCity ? `, ${t(`locations:${urlRegion.name}.${urlCity.name}`)}` : ''}`;
    const hasService = !!values.delivery || !!values.exchange || !!values.auto_renewal || !!auction.auto_renewal || !!auction.offer_the_price || !!values.safe_deal;

    const classes = useStyles();
    return (
        <>
            {!isAuction && (
                <Grid container item spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1">
                            {t(`filters:${priceLabel}`)}:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="subtitle1">
                            {isFree
                                ? t(isService ? 'negotiated' : 'for_free')
                                : <>
                                    {numberPrettier(values.price)}&nbsp;
                                    {t(`common:${values.currency.name}`)}
                                </>}
                        </Typography>
                    </Grid>
                </Grid>
            )}
            {isAuction && (
                <>
                    {values.price && (
                        <Grid container item spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">
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
                                    {getTime(auction?.duration?.hours * 3600).days}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                    {auction.reserve_price && (
                        <Grid container item spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">
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
                        <Typography variant="subtitle1">
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
                        <Typography variant="subtitle1">
                            {t('additionalServices')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} container>
                        {values.delivery && (
                            <Box className={classes.serviceItem}>
                                <DeliveryIcon/>
                                <Typography variant="subtitle1">
                                    {t('filters:delivery')}
                                </Typography>
                            </Box>
                        )}
                        {values.exchange && (
                            <Box className={classes.serviceItem}>
                                <ExchangeIcon/>
                                <Typography variant="subtitle1">
                                    {t('filters:exchange')}
                                </Typography>
                            </Box>
                        )}
                        {auction.auto_renewal && (
                            <Box className={classes.serviceItem}>
                                <RenewalIcon/>
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
                                <SafeIcon/>
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
                    <Typography variant="subtitle1">
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
                        <Typography variant="subtitle1">
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
                        <Typography variant="subtitle1">
                            {t('common:call_times')}:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box className={classes.serviceItem}>
                            <PhoneIcon/>
                            <Typography variant="subtitle1">
                                {`${timeFormat(available_start_time)} - ${timeFormat(available_end_time)}`}&nbsp;
                                ({weekDaysHelper(available_days, t)})
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            )}
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        {t('description')}:
                    </Typography>
                    <pre style={{margin: 0, padding: '0 10px'}}>
                        <Typography variant="subtitle1">
                            {values.description}
                        </Typography>
                    </pre>
                </Grid>
            </Grid>
        </>
    );
};