import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {ProfileSidebar} from '../profile_sidebar/ProfileSidebar';
import {useStyles} from './useStyles';
import {UserInfo} from '@root/interfaces/Auth';
import {WithT} from 'i18next';

export type UserProfileWrapperPropsType = {
    title: string;
    headerTitle: string;
    user?: UserInfo
} & WithT;

export const UserProfileWrapper: FC<UserProfileWrapperPropsType> = ({t, children, title, headerTitle, user}) => {

    const classes = useStyles();
    return (
        <MainLayout title={`Мой кабинет | ${title}`}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <ProfileSidebar t={t} user={user} />
                    </Grid>
                    <Grid item xs={9} container direction='column'>
                        <Typography variant="h6" className="menu-title">
                            {headerTitle}
                        </Typography>
                        {children}
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};
