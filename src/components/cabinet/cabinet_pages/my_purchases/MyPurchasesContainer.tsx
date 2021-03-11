import React, {FC} from 'react'
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent'
import {MyPurchases} from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchases'
import {CabinetMockData} from '@src/components/cabinet//CabinetMockData'
import {withAuthRedirect} from '@src/hoc/withAuthRedirect'


const MyPurchasesContainer: FC = () => {
    const tabsData = [
        {
            id: 0,
            title: 'Безопасная покупка',
            count: CabinetMockData.length,
            component: <MyPurchases list={CabinetMockData} />
        }
    ]

    const title = 'Мои объявления'

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    )
}

export default withAuthRedirect(MyPurchasesContainer)
