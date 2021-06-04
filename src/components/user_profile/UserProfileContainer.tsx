import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'next-i18next';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {UserInfo} from '@root/interfaces/Auth';
import {ProfileTabsContent} from '@src/components/user_profile/profile_tabs_content/ProfileTabsContent';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import {UserProfile} from '@src/components/user_profile/UserProfile';
import {CardView} from '@src/components/elements/card/card_view/CardView';

export const UserProfileContainer = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');
    const {user_id} = useRouter().query;

    const initUserInfo = {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        available_days: '',
        available_start_time: '',
        available_end_time: ''
    };
    const initialUserPostsState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };
    const [postData, setPostData] = useState(initialUserPostsState);
    const [aucData, setAucData] = useState(initialUserPostsState);

    const [userInfo, setUserInfo] = useState<UserInfo>(initUserInfo);
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
    const fetchUserById = async () => {
        try {
            const userData = await userAPI.getUserInfoById(user_id as string);
            setUserInfo(userData);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        fetchUserById();
        fetchUserPosts('post');
        fetchUserPosts('auc');
    }, []);

    const userPostCards = (
        <CardView
            list={postData.myPosts.data}
            isFetch={postData.isFetch}
            listMode={false}
        />
    );
    const userAucCards = (
        <CardView
            list={aucData.myPosts.data}
            isFetch={aucData.isFetch}
            listMode={false}
        />
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('main:posts'),
            total: postData.myPosts.total,
            component: <UserProfile
                t={t}
                postCards={userPostCards}
            />
        },
        {
            id: 1,
            title: t('main:auctions'),
            total: aucData.myPosts.total,
            component: <UserProfile
                t={t}
                postCards={userAucCards}
            />
        }
    ];

    return (
        <ProfileTabsContent
            t={t}
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            tabsData={tabsData}
            title={`${userInfo.name ?? ''} ${userInfo.surname ?? ''}`}
            headerTitle={`${userInfo.name ?? ''} ${userInfo.surname ?? ''}`}
            user={userInfo}
        />
    );
};