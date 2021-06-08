import React, {Dispatch, FC, SetStateAction} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {WithT} from 'i18next';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {useStyles} from './useStyles';
import {UserInfo} from '@root/interfaces/Auth';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {LetterIcon} from '@src/components/elements/icons';

type SidebarMenuPropsType = {
    user: UserInfo,
    pageName: string
    setPageName: Dispatch<SetStateAction<string>>
} & WithT

export const SidebarMenu: FC<SidebarMenuPropsType> = ({t, pageName, setPageName}) => {
    const dispatch = useDispatch();
    const {user_id} = useRouter().query;

    const handleListItemClick = (pageName) => () => {
        setPageName(pageName);
    };

    const handleFollow = async () => {
        try {
            await userAPI.follow(user_id);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
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
                    disableGutters
                    disabled
                >
                    <LetterIcon />
                    <ListItemText primary={t('cabinet:messages')} />
                </ListItem>

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
                    onClick={handleFollow}
                >
                    <ListItemText primary={t('cabinet:subscribe')} />
                </ListItem>
            </List>
        </div>
    );
};
