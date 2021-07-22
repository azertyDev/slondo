import {FC, useContext} from 'react';
import {Grid} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';
import {UserCtx} from "@src/context";
import {useStyles} from './useStyles';

export const CabinetSidebar: FC = () => {
    const {user} = useContext(UserCtx);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className="user-menu-wrapper">
                <UserInfoWithAvatar
                    isOwner
                    owner={user}
                />
                <SidebarMenu />
            </Grid>
        </div>
    );
};
