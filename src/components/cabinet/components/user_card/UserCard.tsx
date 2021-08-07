import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {Grid, Typography} from '@material-ui/core';
import {Star} from '@material-ui/icons';
import {userAPI} from '@src/api/api';
import {ErrorCtx} from '@src/context';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {LetterIcon, PhoneIcon} from '@src/components/elements/icons';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';

type UserCardProps = {
    userData,
    handleOpenRating,
    hasUserForRating: boolean
} & WithT;

export const UserCard: FC<UserCardProps> = (props) => {
    const {
        t,
        userData,
        hasUserForRating,
        handleOpenRating
    } = props;

    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [phone, setPhone] = useState(null);

    const fetchUserPhone = async () => {
        if (!phone) {
            try {
                setIsFetch(true);
                const {phone} = await userAPI.getPhoneByUserId(userData.id);
                unstable_batchedUpdates(() => {
                    setPhone(phone);
                    setIsFetch(false);
                });
            } catch (e) {
                unstable_batchedUpdates(() => {
                    setIsFetch(false);
                    setErrorMsg(e.message);
                });
            }
        }
    };

    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={7}>
                <UserInfoWithAvatar
                    isOwner
                    width='50px'
                    height='50px'
                    owner={userData}
                />
            </Grid>
            <Grid container spacing={1} item xs={5}>
                <Grid item xs={12}>
                    <CustomButton onClick={fetchUserPhone}>
                        {phone
                            ? <Typography variant='subtitle2' component='p'>
                                {phone}
                            </Typography>
                            : isFetch
                                ? <CustomCircularProgress />
                                : <>
                                    <PhoneIcon />
                                    <Typography variant='subtitle2' component='p'>
                                        {t('post:show_phone')}
                                    </Typography>
                                </>
                        }
                    </CustomButton>
                </Grid>
                <Grid item xs={12}>
                    <CustomButton disabled>
                        <LetterIcon />
                        <Typography variant='subtitle2' component='p'>
                            {t('post:writeMessage')}
                        </Typography>
                    </CustomButton>
                </Grid>
                {hasUserForRating && (
                    <Grid item xs={12}>
                        <CustomButton onClick={handleOpenRating}>
                            <Star />
                            <Typography variant='subtitle2' component='p'>
                                {t('give_rating')}
                            </Typography>
                        </CustomButton>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};