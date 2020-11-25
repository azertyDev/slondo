import React from 'react';
import { Grid } from '@material-ui/core';
import { UserInfoWithAvatar } from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import { UserSocialInfoContainer } from './user_social_info/UserSocialInfoContainer';
import { ActionsMenu } from '@src/components/elements/actions_menu/ActionsMenu';

// styles
import { useStyles } from './useStyles';

export const CabinetSidebar = (props) => {
    const { t } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className="user-menu-wrapper">
                <UserInfoWithAvatar cabinet/>
                <UserSocialInfoContainer t={t} />
                <ActionsMenu {...props} />
            </Grid>
        </div>
    );
};
