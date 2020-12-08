import React from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {FavoriteComponent} from "@src/components/cabinet/cabinet_pages/favorite/FavoriteComponent";

export const FavoriteContainer = (props) => {
    const tabsData = [
        {
            title: 'Объявления',
            count: 2,
            component: <FavoriteComponent/>
        },
        {
            title: 'Аукционы',
            count: 2,
            component: <FavoriteComponent/>
        },
    ]

    const title = 'Избранное';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
