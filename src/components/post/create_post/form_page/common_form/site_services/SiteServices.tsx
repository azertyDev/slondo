import {FC} from 'react';
import {WithT} from 'i18next';
import {Help} from '@material-ui/icons';
import {Checkbox, Grid, Typography} from '@material-ui/core';
import {DeliveryIcon, SafeIcon, ExchangeIcon} from '@src/components/elements/icons';
import {site_services} from '@src/common_data/site_services';
import {useStyles} from './useStyles';


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
        <Grid container className={classes.root}>
            {!isAuction && (
                <>
                    {hasSafeDeal && (
                        <Grid
                            item
                            container
                            alignItems="center"
                            xs={iconMode ? 4 : 12}
                        >
                            <Grid
                                item
                                xs={iconMode ? 12 : 3}
                                container
                                alignItems="center"
                            >
                                <Checkbox
                                    color='primary'
                                    checked={values.safe_deal}
                                    onChange={handleCheckbox('safe_deal')}
                                />
                                <div className='icon-wrapper'>
                                    <SafeIcon/>
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {t('common:safe_deal')}
                                        </strong>
                                    </Typography>
                                </div>
                            </Grid>
                            {!iconMode && (
                                <Grid
                                    item
                                    xs={9}
                                    className='payment-delivery'
                                >
                                    <Help className="question-mark"/>
                                    <Typography variant="subtitle2">
                                        Примечание: При подключении услуги «Безопасный
                                        торг». Ваша сделка защищена. Стоимость
                                        услуги составляет n%.&nbsp;
                                        <a href="#">
                                        <span className="safe-auction-rules">
                                            {t('common:safe_deal_rules')}
                                        </span>
                                        </a>
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    )}
                    {hasExchange && (
                        <Grid
                            container
                            item
                            alignItems="center"
                            xs={iconMode ? 4 : 12}
                        >
                            <Grid
                                item
                                xs={iconMode ? 12 : 3}
                                container
                                alignItems="center"
                            >
                                <Checkbox
                                    color='primary'
                                    checked={values.exchange}
                                    onChange={handleCheckbox('exchange')}
                                />
                                <div className='icon-wrapper'>
                                    <ExchangeIcon/>
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {t('common:exchange')}
                                        </strong>
                                    </Typography>
                                </div>
                            </Grid>
                            {!iconMode && (
                                <Grid
                                    item
                                    xs={9}
                                    className='payment-delivery'
                                >
                                    <Help className="question-mark"/>
                                    <Typography variant="subtitle2">
                                        Примечание: Вы принимаете предложения от
                                        других пользователей на обмен.
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    )}
                </>
            )}
            {hasDelivery && (
                <Grid
                    item
                    container
                    alignItems="center"
                    xs={iconMode ? 4 : 12}
                >
                    <Grid
                        item
                        xs={iconMode ? 12 : 3}
                        container
                        alignItems="center"
                    >
                        <Checkbox
                            color='primary'
                            checked={values.delivery}
                            onChange={handleCheckbox('delivery')}
                        />
                        <div className='icon-wrapper'>
                            <DeliveryIcon/>
                            <Typography variant="subtitle1">
                                <strong>
                                    {t('common:delivery')}
                                </strong>
                            </Typography>
                        </div>
                    </Grid>
                    {!iconMode && (
                        <Grid
                            item
                            xs={9}
                            className='payment-delivery'
                        >
                            <Help className="question-mark"/>
                            <Typography variant="subtitle2">
                                Примечание: Доставка осуществляется
                                за Ваш счет. В случае невыполнения доставки,
                                Вы можете быть заблокированы.&nbsp;
                                <a href="#">
                                    <span className="safe-auction-rules">
                                        {t('common:delivery_rules')}
                                    </span>
                                </a>
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            )}
        </Grid>
    );
};