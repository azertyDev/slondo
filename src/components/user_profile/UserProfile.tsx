import {FC, useContext, useEffect, useState} from 'react';
import {Box, Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {UserInfo} from '@root/interfaces/Auth';
import {SidebarMenu} from '@src/components/user_profile/sidebar_menu/SidebarMenu';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {UserPosts} from '@src/components/user_profile/pages/posts/UserPosts';
import {UserRatingsContainer} from '@src/components/user_profile/pages/ratings/UserRatingsContainer';
import {UserFollowsList} from '@src/components/user_profile/pages/follows_list/UserFollowsList';
import {userAPI} from '@src/api/api';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {ErrorCtx} from '@src/context';
import {initUser} from '@src/hooks/useUser';
import {useStyles} from './useStyles';

export type ProfilePageProps = {
    user_id: string
}

export const UserProfile: FC = () => {
    const {t} = useTranslation('cabinet');
    const {query: {path}, push} = useRouter();
    const [pathname, user_id] = path as string[];

    const {setErrorMsg} = useContext(ErrorCtx);

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const [userInfo, setUserInfo] = useState<UserInfo>(initUser);

    const isMainPage = pathname === 'main';

    const handlePrev = async () => {
        await push(isMainPage ? '/' : `/user/main/${user_id}`);
    };

    const fetchUserById = async () => {
        try {
            const userInfo = await userAPI.getUserInfoById(user_id as string);
            setUserInfo(userInfo);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const getPageContent = () => {
        switch (pathname) {
            case 'profile_posts':
                return <UserPosts user_id={user_id} />;
            case 'profile_ratings':
                return <UserRatingsContainer userInfo={userInfo} />;
            case 'profile_follows':
                return <UserFollowsList user_id={user_id} />;
        }
    };

    useEffect(() => {
        fetchUserById();
    }, []);

    const classes = useStyles();
    return (
        <MainLayout title={t(`cabinet:profile.${pathname}`)} handleBack={handlePrev}>
            <div className={classes.root}>
                <Grid container spacing={isXsDown ? 0 : 2}>
                    {((isXsDown && isMainPage) || !isXsDown) && (
                        <Grid item xs={12} md={3}>
                            <Box mb={2}>
                                <UserInfoWithAvatar user={userInfo}/>
                            </Box>
                            <Box>
                                <SidebarMenu />
                            </Box>
                        </Grid>
                    )}
                    <Grid item xs={12} md={9}>
                        <Hidden smDown>
                            <Typography variant="h6" className="menu-title">
                                {t(`cabinet:profile.${pathname}`)}
                            </Typography>
                        </Hidden>
                        {getPageContent()}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};
