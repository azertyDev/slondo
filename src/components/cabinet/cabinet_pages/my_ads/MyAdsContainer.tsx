import React from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
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
            component: <MyAdsComponent safeShopping/>
        },
    ]

    const title = 'Мои объявления';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
