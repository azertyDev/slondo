import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { ButtonComponent } from '../elements/button/Button';
import { UserInfoWithAvatar } from '../elements/userInfoWithAvatar/userInfoWithAvatar';

// icons
import { NotesIcon } from "../elements/icons/NotesIcon";
import { ArchiveIcon } from "../elements/icons/ArchiveIcon";
import { FavoriteIcon } from "../elements/icons/FavoriteIcon";
import { SortIcon } from "../elements/icons/SortIcon";
import { NotificationIcon } from "../elements/icons/NotificationIcon";
import { LetterIcon } from "../elements/icons/LetterIcon";
import { SafeIcon } from '../elements/icons/SafeIcon';
import { WalletIcon } from '../elements/icons/WalletIcon';
import { TimeLineIcon } from '../elements/icons/TimeLineIcon';
import { ShoppingIcon } from '../elements/icons/ShoppingIcon';
import { SettingsIcon } from '../elements/icons/SettingsIcon';
import { PowerIcon } from '../elements/icons/PowerIcon';

// styles
import { useStyles } from './useStyles';

export const Cabinet = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={3} className='action-menu-wrapper'>
                        <UserInfoWithAvatar />
                        <div className="menu-item-subscribe">
                            <div>
                                <div><Typography variant="subtitle1" color="initial">13</Typography></div>
                                <div><Typography variant="subtitle1">Отзывов</Typography></div>
                            </div>
                            <div>
                                <div><Typography variant="subtitle1" color="initial">2</Typography></div>
                                <div><Typography variant="subtitle1">Подписчика</Typography></div>
                            </div>
                            <div>
                                <div><Typography variant="subtitle1" color="initial">9</Typography></div>
                                <div><Typography variant="subtitle1">Подписок</Typography></div>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <ButtonComponent><NotesIcon/> Мои объявления</ButtonComponent>
                            </div>
                            <div>
                                <ButtonComponent><ArchiveIcon /> Архив объявлений</ButtonComponent>
                            </div>
                            <div>
                                <ButtonComponent><SortIcon/> Рейтинг</ButtonComponent>
                                <ButtonComponent><FavoriteIcon/> Избранное</ButtonComponent>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <ButtonComponent><NotificationIcon/> Уведомления</ButtonComponent>
                                <ButtonComponent><LetterIcon/> Сообщения</ButtonComponent>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <ButtonComponent><SafeIcon/> Безопасная покупка</ButtonComponent>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <ButtonComponent><WalletIcon /> Платные услуги</ButtonComponent>
                            </div>
                            <div>
                                <ButtonComponent><TimeLineIcon/> Статистика</ButtonComponent>
                                <ButtonComponent><ShoppingIcon/> Мои заказы</ButtonComponent>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <ButtonComponent><SettingsIcon/> Настройки</ButtonComponent>
                                <ButtonComponent><PowerIcon/> Выход</ButtonComponent>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
