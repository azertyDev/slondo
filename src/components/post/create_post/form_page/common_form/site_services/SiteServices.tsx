import {FC, useState} from 'react';
import {WithT} from 'i18next';
import Link from 'next/link';
import {Help} from '@material-ui/icons';
import {Grid, Typography} from '@material-ui/core';
import {DeliveryIcon, SafeIcon, ExchangeIcon} from '@src/components/elements/icons';
import {site_services} from '@src/common_data/site_services';
import {ServiceItem} from '@src/components/post/create_post/form_page/common_form/site_services/ServiceItem';
import {SafeDealDrawer} from '@src/components/elements/safe_deal_drawer/SafeDealDrawer';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
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

    const {cardId} = useSelector((store: RootState) => store.userCard);
    const hasCard = !!cardId;

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleSafeDealCheckBox = () => {
        if (hasCard) {
            return handleCheckbox('safe_deal');
        } else {
            return () => setDrawerOpen(true);
        }
    };

    const handleDrawerShow = (value) => () => {
        setDrawerOpen(value);
    };

    const classes = useStyles();
    return (
        <Grid
            item
            container
            spacing={1}
            className={classes.root}
        >
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
                                justify='flex-start'
                            >
                                <ServiceItem
                                    icon={<SafeIcon/>}
                                    serviceText={t('common:safe_deal')}
                                    checked={values.safe_deal}
                                    handleCheckbox={handleSafeDealCheckBox()}
                                />
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
                                <ServiceItem
                                    icon={<ExchangeIcon/>}
                                    serviceText={t('common:exchange')}
                                    checked={values.exchange}
                                    handleCheckbox={handleCheckbox('exchange')}
                                />
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
                        <ServiceItem
                            icon={<DeliveryIcon/>}
                            serviceText={t('common:delivery')}
                            checked={values.delivery}
                            handleCheckbox={handleCheckbox('delivery')}
                        />
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
                                <Link href="#">
                                    <a>
                                    <span className="safe-auction-rules">
                                        {t('common:delivery_rules')}
                                    </span>
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            )}
            <SafeDealDrawer
                open={drawerOpen}
                handleClose={handleDrawerShow(false)}
            />
        </Grid>
    );
};