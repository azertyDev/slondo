import React from 'react';
import {CardTabs} from "@src/components/cabinet/cabinet_pages/CardTabs";
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
        <CardTabs title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
