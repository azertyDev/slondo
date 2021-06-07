import React, {Dispatch, FC, SetStateAction} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {WithT} from 'i18next';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {useStyles} from './useStyles';
import {UserInfo} from '@root/interfaces/Auth';

type SidebarMenuPropsType = {
    user: UserInfo,
    pageName: string
    setPageName: Dispatch<SetStateAction<string>>
} & WithT

export const SidebarMenu: FC<SidebarMenuPropsType> = ({t, pageName, setPageName}) => {

    const handleListItemClick = (pageName) => () => {
        setPageName(pageName);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    disableGutters
                    selected={pageName === 'profile_ratings'}
                    onClick={handleListItemClick('profile_ratings')}
                >
                    <ListItemText primary={t('cabinet:rating')} />
                </ListItem>
                <ListItem
                    button
                    disableGutters
                    selected={pageName === 'profile_follows'}
                    onClick={handleListItemClick('profile_follows')}
                >
                    <ListItemText primary={t('cabinet:follows')} />
                </ListItem>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    selected={pageName === 'profile_posts'}
                    onClick={handleListItemClick('profile_posts')}
                    disableGutters
                >
                    <NotesIcon />
                    <ListItemText primary={t('main:posts')} />
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
