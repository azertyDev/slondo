import React, {FC, useEffect} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {useStyles} from './useStyles';
import {userAPI} from '@src/api/api';
import {SubscriberType} from '@root/interfaces/Auth';


export const SubscriptionItem: FC<SubscriberType> = (subscriber) => {

    const classes = useStyles();
    return (
        <Grid item xs={9} className={classes.root}>
            <UserInfoWithAvatar canSubscribe={false} owner={subscriber.user} />
            <ButtonComponent onClick={() => userAPI.follow(subscriber.user_id)}>
                <Typography variant="subtitle2">
                    {subscriber.user_id}
                </Typography>
            </ButtonComponent>
        </Grid>
    )
}