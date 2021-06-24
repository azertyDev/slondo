import {FC} from 'react';
import {WithT} from 'i18next';
import {Help} from '@material-ui/icons';
import {Grid, Typography} from '@material-ui/core';
import {DeliveryIcon, SafeIcon, ExchangeIcon} from '@src/components/elements/icons';
import {site_services} from '@src/common_data/site_services';
import {useStyles} from './useStyles';
import {ServiceItem} from '@src/components/post/create_post/form_page/common_form/site_services/ServiceItem';
import Link from 'next/link';


type PaymentDeliveryPropsType = {
    values,
    iconMode?: boolean,
    isAuction: boolean,
    handleCheckbox,
    categoryName: string
} & WithT;

export const SiteServices: FC<PaymentDeliveryPropsType> = (props) => {
    const {
        t,
        values,
        iconMode,
        isAuction,
        handleCheckbox,
        categoryName
    } = props;

    const hasSafeDeal = !!site_services.safe_deal[categoryName];
    const hasExchange = !!site_services.exchange[categoryName];
    const hasDelivery = !!site_services.delivery[categoryName];

    const classes = useStyles();
    return (
        <Grid
            item
            container
            spacing={1}
            className={classes.root}
        >
            <Grid item xs={12}>
                <Typography variant='subtitle1'>
                    Сервис
                </Typography>
            </Grid>
            {!isAuction && (
                <>
                    {hasSafeDeal && (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            container
                            alignItems="center"
                        >
                            <ServiceItem
                                icon={<SafeIcon />}
                                serviceText={t('common:safe_deal')}
                                handleCheckbox={handleCheckbox('safe_deal')}
                                checked={values.safe_deal}
                            />
                        </Grid>
                    )}
                    {hasExchange && (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            container
                            alignItems="center"
                        >
                            <ServiceItem
                                icon={<ExchangeIcon />}
                                serviceText={t('common:exchange')}
                                checked={values.exchange}
                                handleCheckbox={handleCheckbox('exchange')}
                            />
                        </Grid>
                    )}
                </>
            )}
            {hasDelivery && (
                <Grid
                    item
                    xs={12}
                    sm={4}
                    container
                    alignItems="center"
                >
                    <ServiceItem
                        icon={<DeliveryIcon />}
                        serviceText={t('common:delivery')}
                        checked={values.delivery}
                        handleCheckbox={handleCheckbox('delivery')}
                    />
                </Grid>
            )}
        </Grid>
    );
};