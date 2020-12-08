import React, {FC} from "react";
import {Divider, Grid, Typography} from "@material-ui/core";
import {UserInfoWithAvatar} from "@src/components/elements/user_info_with_avatar/UserInfoWithAvatar";
import {ButtonComponent} from "@src/components/elements/button/Button";
// styles
import {useStyles} from './useStyles';

export const SubscriptionItem: FC<{ buttonText: string }> = ({buttonText}) => {

    const classes = useStyles();
    return (
        <Grid item xs={9} className={classes.root}>
            <UserInfoWithAvatar cabinet/>
            <ButtonComponent>
                <Typography variant="subtitle2">
                    {buttonText}
                </Typography>
            </ButtonComponent>
        </Grid>
    )
}