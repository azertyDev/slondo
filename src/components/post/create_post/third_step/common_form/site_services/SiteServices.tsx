import {FC} from 'react';
import {WithT} from 'i18next';
import Link from 'next/link';
import {useModal} from "@src/hooks";
import {Help} from '@material-ui/icons';
import {Grid, Typography} from '@material-ui/core';
import {DeliveryIcon, SafeIcon, ExchangeIcon} from '@src/components/elements/icons';
import {site_services} from '@src/common_data/site_services';
import {ServiceItem} from '@src/components/post/create_post/third_step/common_form/site_services/ServiceItem';
import {useUserPaymentCard} from '@src/hooks/useUserPaymentCard';
import {SafeDealModal} from "@src/components/elements/safe_deal/SafeDealModal";
import {useStyles} from './useStyles';
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {SAFE_DEAL_PERCENT} from "@src/constants";

type PaymentDeliveryPropsType = {
    values,
    handleCheckbox: (name: string) => (e) => void,
    categoryName: string,
    iconMode?: boolean,
    isAuction: boolean,
    isCommonForm?: boolean
} & WithT;

export const SiteServices: FC<PaymentDeliveryPropsType> = (props) => {
    const {
        t,
        values,
        iconMode,
        isAuction,
        handleCheckbox,
        categoryName,
        isCommonForm
    } = props;

    const hasSafeDeal = !!site_services.safe_deal[categoryName] || !categoryName;
    const hasExchange = !!site_services.exchange[categoryName] || !categoryName;
    const hasDelivery = !!site_services.delivery[categoryName] || !categoryName;

    const {isFetchUserCard, fetchUserCard} = useUserPaymentCard();

    const {
        modalOpen: safeDealOpen,
        handleModalOpen: handleOpenSafeDeal,
        handleModalClose: handleCloseSafeDeal
    } = useModal();

    const handleSafeDealCheckBox = async (e) => {
        if (isCommonForm) {
            if (e.target.checked) {
                const card = await fetchUserCard();
                e.target.checked = true;
                !!card
                    ? handleCheckbox('safe_deal')(e)
                    : handleOpenSafeDeal();
            } else {
                handleCheckbox('safe_deal')(e);
            }
        } else {
            handleCheckbox('safe_deal')(e);
        }
    };

    const classes = useStyles();
    return (
        <Grid
            item
            container
            spacing={iconMode ? 2 : 1}
            className={classes.root}
        >
            {!isAuction && (
                <>
                    {hasSafeDeal && (
                        <Grid
                            item
                            container
                            alignItems="center"
                            xs={12}
                            sm={iconMode ? 4 : 12}
                            spacing={iconMode ? 0 : 1}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={!iconMode ? 6 : 12}
                                md={!iconMode ? 3 : 12}
                                container
                                alignItems="center"
                                justifyContent='flex-start'
                            >
                                {isFetchUserCard
                                    ? <CustomCircularProgress/>
                                    : <ServiceItem
                                        icon={<SafeIcon/>}
                                        serviceText={t('common:safe_deal')}
                                        checked={values.safe_deal}
                                        handleCheckbox={handleSafeDealCheckBox}
                                    />}
                            </Grid>
                            {!iconMode && (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={9}
                                    className='payment-delivery'
                                >
                                    <Help className="question-mark"/>
                                    <Typography variant="subtitle2">
                                        {`При подключении услуги «Безопасный
                                            торг». Ваша сделка защищена. Стоимость
                                            услуги составляет ${SAFE_DEAL_PERCENT}%.`}&nbsp;
                                        <Link href="/">
                                            <a>
                                                <span className="safe-auction-rules">
                                                    {t('common:safe_deal_rules')}
                                                </span>
                                            </a>
                                        </Link>
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
                            xs={12}
                            sm={iconMode ? 4 : 12}
                            spacing={iconMode ? 0 : 1}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={!iconMode ? 6 : 12}
                                md={!iconMode ? 3 : 12}
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
                                    xs={12}
                                    sm={6}
                                    md={9}
                                    className='payment-delivery'
                                >
                                    <Help className="question-mark"/>
                                    <Typography variant="subtitle2">
                                        {`Вы принимаете предложения от других пользователей на обмен`}
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
                    xs={12}
                    sm={iconMode ? 4 : 12}
                    spacing={iconMode ? 0 : 1}
                >
                    <Grid
                        item
                        xs={12}
                        sm={!iconMode ? 6 : 12}
                        md={!iconMode ? 3 : 12}
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
                            xs={12}
                            sm={6}
                            md={9}
                            className='payment-delivery'
                        >
                            <Help className="question-mark"/>
                            <Typography variant="subtitle2">
                                {`Доставка осуществляется за Ваш счет. В случае невыполнения доставки,
                                    Вы можете быть заблокированы.`}&nbsp;
                                <Link href='/'>
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
            <SafeDealModal
                open={safeDealOpen}
                onClose={handleCloseSafeDeal}
            />
        </Grid>
    );
};