import React, {FC, ReactElement} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Archive} from '@src/components/cabinet/cabinet_pages/archive/Archive';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';


export type TabsDataType = {
    id: number;
    title: string;
    total?: number;
    component: ReactElement;
}[];

const ArchiveContainer: FC = () => {
    const tabsData: TabsDataType = [
        {
            id: 0,
            title: 'Объявления',
            total: 0,
            component: <Archive isFetch />
        },
        {
            id: 1,
            title: 'Аукционы',
            total: 0,
            component: <Archive isFetch />
        }
    ];

    const title = 'Архив';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    );
};

export default withAuthRedirect(ArchiveContainer);