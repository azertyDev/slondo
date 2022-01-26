import {FC, useContext} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {useRouter} from 'next/router';
import {cookies} from '@src/helpers';
import {CustomBadge} from '@src/components/elements/custom_budge/CustomBadge';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {GavelIcon} from '@src/components/elements/icons/GavelIcon';
import {FavoriteBorderIcon} from '@src/components/elements/icons/FavoriteBorderIcon';
import {NotificationIcon} from '@src/components/elements/icons/NotificationIcon';
import {ErrorIcon} from '@src/components/elements/icons';
import {LetterIcon} from '@src/components/elements/icons/LetterIcon';
import {SafeIcon} from '@src/components/elements/icons/services_icons/SafeIcon';
import {WalletIcon} from '@src/components/elements/icons/WalletIcon';
import {ShoppingIcon} from '@src/components/elements/icons/ShoppingIcon';
import {SettingsIcon} from '@src/components/elements/icons/SettingsIcon';
import {PowerIcon} from '@src/components/elements/icons/PowerIcon';
import {useTranslation} from 'next-i18next';
import {AuthCtx} from '@src/context/AuthCtx';
import {CabinetUserAvatar} from '../cabinet_user_avatar/CabinetUserAvatar';
import {SocketCtx} from "@src/context";
import {useStyles} from './useStyles';

type SidebarMenuPropsType = {
    clearAnchor?: () => void
}

export const CabinetSidebar: FC<SidebarMenuPropsType> = ({clearAnchor}) => {
    const {t} = useTranslation('cabinet');
    const {push, asPath, query: {page}} = useRouter();
    const {user, clearUser} = useContext(AuthCtx);
    const socket = useContext(SocketCtx);


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

    const onButtonClick = (url) => async () => {
        await push(`/cabinet/${url}`);
    };

    const signout = async () => {
        unstable_batchedUpdates(async () => {
            !!clearAnchor && clearAnchor();

            cookies.remove('slondo_auth', {path: '/'});
            cookies.remove('slondo_user', {path: '/'});

            socket.emit('user_disconnect', user.id);

            if (asPath.includes('cabinet')) {
                await push('/');
            }

            clearUser();
        });
    };

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetUserAvatar
                page={page as string}
                onButtonClick={onButtonClick}
                selectedClass={classes.selected}
            />
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={isXsDown ? 0 : 1}>
                    <Grid item xs={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                disableGutters
                                className='ban-color'
                                selected={page === 'banned'}
                                onClick={onButtonClick('banned')}
                                classes={{selected: classes.selected}}
                            >
                                <ErrorIcon/>
                                <ListItemText primary={t('banned')}/>
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={isXsDown ? 0 : 1}>
                    <Grid item xs={12}>
                        <ListItem
                            button
                            disableGutters
                            selected={page === 'posts'}
                            onClick={handleListItemClick('posts')}
                            classes={{selected: classes.selected}}
                        >
                            <NotesIcon/>
                            <ListItemText primary={t('myPosts')}/>
                        </ListItem>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItem
                            button
                            disableGutters
                            selected={page === 'auctions'}
                            onClick={handleListItemClick('auctions')}
                            classes={{selected: classes.selected}}
                        >
                            <GavelIcon/>
                            <ListItemText primary={t('myAuctions')}/>
                        </ListItem>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomBadge badgeContent={number_of_purchase} color='error'>
                            <ListItem
                                button
                                disableGutters
                                selected={page === 'purchases'}
                                onClick={handleListItemClick('purchases')}
                                classes={{selected: classes.selected}}
                            >
                                <ShoppingIcon/>
                                <ListItemText primary={t('myPurchases')}/>
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                disableGutters
                                selected={page === 'favorite'}
                                onClick={handleListItemClick('favorite')}
                                classes={{selected: classes.selected}}
                            >
                                <FavoriteBorderIcon/>
                                <ListItemText primary={t('favorite')}/>
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={isXsDown ? 0 : 1}>
                    <Grid item xs={12}>
                        <CustomBadge badgeContent={number_of_notifications} color='error'>
                            <ListItem
                                button
                                disableGutters
                                selected={page === 'notifications'}
                                onClick={handleListItemClick('notifications')}
                                classes={{selected: classes.selected}}
                            >
                                <NotificationIcon/>
                                <ListItemText primary={t('notifications')}/>
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomBadge
                            color='error'
                            badgeContent={number_of_messages}
                        >
                            <ListItem
                                button
                                disableGutters
                                selected={page === 'messages'}
                                classes={{selected: classes.selected}}
                                onClick={handleListItemClick('messages')}
                            >
                                <LetterIcon/>
                                <ListItemText primary={t('messages')}/>
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={isXsDown ? 0 : 1}>
                    <Grid item xs={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                disableGutters
                                selected={page === 'safe_deal'}
                                classes={{selected: classes.selected}}
                                onClick={handleListItemClick('safe_deal')}
                            >
                                <SafeIcon/>
                                <ListItemText primary={t('safe_deal')}/>
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomBadge badgeContent={0} color='error'>
                            <ListItem
                                button
                                disableGutters
                                selected={page === 'paid_services'}
                                classes={{selected: classes.selected}}
                                onClick={handleListItemClick('paid_services')}
                            >
                                <WalletIcon/>
                                <ListItemText primary={t('paid_services')}/>
                            </ListItem>
                        </CustomBadge>
                    </Grid>
                </Grid>
            </List>
            <List disablePadding component="nav" aria-label="cabinet menu" className='menu-item'>
                <Grid container spacing={isXsDown ? 0 : 1}>
                    <Grid item xs={12} md={6}>
                        <ListItem
                            button
                            disableGutters
                            selected={page === 'settings'}
                            onClick={handleListItemClick('settings')}
                            classes={{selected: classes.selected}}
                        >
                            <SettingsIcon/>
                            <ListItemText primary={t('settings')}/>
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ListItem
                            button
                            disableGutters
                            onClick={signout}
                        >
                            <PowerIcon/>
                            <ListItemText primary={t('exit')}/>
                        </ListItem>
                    </Grid>
                </Grid>
            </List>
        </div>
    );
};