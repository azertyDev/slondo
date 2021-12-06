import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useRouter} from 'next/router';

type PaymentStageProps = {
    isFetch: boolean;
    selectedServices;
    paymentType: 'bonus' | 'sum';
    activateServices: () => void;
    switchPaymentStage: () => void;
    declOfNum: (n: number, locale: string, serviceName: string) => string;
};

export const PaymentStage: FC<PaymentStageProps> = props => {
    const {
        isFetch,
        paymentType,
        selectedServices,
        declOfNum,
        activateServices,
        switchPaymentStage
    } = props;

    const {locale} = useRouter();
    const {t} = useTranslation('cabinet');

    return (
        <div>
            <CustomButton onClick={switchPaymentStage}>
                {t('common:back')}
            </CustomButton>
            <Box p={{xs: 2}}>
                {selectedServices.map(srv => {
                    return (
                        <div key={srv.id}>
                            {t(srv.name)}&nbsp;
                            {srv.value}&nbsp;
                            {declOfNum(srv.value, locale, srv.name)}&nbsp;
                            {srv.price}&nbsp;
                            {t('filters:sum')}
                        </div>
                    );
                })}
            </Box>
            <Typography variant="subtitle1">
                {t('payment_type')} - {paymentType}
            </Typography>
            <CustomButton disabled={isFetch} onClick={activateServices}>
                {t('activate')}
            </CustomButton>
        </div>
    );
};
