import React from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {MyLotsComponent} from "@src/components/cabinet/cabinet_pages/my_lots/MyLotsComponent";

export const MyLotsContainer = (props) => {
    const tabsData = [
        {
            title: 'Созданные',
            count: 5,
            component: <MyLotsComponent/>
        },
        {
            title: 'Участие',
            count: 7,
            component: <MyLotsComponent/>
        },
    ]

    const title = 'Мои аукционы';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
