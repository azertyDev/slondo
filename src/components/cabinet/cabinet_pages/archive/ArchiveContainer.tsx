import React, {FC, ReactElement} from 'react';
import {WithT} from "i18next";
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {ArchiveComponent} from '@src/components/cabinet/cabinet_pages/archive/ArchiveComponent';

export type TabsDataType = {
    title: string;
    count: number;
    component: ReactElement
};

export const ArchiveContainer: FC<{ t: WithT }> = (props) => {
    const tabsData: TabsDataType[] = [
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
