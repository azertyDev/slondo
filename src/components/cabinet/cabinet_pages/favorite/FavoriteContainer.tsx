import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {Favorite} from "@src/components/cabinet/cabinet_pages/favorite/Favorite";
import {userAPI} from "@src/api/api";

export const FavoriteContainer: FC<any> = () => {
    const [data, setData] = useState<any>([])
    const [type, setType] = useState('post')

    const count = data?.data?.length
    const list = data?.data
    const tabsData = [
        {
            title: 'Объявления',
            count: count,
            component: <Favorite data={list} handleType={setType} type='post' />
        },
        {
            title: 'Аукционы',
            count: count,
            component: <Favorite data={list} handleType={setType} type='auc' />
        },
    ]

    useEffect(() => {
        userAPI.getFavorites('ru', type).then(result => setData(result))
    }, [type])

    const title = 'Избранное';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    )
}
