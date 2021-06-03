import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SidebarMenu} from '@src/components/user_profile/profile_sidebar/sidebar_menu/SidebarMenu';
import {UserInfo} from '@root/interfaces/Auth';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';

export const ProfileSidebar: FC<{user: UserInfo} & WithT> = ({t, user}) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className="user-menu-wrapper">
                <UserInfoWithAvatar isOwner={false} owner={user} />
                <SidebarMenu t={t} user={user} />
            </Grid>
        </div>
    );
};
