import {FC, useContext} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {useStyles} from './useStyles';
import {SubscriberType} from '@root/interfaces/Auth';
import {useTranslation} from 'next-i18next';
import {CustomButton} from '@root/src/components/elements/custom_button/CustomButton';
import {userAPI} from '@src/api/api';
import {ErrorCtx} from '@src/context';

export const SubscriptionItem: FC<SubscriberType> = ({user, handleRefresh}) => {
    const {t} = useTranslation('common');
    const {setErrorMsg} = useContext(ErrorCtx);

    const handleFollow = async () => {
        try {
            await userAPI.follow(user.id);
            handleRefresh();
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const classes = useStyles();
    return (
        user && (
            <Grid
                item
                xs={12}
                container
                justify='space-between'
                alignItems='center'
                className={classes.root}
            >
                <Grid item xs={6}>
                    <UserInfoWithAvatar isOwner={true} owner={user} />
                </Grid>
                <Grid item xs={6}>
                    <CustomButton onClick={handleFollow}>
                        <Typography variant="subtitle2">
                            {t(user.signed ? 'unFollow' : 'follow')}
                        </Typography>
                    </CustomButton>
                </Grid>
            </Grid>
        )
    )
}