import React, {FC} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import {MainLayout} from '@src/components/MainLayout';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {useStyles} from './useStyles';


const urls = [
    '/img/adv-background.png',
    '/img/lot-background.png',
    '/img/advanced-lot-background.png',
];

export const AncmntTypesPage: FC<any> = () => {
    const imageUrls = {
        urls: urls,
    };

    const classes = useStyles(imageUrls);
    return (
        <MainLayout>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <div className="advCard">
                                <div>
                                    <Typography variant="subtitle1">Объявление</Typography>
                                    <Typography variant="body2">
                                        Размещайте товары или услуги совершенно бесплатно
                                    </Typography>
                                </div>
                                <ButtonComponent>
                                    Создать объявление
                                </ButtonComponent>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="advCard">
                                <div>
                                    <Typography variant="subtitle1">Онлайн аукцион</Typography>
                                    <Typography variant="body2">
                                        Торгуйте что бы получить более выгодную цену для Вас
                                    </Typography>
                                </div>
                                <ButtonComponent>
                                    Создать аукцион
                                </ButtonComponent>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="advCard">
                                <div>
                                    <Typography variant="subtitle1">Продвинутый аукцион</Typography>
                                    <Typography variant="body2">Используй максимальный функционал</Typography>
                                </div>
                                <ButtonComponent>
                                    Создать аукцион
                                </ButtonComponent>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </MainLayout>
    );
};
