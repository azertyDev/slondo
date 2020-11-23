import React from 'react';
import {CardTabs} from "@src/components/cabinet/cabinet_pages/CardTabs";
import {MyAdsComponent} from "@src/components/cabinet/cabinet_pages/my_ads/MyAdsComponent";

export const MyAdsContainer = (props) => {
    const tabsData = [
        {
            title: 'Объявления',
            count: 2,
            component: <MyAdsComponent/>
        },
        {
            title: 'Безопасная покупка',
            count: 2,
            component: <MyAdsComponent/>
        },
    ]

    const title = 'Мои объявления';

    return (
        <CardTabs title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
