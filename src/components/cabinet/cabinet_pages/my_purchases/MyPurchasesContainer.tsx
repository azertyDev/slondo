import React, {FC, ReactElement, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {useTranslation} from 'react-i18next';

export type TabsDataType = {
    id: number;
    title: string;
    count: number;
    component: ReactElement;
}[];

const MyPurchasesContainer: FC = () => {
    const {t} = useTranslation(['cabinet', 'notifications','categories', 'common', 'locations']);
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const tabsData: TabsDataType = [
        {
            id: 0,
            title: 'Безопасная покупка',
            count: 0,
            component: <MyPurchases />
        }
    ];

    const title = t('myPurchases');

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={title}
            tabsData={tabsData}
            headerTitle={title}
        />
    )
}

export default withAuthRedirect(MyPurchasesContainer)
