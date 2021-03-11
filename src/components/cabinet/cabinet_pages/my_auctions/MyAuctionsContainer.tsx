import React, {FC} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {CabinetMockData} from '../../CabinetMockData';
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";


export const MyAuctionsContainer: FC = () => {
    const tabsData = [
        {
            id: 0,
            title: 'Созданные',
            count: CabinetMockData.length,
            component: <MyAuctions list={CabinetMockData} />
        },
        {
            id: 1,
            title: 'Участие',
            count: CabinetMockData.length,
            component: <MyAuctions list={CabinetMockData} />
        }
    ];

    const title = 'Мои аукционы';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    )
};

export default withAuthRedirect(MyAuctionsContainer);
