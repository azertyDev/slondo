import {FC} from 'react';
import Link from 'next/link';
import {Box, Typography} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {useTranslation} from 'react-i18next';
import {UserInfo} from '@root/interfaces/Auth';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import {INCOGNITO_NAMES} from "@src/constants";

type UserInfoWithAvatarPropsType = {
    owner: UserInfo,
    isOwner?: boolean,
    handleFollow?: (userId) => () => void,
    subscribed?: boolean,
    width?: string,
    height?: string
};

export const UserInfoWithAvatar: FC<UserInfoWithAvatarPropsType> = (props) => {
    const {
        isOwner,
        owner,
        subscribed,
        handleFollow,
        width,
        height
    } = props;

    const isIncognito = INCOGNITO_NAMES.some(n => n === owner.name);

    const {t} = useTranslation('cabinet');
    const date = new Date(owner.created_at);
    const formatted_date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    const classes = useStyles();
    return (
        <Box
            width={1}
            display='flex'
            className={classes.root}
        >
            <UserAvatarComponent
                avatar={owner.avatar}
                width={width}
                height={height}
            />
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
            >
                <Typography color="initial" variant='subtitle1' gutterBottom>
                    {!isIncognito && (`${owner.name ?? ''} ${owner.surname ?? ''}`)}
                </Typography>
                <Typography variant="subtitle1" color="initial" gutterBottom>
                    {t('created_at', {
                        created_at: formatted_date?.toString()
                    })}
                </Typography>
                <Rating
                    readOnly
                    ratingValue={owner.rating}
                    ratingCount={owner.observer?.number_of_ratings}
                />
                {!isOwner && !!handleFollow && (
                    <CustomButton onClick={handleFollow(owner.id)}>
                        <Typography variant="subtitle2">
                            {!subscribed ? t('common:follow') : t('common:unFollow')}
                        </Typography>
                    </CustomButton>
                )}
            </Box>
        </Box>
    );
};
