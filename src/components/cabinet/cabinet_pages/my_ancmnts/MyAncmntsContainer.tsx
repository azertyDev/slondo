import React, { FC } from 'react';
import { TabsContent } from '@src/components/cabinet/cabinet_pages/TabsContent';
import { MyAncmnts } from '@src/components/cabinet/cabinet_pages/my_ancmnts/MyAncmnts';
import { CabinetMockData } from '../../CabinetData';
import { WithT } from 'i18next';

export const MyAncmntsContainer: FC<WithT> = ({t}) => {
    const tabsData = [
        {
            title: 'Объявления',
            count: CabinetMockData.length,
            component: <MyAncmnts list={CabinetMockData} t={t}/>,
        },
        {
            title: 'Безопасная покупка',
            count: CabinetMockData.length,
            component: <MyAncmnts list={CabinetMockData} t={t}/>,
        },
    ];

    const title = 'Мои объявления';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    );
};
