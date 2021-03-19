import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';
import {UserInfo} from '@root/interfaces/Auth';

type UserInfoWithAvatarPropsType = {
    canSubscribe: boolean,
    owner: UserInfo,
    handleFollow?: (userId) => () => void
};

export const UserInfoWithAvatar: FC<UserInfoWithAvatarPropsType> = ({ canSubscribe, owner, handleFollow }) => {
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
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            <span>{owner.name + ' ' + owner.surname || owner.phone}</span>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            {t('registrationAt', {
                                registration_at: formatted_date?.toString()
                            })}
                        </Typography>
                    </div>
                    <div>
                        <Rating card={false} />
                    </div>
                    {canSubscribe && (
                        <ButtonComponent onClick={handleFollow(owner.id)}>
                            <Typography variant="subtitle2">
                                Подписаться {owner.id}
                            </Typography>
                        </ButtonComponent>
                    )}
                </div>
            </div>
        </div>
    );
};
