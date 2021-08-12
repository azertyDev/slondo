import {FC, useContext} from 'react';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';
import {AuthCtx} from "@src/context";
import {useStyles} from './useStyles';

export const CabinetSidebar: FC = () => {
    const {user} = useContext(AuthCtx);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar isOwner owner={user} />
            <SidebarMenu />
        </div>
    );
};
