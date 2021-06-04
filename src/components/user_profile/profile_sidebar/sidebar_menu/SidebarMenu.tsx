import React, {FC} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {useRouter} from 'next/router';
import {WithT} from 'i18next';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {LetterIcon} from '@src/components/elements/icons/LetterIcon';
import {useStyles} from './useStyles';
import {UserInfo} from '@root/interfaces/Auth';

type SidebarMenuPropsType = {
    user: UserInfo
} & WithT

export const SidebarMenu: FC<SidebarMenuPropsType> = ({t}) => {
    const {push, pathname, query: {user_id}} = useRouter();

    const handleListItemClick = (url) => async () => {
        await push(`${user_id}/${url}`);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    disableGutters
                >
                    <ListItemText primary={t('cabinet:rating')} />
                </ListItem>
                <ListItem
                    button
                    disableGutters
                >
                    <ListItemText primary={t('cabinet:subscriptionsAndSubscribers')} />
                </ListItem>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    selected={pathname === '/posts'}
                    onClick={handleListItemClick('posts')}
                    disableGutters
                >
                    <NotesIcon />
                    <ListItemText primary={t('main:posts')} />
                </ListItem>
                <ListItem
                    button
                    selected={pathname === '/profile/messages'}
                    onClick={handleListItemClick('messages')}
                    disableGutters
                >
                    <LetterIcon />
                    <ListItemText primary={t('cabinet:messages')} />
                </ListItem>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    disableGutters
                >
                    <ListItemText primary={t('cabinet:subscribe')} />
                </ListItem>
            </List>
        </div>
    );
};
