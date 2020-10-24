import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { ButtonComponent } from './../../elements/button/Button';

// styles
import { useStyles } from './useStyles'

export const PreviewAdvertisement = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h4" color="initial" className={classes.title}>
                        Проверка объявления
                    </Typography>
                </Grid>

                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Тип объявления:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Объявление
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Категория:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            Электроника-Телефоны и план...
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" color="initial" className={classes.subTitle}>
                        Настройки объявления
                    </Typography>
                </Grid>
            
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Марка:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Samsung
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Операционная система:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            Android
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Диагональ экрана:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            16.9
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            4G,LTE:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            Есть
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Встроенная память:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            32 Гб
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Кол-во SIM-карт:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            1 шт.
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Слот для карт памяти:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Есть
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            GPS:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            Есть
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Основная камера:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            10 Mpx
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            NFC модуль:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            Есть
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Фронтальная камера:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            6 Mpx
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Срок использования:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            1 год
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                    Название объявления:
                            </Typography>
                        </Grid>

                        <Grid item xs={6} sm={6} md={9} lg={9} xl={9}>
                            <Typography variant="subtitle1" >
                                Продаю Samsung A5 в отличном состоянии.
                            </Typography>
                        </Grid>
                    </Grid>
            
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Цена:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            1500000 сум
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Состояние:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            Б/у
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="h5" color="initial" className={classes.subTitle}>
                        Оплата и доставка
                    </Typography>
                </Grid>

                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Безопасный торг:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={9} lg={9} xl={9} container alignItems="center">
                        <Typography variant="subtitle1">
                            Да
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Есть доставка:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={9} lg={9} xl={9} container alignItems="center">
                        <Typography variant="subtitle1">
                            Да
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Возможен обмен:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={9} lg={9} xl={9} container alignItems="center">
                        <Typography variant="subtitle1">
                            Да
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="space-between" className='row'>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Местоположение:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={9} lg={9} xl={9} container alignItems="center">
                        <Typography variant="subtitle1">
                            г.Ташкент Мирзо-Улугбекский р-н ул Рашида Усманова, 1 проезд дом 3
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Фотографии:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={9} lg={9} xl={9} container alignItems="center">
                    </Grid>
                </Grid>

                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Описание:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={9} lg={9} xl={9} container alignItems="center">
                        <Typography variant="subtitle1">
                            Продаю Samsung A5 со встроенной папятью.Купил в 2015 году. Состояние отлично, царапин нет.
                            Возможен обмен на Iphone 6 64Гб с доплатой. Перекупщиков не беспокоить.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs={12} direction="row" justify="space-between" className='row' spacing={1}>
                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Телефон:
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            +998974547674
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3} container alignItems="center">
                        <Typography variant="subtitle1">
                            Время звонков:
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3} container alignItems="center">
                        <Typography variant="subtitle1" >
                            Пн-Пт 9:00-18:00
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs={12} direction="row" justify="center" className={classes.buttons}>
                    <Grid container justify='space-between' item xs={10} sm={5} spacing={2}>
                        <Grid item xs={6} container alignItems="center">
                            <ButtonComponent>Назад</ButtonComponent>
                        </Grid>
                        <Grid item xs={6} container alignItems="center">
                            <ButtonComponent onClick={props.handleSuccess}>Далее</ButtonComponent>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </div>
    )
}
