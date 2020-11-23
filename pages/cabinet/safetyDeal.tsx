import React from 'react';
import {withTranslation} from '@root/i18n';
import {SafetyDealContainer} from "@src/components/cabinet/cabinet_pages/safety_deal/SafetyDealContainer";

const SafetyDeal = (props) => {
    return <SafetyDealContainer {...props} title="Безопасная покупка"/>;
};

SafetyDeal.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(SafetyDeal);
