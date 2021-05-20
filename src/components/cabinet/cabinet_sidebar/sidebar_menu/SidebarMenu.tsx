import React, {FC} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {useRouter} from 'next/router';
import {WithT} from 'i18next';
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
import {useDispatch} from 'react-redux';
import {signOutAction} from '@src/redux/slices/userSlice';
import {useStyles} from './useStyles';


export const SidebarMenu: FC<WithT> = ({t}) => {
    const dispatch = useDispatch();
    const {push, pathname} = useRouter();

    const handleListItemClick = (url) => async () => {
        await push(`/cabinet/${url}`);
    };

    const signOut = async () => {
        dispatch(signOutAction());
        cookies.remove('slondo_auth', {path: '/'});
        cookies.remove('slondo_user', {path: '/'});
        await push('/');
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="cabinet menu" className='menu-item'>
                <CustomBadge badgeContent={2} color='error'>
                    <ListItem
                        button
                        selected={pathname === 'nonModerated'}
                    >
                        <ListItemText primary={t('cabinet:nonModerated')} />
                    </ListItem>
                </CustomBadge>
            </List>
            <List component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    selected={pathname === '/cabinet/posts'}
                    onClick={handleListItemClick('posts')}
                >
                    <NotesIcon />
                    <ListItemText primary={t('cabinet:myPosts')} />
                </ListItem>
                <ListItem
                    button
                    selected={pathname === '/cabinet/auctions'}
                    onClick={handleListItemClick('auctions')}
                >
                    <GavelIcon />
                    <ListItemText primary={t('cabinet:myAuctions')} />
                </ListItem>
                <CustomBadge badgeContent={2} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/purchases'}
                        onClick={handleListItemClick('purchases')}
                    >
                        <ShoppingIcon />
                        <ListItemText primary={t('cabinet:myPurchases')} />
                    </ListItem>
                </CustomBadge>
                <CustomBadge badgeContent={2} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/favorite'}
                        onClick={handleListItemClick('favorite')}
                    >
                        <FavoriteBorderIcon />
                        <ListItemText primary={t('cabinet:favorite')} />
                    </ListItem>
                </CustomBadge>
            </List>
            <List component="nav" aria-label="cabinet menu" className='menu-item'>
                <CustomBadge badgeContent={2} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/notifications'}
                        onClick={handleListItemClick('notifications')}
                    >
                        <NotificationIcon />
                        <ListItemText primary={t('cabinet:notifications')} />
                    </ListItem>
                </CustomBadge>
                <CustomBadge badgeContent={5} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/messages'}
                        onClick={handleListItemClick('messages')}
                    >
                        <LetterIcon />
                        <ListItemText primary={t('cabinet:messages')} />
                    </ListItem>
                </CustomBadge>
            </List>
            <List component="nav" aria-label="cabinet menu" className='menu-item'>
                <CustomBadge badgeContent={2} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/safetyDeal'}
                        onClick={handleListItemClick('safetyDeal')}
                    >
                        <SafeIcon />
                        <ListItemText primary={t('cabinet:safeShopping')} />
                    </ListItem>
                </CustomBadge>
                <CustomBadge badgeContent={2} color='error'>
                    <ListItem
                        button
                        // selected={pathname === '/cabinet/paidServices'}
                        // onClick={handleListItemClick('paidServices')}
                    >
                        <WalletIcon />
                        <ListItemText primary={t('cabinet:paidServices')} />
                    </ListItem>
                </CustomBadge>
            </List>
            <List component="nav" aria-label="cabinet menu" className='menu-item'>
                <ListItem
                    button
                    selected={pathname === '/cabinet/settings'}
                    onClick={handleListItemClick('settings')}
                >
                    <SettingsIcon />
                    <ListItemText primary={t('cabinet:settings')} />
                </ListItem>
                <ListItem
                    button
                    onClick={signOut}
                >
                    <PowerIcon />
                    <ListItemText primary={t('cabinet:exit')} />
                </ListItem>
            </List>
        </div>
    );
};
