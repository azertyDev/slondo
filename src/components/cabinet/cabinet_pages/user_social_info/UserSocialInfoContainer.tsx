import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from "@src/components/cabinet/cabinet_pages/TabsContent";
import {UserSubscribers} from "@src/components/cabinet/cabinet_pages/user_social_info/user_subscribers/UserSubscribers";
import {UserSubscribes} from "@src/components/cabinet/cabinet_pages/user_social_info/user_subscribes/UserSubscribes";
import {userAPI} from "@src/api/api";

export const UserSocialInfoContainer: FC = () => {
    const [list, setList] = useState([])
    const tabsData = [
        {
            title: 'Подписчики',
            count: 23,
            component: <UserSubscribers />
        },
        {
            title: 'Подписки',
            count: 3,
            component: <UserSubscribes />
        },
    ]

    const title = 'Подписки';

    return (
        <TabsContent
            title={title}
            tabsData={tabsData}
            headerTitle={title}
        />
    )
};



