import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {useStyles} from './useStyles';
import {SubscriberType} from '@root/interfaces/Auth';
import {useTranslation} from 'next-i18next';
import {CustomButton} from '@root/src/components/elements/custom_button/CustomButton';


export const SubscriptionItem: FC<SubscriberType> = ({user, handleFollow}) => {
    const {t} = useTranslation('common');

    const classes = useStyles();
    return (
        <Grid item xs={9} className={classes.root}>
            {user && (<>
                <UserInfoWithAvatar isOwner={true} owner={user} handleFollow={handleFollow} />
                <CustomButton onClick={handleFollow(user?.id)}>
                    <Typography variant="subtitle2">
                        {t('follow')}
                        {t('unFollow')}
                    </Typography>
                </CustomButton>
            </>)
            }

        </Grid>
    )
}