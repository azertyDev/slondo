import React, {FC, ReactElement} from 'react'
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent'
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases'
import {CabinetMockData} from '@src/components/cabinet//CabinetMockData'
import {withAuthRedirect} from '@src/hoc/withAuthRedirect'
import {useTranslation} from 'react-i18next'

export type TabsDataType = {
    id: number;
    title: string;
    count: number;
    component: ReactElement;
}[];

const MyPurchasesContainer: FC = () => {
    const { t } = useTranslation('cabinet')
    const tabsData: TabsDataType = [
        {
            id: 0,
            title: 'Безопасная покупка',
            count: CabinetMockData.length,
            component: <MyPurchases list={CabinetMockData} />
        }
    ]

    const title = t('myPurchases')

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    )
}

export default withAuthRedirect(MyPurchasesContainer)
