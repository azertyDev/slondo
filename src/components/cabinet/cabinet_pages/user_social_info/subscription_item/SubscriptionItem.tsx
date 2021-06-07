import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import {SubscriberType} from '@root/interfaces/Auth';


export const SubscriptionItem: FC<SubscriberType> = ({user, handleFollow}) => {
    const classes = useStyles();
    return (
        <Grid item xs={9} className={classes.root}>
            <UserInfoWithAvatar isOwner={true} owner={user} handleFollow={handleFollow} />
            <CustomButton onClick={handleFollow(user.id)}>
                <Typography variant="subtitle2">
                    {user.id}
                </Typography>
            </CustomButton>
        </Grid>
    )
}