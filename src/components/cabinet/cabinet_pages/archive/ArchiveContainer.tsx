import React from 'react';
import {CardTabs} from "@src/components/cabinet/cabinet_pages/CardTabs";
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
        <CardTabs title={title} tabsData={tabsData} headerTitle={title} t={props.t}/>
    )
}
