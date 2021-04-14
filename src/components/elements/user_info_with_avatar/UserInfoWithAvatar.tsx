import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';
import {UserInfo} from '@root/interfaces/Auth';
import {ButtonComponent} from "@src/components/elements/button/Button";

type UserInfoWithAvatarPropsType = {
    owner: UserInfo,
    isOwner?: boolean,
    handleFollow?: (userId) => () => void,
    subscribed?: boolean
};

export const UserInfoWithAvatar: FC<UserInfoWithAvatarPropsType> = ({ isOwner, owner, subscribed, handleFollow }) => {
    const { t } = useTranslation('cabinet');
    const date = new Date(owner.created_at);

    const formatted_date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="user-info">
                <div>
                    <UserAvatarComponent avatar={owner.avatar} />
                </div>
                <div>
                    <Typography variant="subtitle1" color="initial">
                        {owner.name !== null && owner.name}
                        {owner.name !== null && owner.surname}
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                        {t('created_at', {
                            created_at: formatted_date?.toString()
                        })}
                    </Typography>
                    <Rating card={false} />
                    {!isOwner && (
                        <ButtonComponent onClick={handleFollow(owner.id)}>
                            <Typography variant="subtitle2">
                                {!subscribed ? 'Подписаться' : 'Отписаться'}
                            </Typography>
                        </ButtonComponent>
                    )}
                </div>
            </div>
        </div>
    );
};
