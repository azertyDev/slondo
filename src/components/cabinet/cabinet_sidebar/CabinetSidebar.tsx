import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';
import {useStyles} from './useStyles';
import {UserSocialInfo} from '@src/components/cabinet/cabinet_pages/user_social_info/UserSocialInfo';
import {useTranslation} from '@root/i18n';


export const CabinetSidebar: FC = () => {
    const {t} = useTranslation(['cabinet']);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className="user-menu-wrapper">
                <UserInfoWithAvatar cabinet/>
                <UserSocialInfo t={t}/>
                <SidebarMenu t={t}/>
            </Grid>
        </div>
    );
};
