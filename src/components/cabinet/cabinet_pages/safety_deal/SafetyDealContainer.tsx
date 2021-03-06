import React from 'react';
import {SafetyDeal} from "@src/components/cabinet/cabinet_pages/safety_deal/SafetyDeal";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";

const SafetyDealContainer = () => {
    return (
        <SafetyDeal/>
    )
};

export default withAuthRedirect(SafetyDealContainer);