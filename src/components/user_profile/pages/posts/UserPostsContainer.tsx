import {FC, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import {CardView} from '@src/components/elements/card/card_view/CardView';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {WithT} from 'i18next';
import {ProfileTabsContent} from '@src/components/user_profile/tabs/ProfileTabsContent';
import {CircularProgress} from '@material-ui/core';

export const UserPostsContainer: FC<WithT> = ({t}) => {
    const dispatch = useDispatch();
    const {user_id} = useRouter().query;

    const initialUserPostsState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };
    const [postData, setPostData] = useState(initialUserPostsState);
    const [aucData, setAucData] = useState(initialUserPostsState);

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchUserPosts = async (post_type) => {
        try {
            const isPost = post_type === 'post';
            if (isPost) {
                setPostData({...postData, isFetch: true});
                const {data, total} = await userAPI.getUserPosts(user_id, post_type);
                setPostData({myPosts: {data, total}, isFetch: false});
            } else {
                setAucData({...aucData, isFetch: true});
                const {data, total} = await userAPI.getUserPosts(user_id, post_type);
                setAucData({myPosts: {data, total}, isFetch: false});
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        fetchUserPosts('post');
        fetchUserPosts('auc');
    }, []);

    const userPostCards = (
        postData.isFetch
            ? <CircularProgress color="secondary" />
            : <CardView
                list={postData.myPosts.data}
                isFetch={postData.isFetch}
                listMode={false}
            />
    );
    const userAucCards = (
        aucData.isFetch
            ? <CircularProgress color="primary" />
            : <CardView
                list={aucData.myPosts.data}
                isFetch={aucData.isFetch}
                listMode={false}
            />
    );

    // const tabsData: TabsDataType = [
    //     {
    //         id: 0,
    //         title: t('main:posts'),
    //         total: postData.myPosts.total,
    //         component: <div>post</div>
    //     },
    //     {
    //         id: 1,
    //         title: t('main:auctions'),
    //         total: aucData.myPosts.total,
    //         component: <div>auc</div>
    //     }
    // ];

    return (
        <div>Posts</div>
        // <ProfileTabsContent
        //     tabIndex={tabIndex}
        //     handleTabChange={handleTabChange}
        //     tabsData={tabsData}
        // />
    );
};