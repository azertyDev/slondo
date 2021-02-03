import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {Router} from '@root/i18n';
import {useRouter} from 'next/router';
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
import {useStyles} from './useStyles';

export const ActionsMenu: FC<any> = (props) => {
    const {pathname} = useRouter();
    const {t} = props;

    const onButtonClick = (url) => () => {
        Router.push(`/cabinet/${url}`);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="menu-item">
                <div>
                    <ButtonComponent
                        className={
                            pathname === '/cabinet/not-moderated'
                                ? 'selected'
                                : ''
                        }
                    >
                        <Typography variant="subtitle1" className="error-text">
                            Не прошло модерацию (2)
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent
                        className={
                            pathname === '/cabinet/posts' ? 'selected' : ''
                        }
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
                        className={
                            pathname === '/cabinet/auctions' ? 'selected' : ''
                        }
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
                        className={
                            pathname === '/cabinet/favorite' ? 'selected' : ''
                        }
                        onClick={onButtonClick('favorite')}
                    >
                        <FavoriteBorderIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:favourite')}
                        </Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <CustomBadge badgeContent={4}>
                        <ButtonComponent
                            className={
                                pathname === '/cabinet/orders'
                                    ? 'selected'
                                    : ''
                            }
                        >
                            <ShoppingIcon/>
                            <Typography variant="subtitle1">
                                {t('cabinet:myOrders')}
                            </Typography>
                        </ButtonComponent>
                    </CustomBadge>
                    <ButtonComponent
                        className={
                            pathname === '/cabinet/archive' ? 'selected' : ''
                        }
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
                            className={
                                pathname === '/cabinet/notifications'
                                    ? 'selected'
                                    : ''
                            }
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
                            className={
                                pathname === '/cabinet/messages'
                                    ? 'selected'
                                    : ''
                            }
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
                        className={
                            pathname === '/cabinet/safetyDeal' ? 'selected' : ''
                        }
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
                        className={
                            pathname === '/cabinet/paidServices'
                                ? 'selected'
                                : ''
                        }
                    >
                        <WalletIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:paidServices')}
                        </Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent
                        className={
                            pathname === '/cabinet/statistics' ? 'selected' : ''
                        }
                    >
                        <TimeLineIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:statistics')}
                        </Typography>
                    </ButtonComponent>
                    <ButtonComponent
                        className={
                            pathname === '/cabinet/rating' ? 'selected' : ''
                        }
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
                        // className={pathname === '/cabinet/settings' ? 'selected' : ''}
                        // onClick={onButtonClick('settings')}
                    >
                        <SettingsIcon/>
                        <Typography variant="subtitle1">
                            {t('cabinet:settings')}
                        </Typography>
                    </ButtonComponent>
                    <ButtonComponent
                        className={
                            pathname === '/cabinet/exit' ? 'selected' : ''
                        }
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
