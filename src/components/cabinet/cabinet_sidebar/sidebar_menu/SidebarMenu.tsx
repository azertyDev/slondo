import {FC, useContext} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {Grid, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import {cookies} from '@src/helpers';
import {CustomBadge} from '@src/components/elements/custom_budge/CustomBadge';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {GavelIcon} from '@src/components/elements/icons/GavelIcon';
import {FavoriteBorderIcon} from '@src/components/elements/icons/FavoriteBorderIcon';
import {NotificationIcon} from '@src/components/elements/icons/NotificationIcon';
import {LetterIcon} from '@src/components/elements/icons/LetterIcon';
import {SafeIcon} from '@src/components/elements/icons/services_icons/SafeIcon';
import {WalletIcon} from '@src/components/elements/icons/WalletIcon';
import {ShoppingIcon} from '@src/components/elements/icons/ShoppingIcon';
import {SettingsIcon} from '@src/components/elements/icons/SettingsIcon';
import {PowerIcon} from '@src/components/elements/icons/PowerIcon';
import {useTranslation} from 'next-i18next';
import {AuthCtx} from "@src/context/AuthCtx";
import {useStyles} from './useStyles';
import {UserCtx} from "@src/context";

type SidebarMenuPropsType = {
    clearAnchor?: () => void
}

export const SidebarMenu: FC<SidebarMenuPropsType> = ({clearAnchor}) => {
    const {t} = useTranslation('cabinet');
    const {push, query: {page}} = useRouter();
    const {setIsAuth} = useContext(AuthCtx);
    const {user, clearUser} = useContext(UserCtx);

    const {
        observer: {
            number_of_messages,
            number_of_notifications,
            number_of_purchase
        }
    } = user;

    const handleListItemClick = (url) => async () => {
        await push(`/cabinet/${url}`);
    };

    const onButtonClick = (url) => () => {
        push(`/cabinet/${url}`);
    };

    const signout = async () => {
        unstable_batchedUpdates(async () => {
            !!clearAnchor && clearAnchor();
            cookies.remove('slondo_auth', {path: '/'});
            cookies.remove('slondo_user', {path: '/'});
            await push('/');
            clearUser();
            setIsAuth(false);
        });
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <CustomBadge badgeContent={user.observer.number_of_reviews}>
                            <ListItem
                                button
                                onClick={onButtonClick('rating')}
                                selected={page === 'rating'}
                                disableGutters
                            >
                                <ListItemText primary={t('cabinet:rating')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItem
                            button
                            disableGutters
                            onClick={onButtonClick('subs')}
                            selected={page === 'subs'}
                        >
                            <ListItemText primary={t('cabinet:subs')} />
                        </ListItem>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                disableGutters
                                onClick={onButtonClick('banned')}
                                selected={page === 'banned'}
                            >
                                <ListItemText primary={t('cabinet:banned')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <ListItem
                            button
                            selected={page === 'posts'}
                            onClick={handleListItemClick('posts')}
                            disableGutters
                        >
                            <NotesIcon />
                            <ListItemText primary={t('myPosts')} />
                        </ListItem>
                    </Grid>
                    <Grid item md={12}>
                        <ListItem
                            button
                            selected={page === 'auctions'}
                            onClick={handleListItemClick('auctions')}
                            disableGutters
                        >
                            <GavelIcon />
                            <ListItemText primary={t('myAuctions')} />
                        </ListItem>
                    </Grid>
                    <Grid item md={12}>
                        <CustomBadge badgeContent={number_of_purchase} color='error'>
                            <ListItem
                                button
                                selected={page === 'purchases'}
                                onClick={handleListItemClick('purchases')}
                                disableGutters
                            >
                                <ShoppingIcon />
                                <ListItemText primary={t('myPurchases')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                    <Grid item md={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                selected={page === 'favorite'}
                                onClick={handleListItemClick('favorite')}
                                disableGutters
                            >
                                <FavoriteBorderIcon />
                                <ListItemText primary={t('favorite')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <CustomBadge badgeContent={number_of_notifications} color='error'>
                            <ListItem
                                button
                                selected={page === 'notifications'}
                                onClick={handleListItemClick('notifications')}
                                disableGutters
                            >
                                <NotificationIcon />
                                <ListItemText primary={t('notifications')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                    <Grid item md={12}>
                        <CustomBadge badgeContent={number_of_messages} color='error'>
                            <ListItem
                                button
                                disabled
                                disableGutters
                                selected={page === 'messages'}
                                onClick={handleListItemClick('messages')}
                            >
                                <LetterIcon />
                                <ListItemText primary={t('messages')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                disableGutters
                                selected={page === 'safe_deal'}
                                onClick={handleListItemClick('safe_deal')}
                            >
                                <SafeIcon />
                                <ListItemText primary={t('safe_deal')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                    <Grid item md={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                // selected={page === 'paidServices'}
                                // onClick={handleListItemClick('paidServices')}
                                disabled
                                disableGutters
                            >
                                <WalletIcon />
                                <ListItemText primary={t('paidServices')} />
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={1}>
                    <Grid item md={12} lg={6}>
                        <ListItem
                            button
                            selected={page === 'settings'}
                            onClick={handleListItemClick('settings')}
                            disableGutters
                            className='list-item'
                        >
                            <SettingsIcon />
                            <ListItemText primary={t('settings')} />
                        </ListItem>
                    </Grid>
                    <Grid item md={12} lg={6}>
                        <ListItem
                            button
                            disableGutters
                            onClick={signout}
                            className='list-item'
                        >
                            <PowerIcon />
                            <ListItemText primary={t('exit')} />
                        </ListItem>
                    </Grid>
                </Grid>
            </List>
        </div>
    );
};