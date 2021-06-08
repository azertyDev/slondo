import {FC, useEffect, useState} from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {UserInfo} from '@root/interfaces/Auth';
import {SidebarMenu} from '@src/components/user_profile/sidebar_menu/SidebarMenu';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {UserPosts} from '@src/components/user_profile/pages/posts/UserPosts';
import {UserRatingsContainer} from '@src/components/user_profile/pages/ratings/UserRatingsContainer';
import {UserFollowsList} from '@src/components/user_profile/pages/follows_list/UserFollowsList';
import {useStyles} from './useStyles';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';


export const UserProfile: FC = () => {
    const dispatch = useDispatch();
    const {user_id} = useRouter().query;
    const {t} = useTranslation('cabinet');

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

    const [pageName, setPageName] = useState<string>('profile_posts');
    const [userInfo, setUserInfo] = useState<UserInfo>(initUserInfo);

    const fetchUserById = async () => {
        try {
            const userData = await userAPI.getUserInfoById(user_id as string);
            setUserInfo(userData);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const getPageContent = () => {
        switch (pageName) {
            case 'profile_posts':
                return <UserPosts t={t} />;
            case 'profile_ratings':
                return <UserRatingsContainer t={t} />;
            case 'profile_follows':
                return <UserFollowsList t={t} />;
        }
    };

    const profileInfo = (
        <UserInfoWithAvatar
            isOwner={true}
            owner={userInfo}
        />
    );

    const sidebarMenu = (
        <SidebarMenu
            t={t}
            user={userInfo}
            setPageName={setPageName}
            pageName={pageName}
        />
    );

    useEffect(() => {
        fetchUserById();
    }, []);

    const classes = useStyles();
    return (
        <MainLayout title={userInfo.name}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box mb={2}>{profileInfo}</Box>
                        <Box>{sidebarMenu}</Box>
                    </Grid>
                    <Grid item xs={9} container direction='column'>
                        <Typography variant="h6" className="menu-title">
                            {t(`cabinet:${pageName}`)}
                        </Typography>
                        {getPageContent()}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};
