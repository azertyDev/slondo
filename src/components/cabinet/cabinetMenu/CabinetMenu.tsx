import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { ButtonComponent } from '../../elements/button/Button'
import { UserInfoWithAvatar } from '../../elements/userInfoWithAvatar/UserInfoWithAvatar'

// icons
import { NotesIcon } from '../../elements/icons/NotesIcon'
import { ArchiveIcon } from '../../elements/icons/ArchiveIcon'
import { FavoriteIcon } from '../../elements/icons/FavoriteIcon'
import { SortIcon } from '../../elements/icons/SortIcon'
import { NotificationIcon } from '../../elements/icons/NotificationIcon'
import { LetterIcon } from '../../elements/icons/LetterIcon'
import { SafeIcon } from '../../elements/icons/SafeIcon'
import { WalletIcon } from '../../elements/icons/WalletIcon'
import { TimeLineIcon } from '../../elements/icons/TimeLineIcon'
import { ShoppingIcon } from '../../elements/icons/ShoppingIcon'
import { SettingsIcon } from '../../elements/icons/SettingsIcon'
import { PowerIcon } from '../../elements/icons/PowerIcon'

// styles
import { useStyles } from './useStyles'

export const CabinetMenu = (props) => {
    const { t } = props

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid item xs={12} className='action-menu-wrapper'>
                <UserInfoWithAvatar />
                <div className="menu-item-subscribe">
                    <div>
                        <div><Typography variant="subtitle1" color="initial">13</Typography></div>
                        <div><Typography variant="subtitle1">{t('cabinet:reviews')}</Typography></div>
                    </div>
                    <div>
                        <div><Typography variant="subtitle1" color="initial">2</Typography></div>
                        <div><Typography variant="subtitle1">{t('cabinet:subscribers')}</Typography></div>
                    </div>
                    <div>
                        <div><Typography variant="subtitle1" color="initial">9</Typography></div>
                        <div><Typography variant="subtitle1">{t('cabinet:subscrtiptions')}</Typography></div>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent>
                            <NotesIcon />
                            <Typography variant='subtitle1'>{t('cabinet:myAds')}</Typography>
                        </ButtonComponent>
                    </div>
                    <div>
                        <ButtonComponent>
                            <ArchiveIcon />
                            <Typography variant='subtitle1'>{t('cabinet:adsArchive')}</Typography>
                        </ButtonComponent>
                    </div>
                    <div>
                        <ButtonComponent>
                            <SortIcon />
                            <Typography variant='subtitle1'>{t('cabinet:rating')}</Typography>
                        </ButtonComponent>
                        <ButtonComponent>
                            <FavoriteIcon />
                            <Typography variant='subtitle1'>{t('cabinet:favourite')}</Typography>
                        </ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent>
                            <NotificationIcon />
                            <Typography variant='subtitle1'>{t('cabinet:notifications')}</Typography>
                        </ButtonComponent>
                        <ButtonComponent>
                            <LetterIcon />
                            <Typography variant='subtitle1'>{t('cabinet:messages')}</Typography>
                        </ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent>
                            <SafeIcon />
                            <Typography variant='subtitle1'>{t('cabinet:safeShopping')}</Typography>
                        </ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent>
                            <WalletIcon />
                            <Typography variant='subtitle1'>{t('cabinet:paidServices')}</Typography>
                        </ButtonComponent>
                    </div>
                    <div>
                        <ButtonComponent>
                            <TimeLineIcon />
                            <Typography variant='subtitle1'>{t('cabinet:statistics')}</Typography>
                        </ButtonComponent>
                        <ButtonComponent>
                            <ShoppingIcon />
                            <Typography variant='subtitle1'>{t('cabinet:myOrders')}</Typography>
                        </ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent>
                            <SettingsIcon />
                            <Typography variant='subtitle1'>{t('cabinet:settings')}</Typography>
                        </ButtonComponent>
                        <ButtonComponent>
                            <PowerIcon />
                            <Typography variant='subtitle1'>{t('cabinet:exit')}</Typography>
                        </ButtonComponent>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
