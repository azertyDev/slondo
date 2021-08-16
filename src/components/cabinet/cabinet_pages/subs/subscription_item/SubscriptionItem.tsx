import {FC, useContext} from 'react';
import {Box, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
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
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const handleFollow = async () => {
        try {
            await userAPI.follow(user.id);
            handleRefresh();
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const classes = useStyles({user});
    return (
        user && (
            <Box className={classes.root}>
                <Grid
                    item
                    xs={12}
                    container
                    alignItems='center'
                >
                    <Grid item xs={8} md={10}>
                        <UserInfoWithAvatar
                            width={isXsDown ? '50px' : '80px'}
                            height={isXsDown ? '50px' : '80px'}
                            owner={user}
                            isOwner={true}
                        />
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <CustomButton onClick={handleFollow}>
                            <Typography variant="subtitle2">
                                {t(user.signed ? 'unFollow' : 'follow')}
                            </Typography>
                        </CustomButton>
                    </Grid>
                </Grid>
            </Box>
        )
    )
}