import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { ButtonComponent } from '../elements/button/Button';
import { UserInfoWithAvatar } from '../elements/userInfoWithAvatar/userInfoWithAvatar';

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
                        <div className="menu-item-1">
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
                        {/* <div className="menu-item-2">
                            <div>
                                <ButtonComponent><img src={} alt="my-ads-icon"/>Мои объявления</ButtonComponent>
                            </div>
                            <div>
                                <ButtonComponent>Архив объявлений</ButtonComponent>
                            </div>
                            <div>
                                <ButtonComponent>Рейтинг</ButtonComponent>
                                <ButtonComponent>Сообщения</ButtonComponent>
                            </div>
                        </div> */}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
