import {FC} from 'react';
import Box from '@material-ui/core/Box';
import {Grid, Typography} from '@material-ui/core';
import {getTime, numberPrettier, timeFormat, weekDaysHelper} from '@src/helpers';
import {
    SafeIcon,
    PhoneIcon,
    DeliveryIcon,
    ExchangeIcon, AutoRenewalIcon
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

export const FirstFormPreview: FC<DefaultParamsPropsType> = (props) => {
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
    const hasService = !!values.delivery
        || !!values.exchange
        || !!values.auto_renewal
        || !!auction.offer_the_price
        || !!values.safe_deal;
    console.log(values, !!values.auto_renewal);
    const classes = useStyles();
    return (
        <>
            {!isAuction && (
                <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1">
                            <strong>
                                {t(`filters:${priceLabel}`)}:
                            </strong>
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
                        <Grid container item spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="subtitle1">
                                    <strong>
                                        {t('filters:start_price')}:
                                    </strong>
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
                                    <strong>
                                        {t('auction:auc_duration')}:
                                    </strong>
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
                                    <strong>
                                        {t('filters:reserve_price')}:
                                    </strong>
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
                <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('filters:buy_now')}:
                            </strong>
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
                <Grid container item spacing={1} alignItems='center'>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('additionalServices')}:
                            </strong>
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
                        {values.auto_renewal && (
                            <Box className={classes.serviceItem}>
                                <AutoRenewalIcon/>
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
            <Grid container item spacing={1}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('locations:location')}:
                        </strong>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1">
                        {locationText}
                    </Typography>
                </Grid>
            </Grid>
            {!!values.phone && !RegExp(/_/g).test(values.phone) && (
                <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('filters:additional_phone')}:
                            </strong>
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
                <Grid container item spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('common:call_times')}:
                            </strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box className={classes.serviceItem}>
                            <PhoneIcon/>
                            <Typography variant="subtitle1">
                                {`${timeFormat(available_start_time)} - ${timeFormat(available_end_time)}`}&nbsp;
                                {available_days.length !== 0 && (
                                    <span>
                                        ({weekDaysHelper(available_days, t)})
                                    </span>
                                )}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            )}
            <Grid container item spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('description')}:
                        </strong>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <pre className={classes.description}>
                        <Typography variant="subtitle1">
                                {values.description.trim()}
                        </Typography>
                    </pre>
                </Grid>
            </Grid>
        </>
    );
};