import {FC} from 'react';
// import Link from 'next/link';
import {Box, Typography} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {useTranslation} from 'react-i18next';
import {UserInfo} from '@root/interfaces/Auth';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {INCOGNITO_NAMES} from "@src/constants";
import {dateHelper} from "@src/helpers";
import {useStyles} from './useStyles';

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
    const formatted_date = dateHelper(owner.created_at);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="user-info">
                <Box>
                    <UserAvatarComponent
                        width={width}
                        height={height}
                        avatar={owner.avatar}
                    />
                </Box>
                <Box>
                    <Typography color="initial" variant='subtitle1'>
                        {!isIncognito && (`${owner.name ?? ''} ${owner.surname ?? ''}`)}
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                        {t('created_at', {created_at: formatted_date})}
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
            </div>
        </div>
    );
};
