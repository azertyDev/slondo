import React from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {MyAncmnts} from "@src/components/cabinet/cabinet_pages/my_ancmnts/MyAncmnts";

export const MyAncmntsContainer = (props) => {
    const tabsData = [
        {
            title: 'Объявления',
            count: 2,
            component: <MyAncmnts/>
        },
        {
            title: 'Безопасная покупка',
            count: 2,
            component: <MyAncmnts/>
        },
    ]

    const title = 'Мои объявления';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
