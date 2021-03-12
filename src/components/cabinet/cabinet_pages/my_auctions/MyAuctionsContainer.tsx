import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {CabinetMockData} from '../../CabinetMockData';
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";
import {userAPI} from "@src/api/api";
import {useRouter} from "next/router";


export const MyAuctionsContainer: FC = () => {
    const router = useRouter()
    const [list, setList] = useState<any>([])
    const {tabValue} = router.query

    const tabsData = [
        {
            id: 0,
            title: 'Созданные',
            count: list?.data?.length || 0,
            component: <MyAuctions list={list}/>
        },
        {
            id: 1,
            title: 'Участие',
            count: list?.data?.length || 0,
            component: <MyAuctions list={list}/>
        }
    ];

    useEffect(() => {
        tabValue === "1" ?
            userAPI.getPosts('ru', 'auc')
                .then(result => setList(result))
                .catch(error => console.warn(error))
            :
            userAPI.getAuctionSubs( 'ru')
                .then(result => setList(result))
                .catch(error => console.warn(error))
    }, [tabValue])

    const title = 'Мои аукционы';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    )
};

export default withAuthRedirect(MyAuctionsContainer);
