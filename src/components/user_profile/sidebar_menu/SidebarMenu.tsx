import {FC} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {WithT} from 'i18next';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {useStyles} from './useStyles';
import {LetterIcon} from '@src/components/elements/icons';
import {useRouter} from 'next/router';

export const SidebarMenu: FC<WithT> = ({t}) => {
    const {query: {path}, push} = useRouter();
    const [pathname, user_id] = path as string[];

    const handleListItemClick = (pathname) => async () => {
        await push(`${pathname}/${user_id}`);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    disableGutters
                    selected={pathname === 'profile_ratings'}
                    onClick={handleListItemClick('profile_ratings')}
                >
                    <ListItemText primary={t('cabinet:rating')} />
                </ListItem>
                <ListItem
                    button
                    disableGutters
                    selected={pathname === 'profile_follows'}
                    onClick={handleListItemClick('profile_follows')}
                >
                    <ListItemText primary={t('cabinet:subscriptions')} />
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
                    selected={pathname === 'profile_posts'}
                    onClick={handleListItemClick('profile_posts')}
                    disableGutters
                >
                    <NotesIcon />
                    <ListItemText primary={t('main:posts')} />
                </ListItem>
            </List>
            {/*<List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>*/}
            {/*    <ListItem*/}
            {/*        button*/}
            {/*        disableGutters*/}
            {/*        onClick={handleFollow}*/}
            {/*    >*/}
            {/*        <ListItemText primary={t('cabinet:subscribe')} />*/}
            {/*    </ListItem>*/}
            {/*</List>*/}
        </div>
    );
};
