import React from 'react'
import {Typography} from '@material-ui/core'
import {ButtonComponent} from '@src/components/elements/button/Button'
import {Router} from '@root/i18n'

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
    const router = Router;
    const {t} = props

    const onButtonClick = (url) => () => {
        Router.push(`/cabinet/${url}`)
    };

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="menu-item">
                <div>
                    <ButtonComponent onClick={onButtonClick('myAds')}>
                        <NotesIcon/>
                        <Typography variant="subtitle1">{t('cabinet:myAds')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent>
                        <GavelIcon/>
                        <Typography variant="subtitle1">{t('cabinet:myLots')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent>
                        <FavoriteBorderIcon/>
                        <Typography variant="subtitle1">{t('cabinet:favourite')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent>
                        <SortIcon/>
                        <Typography variant="subtitle1">{t('cabinet:rating')}</Typography>
                    </ButtonComponent>
                    <ButtonComponent>
                        <ArchiveIcon/>
                        <Typography variant="subtitle1">{t('cabinet:adsArchive')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent>
                        <NotificationIcon/>
                        <Typography variant="subtitle1">{t('cabinet:notifications')}</Typography>
                    </ButtonComponent>
                    <ButtonComponent>
                        <LetterIcon/>
                        <Typography variant="subtitle1">{t('cabinet:messages')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent>
                        <SafeIcon/>
                        <Typography variant="subtitle1">{t('cabinet:safeShopping')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent>
                        <WalletIcon/>
                        <Typography variant="subtitle1">{t('cabinet:paidServices')}</Typography>
                    </ButtonComponent>
                </div>
                <div>
                    <ButtonComponent>
                        <TimeLineIcon/>
                        <Typography variant="subtitle1">{t('cabinet:statistics')}</Typography>
                    </ButtonComponent>
                    <ButtonComponent>
                        <ShoppingIcon/>
                        <Typography variant="subtitle1">{t('cabinet:myOrders')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
            <div className="menu-item">
                <div>
                    <ButtonComponent>
                        <SettingsIcon/>
                        <Typography variant="subtitle1">{t('cabinet:settings')}</Typography>
                    </ButtonComponent>
                    <ButtonComponent>
                        <PowerIcon/>
                        <Typography variant="subtitle1">{t('cabinet:exit')}</Typography>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}
