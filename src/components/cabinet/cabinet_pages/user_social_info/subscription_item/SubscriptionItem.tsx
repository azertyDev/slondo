import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {useStyles} from './useStyles';
import {SubscriberType} from '@root/interfaces/Auth';


export const SubscriptionItem: FC<SubscriberType> = ({  user, user_id, handleFollow }) => {

    const classes = useStyles();
    return (
        <Grid item xs={9} className={classes.root}>
            <UserInfoWithAvatar isOwner={true} owner={user} handleFollow={handleFollow}/>
            <ButtonComponent onClick={handleFollow(user_id)}>
                <Typography variant="subtitle2">
                    {user_id}
                </Typography>
            </ButtonComponent>
        </Grid>
    )
}