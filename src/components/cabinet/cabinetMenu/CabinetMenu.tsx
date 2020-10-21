import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { ButtonComponent } from '../../elements/button/Button';
import { UserInfoWithAvatar } from '../../elements/userInfoWithAvatar/UserInfoWithAvatar';

// icons
import { NotesIcon } from "../../elements/icons/NotesIcon";
import { ArchiveIcon } from "../../elements/icons/ArchiveIcon";
import { FavoriteIcon } from "../../elements/icons/FavoriteIcon";
import { SortIcon } from "../../elements/icons/SortIcon";
import { NotificationIcon } from "../../elements/icons/NotificationIcon";
import { LetterIcon } from "../../elements/icons/LetterIcon";
import { SafeIcon } from '../../elements/icons/SafeIcon';
import { WalletIcon } from '../../elements/icons/WalletIcon';
import { TimeLineIcon } from '../../elements/icons/TimeLineIcon';
import { ShoppingIcon } from '../../elements/icons/ShoppingIcon';
import { SettingsIcon } from '../../elements/icons/SettingsIcon';
import { PowerIcon } from '../../elements/icons/PowerIcon';

// styles
import { useStyles } from './useStyles';

export const CabinetMenu = (props) => {
    const {t} = props;

    const classes = useStyles();
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
                        <ButtonComponent><NotesIcon/>{t('cabinet:myAds')}</ButtonComponent>
                    </div>
                    <div>
                        <ButtonComponent><ArchiveIcon />{t('cabinet:adsArchive')}</ButtonComponent>
                    </div>
                    <div>
                        <ButtonComponent><SortIcon/>{t('cabinet:rating')}</ButtonComponent>
                        <ButtonComponent><FavoriteIcon/>{t('cabinet:favourite')}</ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent><NotificationIcon/>{t('cabinet:notifications')}</ButtonComponent>
                        <ButtonComponent><LetterIcon/>{t('cabinet:messages')}</ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent><SafeIcon/>{t('cabinet:safeShopping')}</ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent><WalletIcon />{t('cabinet:paidServices')}</ButtonComponent>
                    </div>
                    <div>
                        <ButtonComponent><TimeLineIcon/>{t('cabinet:statistics')}</ButtonComponent>
                        <ButtonComponent><ShoppingIcon/>{t('cabinet:myOrders')}</ButtonComponent>
                    </div>
                </div>
                <div className="menu-item">
                    <div>
                        <ButtonComponent><SettingsIcon/>{t('cabinet:settings')}</ButtonComponent>
                        <ButtonComponent><PowerIcon/>{t('cabinet:exit')}</ButtonComponent>
                    </div>
                </div>
            </Grid>
        </div>
    );
};
