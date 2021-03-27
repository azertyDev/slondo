import React, {FC, ReactElement, useState} from 'react';
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
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
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
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={title}
            tabsData={tabsData}
            headerTitle={title}
        />
    );
};

export default withAuthRedirect(ArchiveContainer);