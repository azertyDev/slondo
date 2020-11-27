import React from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {ArchiveComponent} from '@src/components/cabinet/cabinet_pages/archive/ArchiveComponent'

export const ArchiveContainer = (props) => {
    const tabsData = [
        {
            title: 'Объявления',
            count: 2,
            component: <ArchiveComponent/>
        },
        {
            title: 'Аукционы',
            count: 4,
            component: <ArchiveComponent/>
        },
    ]

    const title = 'Архив';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
