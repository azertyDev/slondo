import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from "next-i18next";
import {LetterIcon} from '@src/components/elements/icons';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {useStyles} from './useStyles';

export const SidebarMenu: FC = () => {
    const {t} = useTranslation('cabinet');
    const {query: {path}, push} = useRouter();
    const [pathname, user_id] = path as string[];

    const handleListItemClick = (pathname) => async () => {
        await push(`${pathname}/${user_id}`);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List
                disablePadding
                component="nav"
                className='menu-item'
                aria-label="cabinet menu"
            >
                <ListItem
                    button
                    disableGutters
                    selected={pathname === 'profile_ratings'}
                    onClick={handleListItemClick('profile_ratings')}
                >
                    <ListItemText primary={t('rating')}/>
                </ListItem>
                <ListItem
                    button
                    disableGutters
                    selected={pathname === 'profile_follows'}
                    onClick={handleListItemClick('profile_follows')}
                >
                    <ListItemText primary={t('subscriptions')}/>
                </ListItem>
            </List>
            <List
                disablePadding
                component="nav"
                className='menu-item'
                aria-label="cabinet menu"
            >
                <ListItem
                    button
                    disableGutters
                    selected={pathname === 'write_to_user'}
                    onClick={handleListItemClick('write_to_user')}
                >
                    <LetterIcon/>
                    <ListItemText primary={t('post:writeMessage')}/>
                </ListItem>
                <ListItem
                    button
                    disableGutters
                    selected={pathname === 'profile_posts'}
                    onClick={handleListItemClick('profile_posts')}
                >
                    <NotesIcon/>
                    <ListItemText primary={t('main:posts')}/>
                </ListItem>
            </List>
        </div>
    );
};
