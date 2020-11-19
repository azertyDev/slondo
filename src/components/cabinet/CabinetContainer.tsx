import React from 'react';
import {MainLayout} from '@src/components/MainLayout';
import {MyAds} from "@src/components/cabinet/cabinet_pages/my_ads/CabinetMain";

export const CabinetContainer = (props) => {
    return (
        <MainLayout title="Личный кабинет">
            <MyAds {...props} />
        </MainLayout>
    );
};
