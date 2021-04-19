import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import {WithT} from "i18next";
import {cookies} from '@src/helpers';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomBadge} from '@src/components/elements/custom_budge/CustomBadge';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {GavelIcon} from '@src/components/elements/icons/GavelIcon';
import {ArchiveIcon} from '@src/components/elements/icons/ArchiveIcon';
import {FavoriteBorderIcon} from '@src/components/elements/icons/FavoriteBorderIcon';
import {SortIcon} from '@src/components/elements/icons/SortIcon';
import {NotificationIcon} from '@src/components/elements/icons/NotificationIcon';
import {LetterIcon} from '@src/components/elements/icons/LetterIcon';
import {SafeIcon} from '@src/components/elements/icons/SafeIcon';
import {WalletIcon} from '@src/components/elements/icons/WalletIcon';
import {TimeLineIcon} from '@src/components/elements/icons/TimeLineIcon';
import {ShoppingIcon} from '@src/components/elements/icons/ShoppingIcon';
import {SettingsIcon} from '@src/components/elements/icons/SettingsIcon';
import {PowerIcon} from '@src/components/elements/icons/PowerIcon';
import {useDispatch} from "react-redux";
import {signOutAction} from '@src/redux/slices/userSlice';
import {useStyles} from './useStyles';


export const SidebarMenu: FC<WithT> = ({t}) => {
    const dispatch = useDispatch();
    const {pathname, push} = useRouter();

    const onButtonClick = (url) => async () => {
        push(`/cabinet/${url}`);
    };

    const signOut = async () => {
        dispatch(signOutAction());
        cookies.remove('slondo_auth', {path: '/'});
        cookies.remove('slondo_user', {path: '/'});
        push('/');
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="menu-item">
                <div>
                    <CustomBadge badgeContent={2} style={{width: '100%'}}>
                        <ButtonComponent
                            className={pathname === '/cabinet/not-moderated' ? 'selected' : ''}
                        >
                            <Typography variant="subtitle1">
                                {t('cabinet:nonModerated')}
                            </Typography>
                        </ButtonComponent>
                    </CustomBadge>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/posts' ? 'selected' : ''}
                        onClick={onButtonClick('posts')}
                    >
                        <NotesIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:myPosts')}
                        </Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/auctions' ? 'selected' : ''}
                        onClick={onButtonClick('auctions')}
                    >
                        <GavelIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:myAuctions')}
                        </Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/favorite' ? 'selected' : ''}
                        onClick={onButtonClick('favorite')}
                    >
                        <FavoriteBorderIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:favorite')}
                        </Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <CustomBadge badgeContent={4}>
                        <ButtonComponent
                            className={pathname === '/cabinet/purchases' ? 'selected' : ''}
                            onClick={onButtonClick('purchases')}
                        >
                            <ShoppingIcon/>
                            <Typography variant="subtitle1">
                                {t('cabinet:myPurchases')}
                            </Typography>
                        </ButtonComponent>
                    </CustomBadge>
                    <ButtonComponent
                        className={pathname === '/cabinet/archive' ? 'selected' : ''}
                        onClick={onButtonClick('archive')}
                    >
                        <ArchiveIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:archive')}
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <CustomBadge badgeContent={4}>
                        <ButtonComponent
                            className={pathname === '/cabinet/notifications' ? 'selected' : ''}
                            onClick={onButtonClick('notifications')}
                        >
                            <NotificationIcon/>
                            <Typography variant="subtitle1">
                                {t('cabinet:notifications')}
                            </Typography>
                        </ButtonComponent>
                    </CustomBadge>
                    <CustomBadge badgeContent={8}>
                        <ButtonComponent
                            className={pathname === '/cabinet/messages' ? 'selected' : ''}
                            onClick={onButtonClick('messages')}
                        >
                            <LetterIcon/>
                            <Typography variant="subtitle1">
                                {t('cabinet:messages')}
                            </Typography>
                        </ButtonComponent>
                    </CustomBadge>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/safetyDeal' ? 'selected' : ''}
                        onClick={onButtonClick('safetyDeal')}
                    >
                        <SafeIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:safeShopping')}
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/paidServices' ? 'selected' : ''}
                    >
                        <WalletIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:paidServices')}
                        </Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/statistics' ? 'selected' : ''}
                        disabled
                    >
                        <TimeLineIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:statistics')}
                        </Typography>
                    </ButtonComponent>
                    <ButtonComponent
                        className={pathname === '/cabinet/rating' ? 'selected' : ''}
                        onClick={onButtonClick('rating')}
                    >
                        <SortIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:rating')}
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/settings' ? 'selected' : ''}
                        onClick={onButtonClick('settings')}
                    >
                        <SettingsIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:settings')}
                        </Typography>
                    </ButtonComponent>
                    <ButtonComponent
                        className={pathname === '/cabinet/exit' ? 'selected' : ''}
                        onClick={signOut}
                    >
                        <PowerIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:exit')}
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
};
