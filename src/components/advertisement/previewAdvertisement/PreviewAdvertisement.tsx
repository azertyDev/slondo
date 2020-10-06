import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

// styles
import { useStyles } from './useStyles'

export const PreviewAdvertisement = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid container item xs={12} md={9}>
                        <Grid xs={12}>
                            <Typography variant="h4" color="initial" className={classes.title}>
                                Проверка объявления
                            </Typography>
                        </Grid>

                        <Grid container item xs={12} direction="row" justify="space-between" >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Тип объявления:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Объявление
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Категория:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1" >
                                    Электроника-Телефоны и план...
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid xs={12}>
                            <Typography variant="h5" color="initial" className={classes.title}>
                                Настройки объявления
                            </Typography>
                        </Grid>
                    
                        <Grid container item xs={12} direction="row" justify="space-between" >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Марка:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Samsung
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Операционная система:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1" >
                                    Android
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid container item xs={12} direction="row" justify="space-between" >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Диагональ экрана:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    16.9
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    4G,LTE:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1" >
                                    Есть
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid container item xs={12} direction="row" justify="space-between" >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Встроенная память:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    32 Гб
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Кол-во SIM-карт:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1" >
                                    1 шт.
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid container item xs={12} direction="row" justify="space-between" >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Слот для карт памяти:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Есть
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    GPS:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1" >
                                    Есть
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid container item xs={12} direction="row" justify="space-between" >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Основная камера:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    10 Mpx
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    NFC модуль:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1" >
                                    Есть
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid container item xs={12} direction="row" justify="space-between" >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Фронтальная камера:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    6 Mpx
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                                <Typography variant="subtitle1">
                                    Срок использования:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3} container alignItems="center">
                                <Typography variant="subtitle1" >
                                    1 год
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            item
                            xs={12}
                            direction="row"
                            justify="space-between"
                        >
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <Typography variant="subtitle1">
                                        Название объявления:
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={9} lg={9} xl={9}>
                                <Typography variant="subtitle1" >
                                    Продаю Samsung A5 в отличном состоянии.
                                </Typography>
                            </Grid>
                        </Grid>
                    
                    
                    
                    
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
