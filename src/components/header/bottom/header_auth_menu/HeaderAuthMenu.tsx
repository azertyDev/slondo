import {FC, useState} from 'react';
import {
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem
} from '@material-ui/core';
import {FavoriteBorderIcon, LetterIcon, NotificationIcon, SafeIcon, SettingsIcon} from '@src/components/elements/icons';
import {useStyles} from '../../auth_reg_page/useStyles';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {GavelIcon} from '@src/components/elements/icons/GavelIcon';
import {ShoppingIcon} from '@src/components/elements/icons/ShoppingIcon';
import {useTranslation} from 'next-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {useRouter} from 'next/router';
import {signOutAction} from '@src/redux/slices/userSlice';
import {cookies} from '@src/helpers';
import {WalletIcon} from '@src/components/elements/icons/WalletIcon';
import {PowerIcon} from '@src/components/elements/icons/PowerIcon';
import {CabinetSidebar} from '@src/components/cabinet/cabinet_sidebar/CabinetSidebar';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';

type HeaderAuthMenuPropsType = {
    open,
    handleClose: () => void
}

export const HeaderAuthMenu: FC<HeaderAuthMenuPropsType> = (props) => {
    const {
        open,
        handleClose
    } = props;
    const {t} = useTranslation('cabinet');
    const [selectedIndex, setSelectedIndex] = useState(1);

    const {
        observer: {
            number_of_messages,
            number_of_notifications,
            number_of_purchase
        }
    } = useSelector((store: RootState) => store.user.info);
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

    const options = [
        {
            forwardTo: 'posts',
            icon: <NotesIcon />,
            text: t('myPosts')
        },
        {
            forwardTo: 'auctions',
            icon: <GavelIcon />,
            text: t('myAuctions')
        },
        {
            forwardTo: 'purchases',
            icon: <ShoppingIcon />,
            text: t('myPurchases')
        },
        {
            forwardTo: 'favorite',
            icon: <FavoriteBorderIcon />,
            text: t('favorite')
        },
        {
            forwardTo: 'notifications',
            icon: <NotificationIcon />,
            text: t('notifications')
        },
        {
            forwardTo: 'messages',
            icon: <LetterIcon />,
            text: t('messages')
        },
        {
            forwardTo: 'safetyDeal',
            icon: <SafeIcon />,
            text: t('cabinet:safeShopping')
        },
        {
            forwardTo: 'paidServices',
            icon: <WalletIcon />,
            text: t('cabinet:paidServices')
        },
        {
            forwardTo: 'settings',
            icon: <SettingsIcon />,
            text: t('cabinet:settings')
        },
        {
            forwardTo: 'exit',
            icon: <PowerIcon />,
            text: t('cabinet:exit')
        }
    ];

    const classes = useStyles(props);
    return (
        <Menu
            id="menu"
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
            className={classes.root}
        >
            <SidebarMenu />
        </Menu>
    );
};