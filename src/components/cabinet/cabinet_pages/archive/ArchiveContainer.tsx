import React, { FC, ReactElement } from 'react';
import { WithT } from 'i18next';
import { TabsContent } from '@src/components/cabinet/cabinet_pages/TabsContent';
import { ArchiveComponent } from '@src/components/cabinet/cabinet_pages/archive/ArchiveComponent';
import { CabinetMockData } from '../../CabinetData';

export type TabsDataType = {
    title: string;
    count: number;
    component: ReactElement;
};

export const ArchiveContainer: FC<WithT> = ({ t }) => {
    const tabsData: TabsDataType[] = [
        {
            title: 'Объявления',
            count: CabinetMockData.length,
            component: (
                <ArchiveComponent list={CabinetMockData} isFetch t={t} />
            ),
        },
        {
            title: 'Аукционы',
            count: CabinetMockData.length,
            component: (
                <ArchiveComponent list={CabinetMockData} isFetch t={t} />
            ),
        },
    ];

    const title = 'Архив';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    );
};
