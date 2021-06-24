import {FC} from 'react';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
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
        <div className={classes.root}>
            <List component="nav" className='menu-item row' disablePadding>
                <CustomBadge badgeContent={number_of_reviews}>
                    <ListItem
                        button
                        onClick={onButtonClick('ratings')}
                        selected={pathname === '/cabinet/ratings'}
                        disableGutters
                    >
                        <Typography variant="subtitle1">
                            {t('cabinet:rating')}
                        </Typography>
                    </ListItem>
                </CustomBadge>
                <ListItem
                    button
                    onClick={onButtonClick('subscribe')}
                    selected={pathname === '/cabinet/subscribe'}
                    disableGutters
                >
                    <Typography variant="subtitle1">
                        {t('cabinet:follows')}
                    </Typography>
                </ListItem>
            </List>

            <List component="nav" aria-label="cabinet menu" className='menu-item' disablePadding>
                <CustomBadge badgeContent={0} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/bannedPosts'}
                        onClick={onButtonClick('bannedPosts')}
                        disableGutters
                    >
                        <ListItemText primary={t('cabinet:bannedPosts')} />
                    </ListItem>
                </CustomBadge>
            </List>
        </div>
    )
}