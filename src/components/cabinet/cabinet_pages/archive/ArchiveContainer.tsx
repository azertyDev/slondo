import React, {FC, ReactElement} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Archive} from '@src/components/cabinet/cabinet_pages/archive/Archive';
import {CabinetMockData} from '../../CabinetMockData';
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";


export type TabsDataType = {
    title: string;
    count: number;
    component: ReactElement;
};

const ArchiveContainer: FC = () => {
    const tabsData: TabsDataType[] = [
        {
            title: 'Объявления',
            count: CabinetMockData.length,
            component: <Archive list={CabinetMockData} isFetch />
        },
        {
            title: 'Аукционы',
            count: CabinetMockData.length,
            component: <Archive list={CabinetMockData} isFetch />
        },
    ];

    const title = 'Архив';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    );
};

export default withAuthRedirect(ArchiveContainer);