import {FC, useContext} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';
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
import {UserCtx} from "@src/context/UserCtx";
import {AuthCtx} from "@src/context/AuthCtx";
import {useStyles} from './useStyles';

type SidebarMenuPropsType = {
    clearAnchor?: () => void
}

export const SidebarMenu: FC<SidebarMenuPropsType> = ({clearAnchor}) => {
    const {t} = useTranslation('cabinet');
    const {push, pathname} = useRouter();
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
                <ListItem
                    button
                    selected={pathname === '/cabinet/posts'}
                    onClick={handleListItemClick('posts')}
                    disableGutters
                >
                    <NotesIcon/>
                    <ListItemText primary={t('cabinet:myPosts')}/>
                </ListItem>
                <ListItem
                    button
                    selected={pathname === '/cabinet/auctions'}
                    onClick={handleListItemClick('auctions')}
                    disableGutters
                >
                    <GavelIcon/>
                    <ListItemText primary={t('cabinet:myAuctions')}/>
                </ListItem>
                <CustomBadge badgeContent={number_of_purchase} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/purchases'}
                        onClick={handleListItemClick('purchases')}
                        disableGutters
                    >
                        <ShoppingIcon/>
                        <ListItemText primary={t('cabinet:myPurchases')}/>
                    </ListItem>
                </CustomBadge>
                <CustomBadge badgeContent={0} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/favorite'}
                        onClick={handleListItemClick('favorite')}
                        disableGutters
                    >
                        <FavoriteBorderIcon/>
                        <ListItemText primary={t('cabinet:favorite')}/>
                    </ListItem>
                </CustomBadge>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item row'>
                <CustomBadge badgeContent={number_of_notifications} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/notifications'}
                        onClick={handleListItemClick('notifications')}
                        disableGutters
                    >
                        <NotificationIcon/>
                        <ListItemText primary={t('cabinet:notifications')}/>
                    </ListItem>
                </CustomBadge>
                <CustomBadge badgeContent={number_of_messages} color='error'>
                    <ListItem
                        button
                        // selected={pathname === '/cabinet/messages'}
                        // onClick={handleListItemClick('messages')}
                        disabled
                        disableGutters
                    >
                        <LetterIcon/>
                        <ListItemText primary={t('cabinet:messages')}/>
                    </ListItem>
                </CustomBadge>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <CustomBadge badgeContent={0} color='error'>
                    <ListItem
                        button
                        selected={pathname === '/cabinet/safetyDeal'}
                        onClick={handleListItemClick('safetyDeal')}
                        disableGutters
                    >
                        <SafeIcon/>
                        <ListItemText primary={t('cabinet:safeShopping')}/>
                    </ListItem>
                </CustomBadge>
                <CustomBadge badgeContent={0} color='error'>
                    <ListItem
                        button
                        // selected={pathname === '/cabinet/paidServices'}
                        // onClick={handleListItemClick('paidServices')}
                        disabled
                        disableGutters
                    >
                        <WalletIcon/>
                        <ListItemText primary={t('cabinet:paidServices')}/>
                    </ListItem>
                </CustomBadge>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item row'>
                <ListItem
                    button
                    selected={pathname === '/cabinet/settings'}
                    onClick={handleListItemClick('settings')}
                    disableGutters
                    className='list-item'
                >
                    <SettingsIcon/>
                    <ListItemText primary={t('cabinet:settings')}/>
                </ListItem>
                <ListItem
                    button
                    onClick={signout}
                    disableGutters
                    className='list-item'
                >
                    <PowerIcon/>
                    <ListItemText primary={t('cabinet:exit')}/>
                </ListItem>
            </List>
        </div>
    );
};