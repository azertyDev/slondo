import React, { FC } from 'react';
import { TabsContent } from '@src/components/cabinet/cabinet_pages/TabsContent';
import { MyAuctionsComponent } from '@root/src/components/cabinet/cabinet_pages/my_auctions/MyAuctionsComponent';
import { CabinetMockData } from '../../CabinetData';
import { WithT } from 'i18next';


export const MyAuctionsContainer: FC<WithT> = ({ t }) => {
    const tabsData = [
        {
            title: 'Созданные',
            count: CabinetMockData.length,
            component: <MyAuctionsComponent list={CabinetMockData} t={t} />,
        },
        {
            title: 'Участие',
            count: CabinetMockData.length,
            component: <MyAuctionsComponent list={CabinetMockData} t={t} />,
        },
    ];

    const title = 'Мои аукционы';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    );
};
