import {FC, useContext, useEffect, useState} from 'react';
import {Box, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {UserInfo} from '@root/interfaces/Auth';
import {INCOGNITO_NAMES} from "@src/constants";
import {AuthCtx, ErrorCtx} from "@src/context";
import {userAPI} from "@src/api/api";
import {useDate} from "@src/hooks";
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';

type UserInfoWithAvatarPropsType = {
    user: UserInfo,
    refresh?: () => void,
    width?: string,
    height?: string
};

export const UserInfoWithAvatar: FC<UserInfoWithAvatarPropsType> = (props) => {
    const {
        user,
        width,
        height,
        refresh
    } = props;

    const isIncognito = INCOGNITO_NAMES.some(n => n === user?.name);

    const {t} = useTranslation('cabinet');

    const {setErrorMsg} = useContext(ErrorCtx);
    const {setAuthModalOpen, auth, user: self} = useContext(AuthCtx);

    const isSelf = user?.id === self.id;

    const [isFollow, setIsFollow] = useState(false);

    const {date} = useDate()(user.created_at);

    const handleFollow = async () => {
        try {
            if (auth.isAuth) {
                await userAPI.follow(user?.id);
                setIsFollow(!isFollow);
                refresh && refresh();
            } else {
                setAuthModalOpen(true);
            }
        } catch (e) {
            setErrorMsg(e);
        }
    };

    useEffect(() => {
        setIsFollow(user?.signed);
    }, [user]);

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <UserAvatarComponent
                userId={user.id}
                width={width}
                height={height}
                avatar={user?.avatar}
            />
            <Box className='user-info'>
                <Typography color="initial" variant='subtitle1' gutterBottom>
                    {!isIncognito && (`${user?.name ?? ''} ${user?.surname ?? ''}`)}
                </Typography>
                <Typography variant="subtitle1" color="initial" gutterBottom>
                    {t('created_at', {date})}
                </Typography>
                <Rating
                    readOnly
                    ratingValue={user?.rating}
                    ratingCount={user?.observer?.number_of_ratings}
                />
                {!isSelf && (
                    <CustomButton onClick={handleFollow}>
                        <Typography variant="subtitle2">
                            {t(isFollow ? 'common:unFollow' : 'common:follow')}
                        </Typography>
                    </CustomButton>
                )}
            </Box>
        </Box>
    );
};
