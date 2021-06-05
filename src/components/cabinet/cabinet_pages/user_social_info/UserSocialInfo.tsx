import React, {FC} from 'react';
import {List, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CustomBadge} from '@src/components/elements/custom_budge/CustomBadge';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';
import {UserInfo} from '@root/interfaces/Auth';

type UserSocialInfoPropsType = {
    user: UserInfo
} & WithT

export const UserSocialInfo: FC<UserSocialInfoPropsType> = ({t, user}) => {
    const {
        number_of_reviews
    } = user.observer;

    const {pathname, push} = useRouter();

    const onButtonClick = (url) => () => {
        push(`/cabinet/${url}`);
    };

    const classes = useStyles();
    return (
        <List className={classes.root} disablePadding>
            <CustomBadge badgeContent={number_of_reviews}>
                <CustomButton
                    onClick={onButtonClick('ratings')}
                    className={pathname === '/cabinet/ratings' ? 'selected' : ''}
                >
                    <Typography variant="subtitle1">
                        {t('cabinet:rating')}
                    </Typography>
                </CustomButton>
            </CustomBadge>
            <CustomButton
                onClick={onButtonClick('subscribe')}
                className={pathname === '/cabinet/subscribe' ? 'selected' : ''}
            >
                <Typography variant="subtitle1">
                    {t('cabinet:follows')}
                </Typography>
            </CustomButton>
        </List>
    )
}