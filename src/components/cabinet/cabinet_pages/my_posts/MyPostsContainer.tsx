import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {CabinetMockData} from '../../CabinetMockData';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from "@src/api/api";


const MyPostsContainer: FC = () => {
    const [list, setList] = useState([])

    const tabsData = [
        {
            title: 'Объявления',
            count: list?.data?.length,
            component: <MyPosts list={CabinetMockData}/>,
        },
        {
            title: 'Безопасная покупка',
            count: list?.data?.length,
            component: <MyPosts list={CabinetMockData} />,
        },
    ];

    console.warn("list123123", list)

    const title = 'Мои объявления';

    useEffect(() => {
        userAPI.getPosts('ru', 'auc')
            .then(result => setList(result))
            .catch(error => console.warn(error))
    }, [])

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    );
};

export default withAuthRedirect(MyPostsContainer);
