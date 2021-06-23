import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';
import {UserSocialInfo} from '@src/components/cabinet/cabinet_pages/user_social_info/UserSocialInfo';
import {useTranslation} from 'next-i18next';
import {UserInfo} from '@root/interfaces/Auth';
import {useStyles} from './useStyles';


export const CabinetSidebar: FC<{ user: UserInfo }> = ({user}) => {
    const {t} = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className="user-menu-wrapper">
                <UserInfoWithAvatar isOwner={true} owner={user}/>
                <UserSocialInfo t={t} user={user} />
                <SidebarMenu />
            </Grid>
        </div>
    );
};
