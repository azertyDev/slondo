import React from 'react';
import {CardTabs} from "@src/components/cabinet/cabinet_pages/CardTabs";
import {FavoriteComponent} from "@src/components/cabinet/cabinet_pages/favorite/FavoriteComponent";

export const FavoriteContainer = (props) => {
    const tabsData = [
        {
            title: 'Объявления',
            count: 2,
            component: <FavoriteComponent/>
        },
        {
            title: 'Безопасная покупка',
            count: 2,
            component: <FavoriteComponent/>
        },
    ]

    const title = 'Избранное';

    return (
        <CardTabs title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
