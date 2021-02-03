import React, {FC} from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {Favorite} from "@src/components/cabinet/cabinet_pages/favorite/Favorite";

export const FavoriteContainer: FC<any> = () => {
    const tabsData = [
        {
            title: 'Объявления',
            count: 2,
            component: <Favorite/>
        },
        {
            title: 'Аукционы',
            count: 2,
            component: <Favorite/>
        },
    ]

    const title = 'Избранное';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    )
}
