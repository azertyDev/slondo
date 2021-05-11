import React from 'react';
import {SafetyDeal} from "@src/components/cabinet/cabinet_pages/safety_deal/SafetyDeal";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";
import {useTranslation} from 'next-i18next';

const SafetyDealContainer = () => {
    const {t} = useTranslation(['cabinet', 'notifications','categories', 'common', 'locations']);
    return (
        <SafetyDeal/>
    )
};

export default withAuthRedirect(SafetyDealContainer);