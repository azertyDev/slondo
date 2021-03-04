import React, {FC} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {CabinetMockData} from '../../CabinetMockData';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect'

const MyPostsContainer: FC = () => {
    const tabsData = [
        {
            title: 'Объявления',
            count: CabinetMockData.length,
            component: <MyPosts list={CabinetMockData}/>,
        },
        {
            title: 'Безопасная покупка',
            count: CabinetMockData.length,
            component: <MyPosts list={CabinetMockData}/>,
        },
    ];

    const title = 'Мои объявления';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title}/>
    );
};

export default withAuthRedirect(MyPostsContainer)
