import React from 'react';
import { Grid } from '@material-ui/core';
import { UserInfoWithAvatar } from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import { ActionsMenu } from '@src/components/elements/actions_menu/ActionsMenu';

// styles
import { useStyles } from './useStyles';
import {UserSocialInfo} from "@src/components/cabinet/cabinet_pages/user_social_info/UserSocialInfo";

export const CabinetSidebar = (props) => {
    const { t } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className="user-menu-wrapper">
                <UserInfoWithAvatar cabinet/>
                <UserSocialInfo t={t} />
                <ActionsMenu {...props} />
            </Grid>
        </div>
    );
};
