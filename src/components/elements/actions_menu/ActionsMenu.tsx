import React from 'react'
import {Badge, Typography} from '@material-ui/core'
import {Router} from '@root/i18n'
import {useRouter} from 'next/router'
import {ButtonComponent} from '@src/components/elements/button/Button'
import { CustomBadge } from '@src/components/elements/custom_budge/CustomBadge';

// icons
import {NotesIcon} from '@src/components/elements/icons/NotesIcon'
import {GavelIcon} from "@src/components/elements/icons/GavelIcon";
import {ArchiveIcon} from '@src/components/elements/icons/ArchiveIcon'
import {FavoriteBorderIcon} from "@src/components/elements/icons/FavoriteBorderIcon";
import {SortIcon} from '@src/components/elements/icons/SortIcon'
import {NotificationIcon} from '@src/components/elements/icons/NotificationIcon'
import {LetterIcon} from '@src/components/elements/icons/LetterIcon'
import {SafeIcon} from '@src/components/elements/icons/SafeIcon'
import {WalletIcon} from '@src/components/elements/icons/WalletIcon'
import {TimeLineIcon} from '@src/components/elements/icons/TimeLineIcon'
import {ShoppingIcon} from '@src/components/elements/icons/ShoppingIcon'
import {SettingsIcon} from '@src/components/elements/icons/SettingsIcon'
import {PowerIcon} from '@src/components/elements/icons/PowerIcon'

// styles
import {useStyles} from './useStyles'

export const ActionsMenu = (props) => {
    const {pathname} = useRouter();
    const {t} = props

    const onButtonClick = (url) => () => {
        Router.push(`/cabinet/${url}`)
    };

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="menu-item">
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/myAds' ? 'selected' : ''}
                        onClick={onButtonClick('myAds')}
                    >
                        <NotesIcon/>
                        <Typography variant="subtitle1">{t('cabinet:myAds')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/myLots' ? 'selected' : ''}
                        onClick={onButtonClick('myLots')}
                    >
                        <GavelIcon/>
                        <Typography variant="subtitle1">{t('cabinet:myLots')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent
                        className={pathname === '/cabinet/favorite' ? 'selected' : ''}
                        onClick={onButtonClick('favorite')}
                    >
                        <FavoriteBorderIcon/>
                        <Typography variant="subtitle1">{t('cabinet:favourite')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <Badge badgeContent={4} color="secondary">
                        <ButtonComponent
                            className={pathname === '/cabinet/myOrders' ? 'selected' : ''}
                        >
                            <ShoppingIcon/>
                            <Typography variant="subtitle1">{t('cabinet:myOrders')}</Typography>
                        </ButtonComponent>
                    </Badge>
                    <ButtonComponent
                        className={pathname === '/cabinet/archive' ? 'selected' : ''}
                        onClick={onButtonClick('archive')}
                    >
                        <ArchiveIcon/>
                        <Typography variant="subtitle1">{t('cabinet:adsArchive')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <CustomBadge badgeContent={4} color="secondary">
                        <ButtonComponent className={pathname === '/cabinet/notifications' ? 'selected' : ''} onClick={onButtonClick('notifications')}>
                            <NotificationIcon/>
                            <Typography variant="subtitle1">{t('cabinet:notifications')}</Typography>
                        </ButtonComponent>
                    </CustomBadge>
                    <Badge badgeContent={8} color="secondary" >
                        <ButtonComponent className={pathname === '/cabinet/messages' ? 'selected' : ''} onClick={onButtonClick('messages')}>
                            <LetterIcon/>
                            <Typography variant="subtitle1">{t('cabinet:messages')}</Typography>
                        </ButtonComponent>
                    </Badge>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent className={pathname === '/cabinet/safetyDeal' ? 'selected' : ''} onClick={onButtonClick('safetyDeal')}>
                        <SafeIcon/>
                        <Typography variant="subtitle1">{t('cabinet:safeShopping')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent className={pathname === '/cabinet/paidServices' ? 'selected' : ''}>
                        <WalletIcon/>
                        <Typography variant="subtitle1">{t('cabinet:paidServices')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent className={pathname === '/cabinet/statistics' ? 'selected' : ''}>
                        <TimeLineIcon/>
                        <Typography variant="subtitle1">{t('cabinet:statistics')}</Typography>
                    </ButtonComponent>
                    <ButtonComponent className={pathname === '/cabinet/rating' ? 'selected' : ''} onClick={onButtonClick('rating')}>
                        <SortIcon/>
                        <Typography variant="subtitle1">{t('cabinet:rating')}</Typography>
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
                        <Typography variant="subtitle1">{t('cabinet:settings')}</Typography>
                    </ButtonComponent>
                    <ButtonComponent className={pathname === '/cabinet/exit' ? 'selected' : ''}>
                        <PowerIcon/>
                        <Typography variant="subtitle1">{t('cabinet:exit')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}
