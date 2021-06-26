import {FC} from 'react';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {UserPaymentCard} from '@src/components/elements/userPaymentCard/UserPaymentCard';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';

export const SafetyDeal: FC = () => {
    const {t} = useTranslation('cabinet');
    const title = t('filters:safe_deal');

    const classes = useStyles();
    return (
        <CabinetWrapper headerTitle={title} title={title}>
            <div className={classes.root}>
                <UserPaymentCard/>
            </div>
        </CabinetWrapper>
    );
};