import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {i18n} from '@root/i18n';
import {useDispatch} from 'react-redux';


const MyPostsContainer: FC = () => {
    const lang = i18n.language;
    const dispatch = useDispatch();

    const initialState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        },
        securePosts: {
            total: 0,
            data: []
        }
    };
    const [postData, setPostData] = useState(initialState);

    const fetchPostData = async (type) => {
        try {
            const { myPosts, securePosts } = postData;
            const isCreatedPost = type === 'post';

            postData.isFetch = true;
            setPostData({ ...postData });

            const myPostsData = await userAPI.getMyPosts(lang, type);
            const securePostsData = await userAPI.getSecurePosts(lang, type);

            postData.isFetch = true;

            if (isCreatedPost) {
                myPosts.data = myPostsData.data;
                myPosts.total = myPostsData.total;
            } else {
                securePosts.data = securePostsData.data;
                securePosts.total = securePostsData.total;
            }

            setPostData({ ...postData });
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };
    const tabsData = [
        {
            id: 0,
            title: 'Объявления',
            total: postData.myPosts.total,
            component: <MyPosts list={postData.myPosts.data} />
        },
        {
            id: 1,
            title: 'Безопасная покупка',
            total: postData.securePosts.total,
            component: <MyPosts list={postData.securePosts.data} />
        }
    ];

    useEffect(() => {
        fetchPostData('post');
    }, []);

    const title = 'Мои объявления';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    );
};

export default withAuthRedirect(MyPostsContainer);
