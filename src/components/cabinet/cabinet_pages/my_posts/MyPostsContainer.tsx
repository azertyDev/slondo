import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {useRouter} from "next/router";
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from "@src/api/api";


const MyPostsContainer: FC = () => {
    const router = useRouter()
    const {tabValue} = router.query
    const [list, setList] = useState<any>([])
    const tabsData = [
        {
            id: 0,
            title: 'Объявления',
            count: list?.data?.length || 0,
            component: <MyPosts list={list}/>,
        },
        {
            id: 1,
            title: 'Безопасная покупка',
            count: list?.data?.length || 0,
            component: <MyPosts list={list}/>,
        },

    ];
    console.warn("tabValue", tabValue)

    const title = 'Мои объявления';

    useEffect(() => {
        tabValue === "1" ?
        userAPI.getPosts('ru', 'post')
            .then(result => setList(result))
            .catch(error => console.warn(error))
            :
            userAPI.getSecurePosts('ru', 'post')
                .then(result => setList(result))
                .catch(error => console.warn(error))
    }, [tabValue])

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    );
};

export default withAuthRedirect(MyPostsContainer);
