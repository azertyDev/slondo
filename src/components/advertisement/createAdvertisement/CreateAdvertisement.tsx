import React, { useState } from 'react'
import {
    Container,
    Grid,
    Typography,
    FormControl,
    InputBase,
    TextField,
    Select,
    MenuItem,
    Checkbox,
    InputAdornment,
    TextareaAutosize,
    Hidden,
} from '@material-ui/core'
import { AdvertisementSelect } from '../advertisementSelect/AdvertisementSelect'
import { ButtonComponent } from '../../elements/button/Button'
import { Help, Search } from '@material-ui/icons'

// Styles
import { useStyles } from './useStyles'

// test
export const CreateAdvertisement = (props) => {
    const classes = useStyles()
    const [value, setValue] = useState('')
    const [checked, setChecked] = useState(false)

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Новое объявление - <span>Электроника </span>
            </Typography>
            <Grid container justify="space-between" spacing={1}>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={3}
                            xl={3}
                            container
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                <strong>
                                    Тип объявления{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={3}
                            xl={3}
                            container
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                <strong>
                                    Категория{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        className={classes.advertisementSettings}
                    >
                        <Typography variant="h5">
                            <strong>Настройки объявления</strong>
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            container
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                Марка
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            container
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                Операционная система
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Диагональ экрана
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                4G,LTE
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Встроенная память
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Кол-во SIM-карт
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Слот для карт памяти
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">GPS</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Основная камера
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                NFC модуль
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Фронтальная камера
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Срок использования
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        justify="space-between"
                        spacing={2}
                        className={classes.advertisementName}
                    >
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                <strong>
                                    Название объявления{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={9} lg={9} xl={9}>
                            <TextField
                                fullWidth
                                id="advertisementName"
                                variant="outlined"
                                helperText="Название не должно превышать 50 символов"
                                placeholder="Пример: Samsung S9 black 64 Gb"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={4} sm={6} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                <strong>
                                    Цена{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={8}
                            sm={6}
                            md={3}
                            container
                            direction="row"
                            spacing={1}
                            className={classes.spacingNone}
                        >
                            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                <TextField
                                    variant="outlined"
                                    // onChange={}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Select
                                        value={value}
                                        onChange={handleChange}
                                        className={classes.selectPrice}
                                    >
                                        <MenuItem
                                            value=""
                                            disabled
                                            selected
                                        >
                                            Выберите...
                                        </MenuItem>
                                        <MenuItem value={10} selected>
                                            UZS
                                        </MenuItem>
                                        <MenuItem value={10}>USD</MenuItem>
                                        <MenuItem value={20}>EUR</MenuItem>
                                        <MenuItem value={30}>RUB</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle1">
                                <strong>
                                    Состояние{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <AdvertisementSelect />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="initial">
                            <strong>Оплата и доставка</strong>
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Безопасный торг
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={9}
                            className={classes.paymentAndDelivery}
                        >
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />
                            <Help className="question-mark" />
                            <Typography variant="subtitle2">
                                Примечание: Вы подключили услугу «Безопасный
                                торг». Ваша сделка защищена. Стоимость
                                услуги составляет n%.{' '}
                                <a href="#">
                                    <span className="safe-auction-rules">
                                        Ознакомиться с правилами «Безопасный
                                        торг»
                                    </span>
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Есть доставка
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={9}
                            className={classes.paymentAndDelivery}
                        >
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />
                            <Help className="question-mark" />
                            <Typography variant="subtitle2">
                                Примечание: Вы будете выделены специальным
                                стикером доставка. Доставка осуществляется
                                за Ваш счет. В случае невыполнения доставки,
                                Вы можете быть заблокированы.
                                <a href="#">
                                    <span className="safe-auction-rules">
                                        Ознакомиться с правилами «Есть
                                        доставка»
                                    </span>
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Возможен обмен
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={9}
                            className={classes.paymentAndDelivery}
                        >
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckboxChange}
                                color="primary"
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                            <Help className="question-mark" />
                            <Typography variant="subtitle2">
                                Примечание: Вы принимаете предложения от
                                других пользователей на обмен. Вы будете
                                выделены специальным <br />
                                стикером «Возможен обмен»
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        justify="space-between"
                        spacing={2}
                        className={classes.advertisementName}
                    >
                        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                            <Typography variant="subtitle1">
                                Местоположение
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={9}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Hidden xsDown>
                            <Grid item sm={3} />
                        </Hidden>
                        <Grid item xs={12} sm={9}>
                            <div className="photos-dropdown" />
                        </Grid>
                    </Grid>

                    {/* Photos */}
                    <Grid
                        container
                        item
                        xs={12}
                        spacing={2}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                    >
                        <Grid item xs={12} sm={3}>
                            <Typography variant="subtitle1">
                                <strong>
                                    Фотографии{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="subtitle1">
                                <strong>
                                    Описание{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextareaAutosize
                                className={classes.description}
                                aria-label="Phone"
                                rowsMin={15}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="subtitle1">
                                <strong>
                                    Телефон{' '}
                                    <span className={classes.required}>
                                        *
                                    </span>
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <TextField
                                variant="outlined"
                                id="phone"
                                placeholder="+998 (__) ___ __ __"
                                type="tel"
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={5}
                            md={6}
                            container
                            alignItems="center"
                            justify="space-around"
                        >
                            <Typography variant="subtitle2">
                                Время звонков
                            </Typography>
                            <a href="#" className={classes.getSettings}>
                                Перейти к настройкам
                            </a>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        justify="center"
                        className={classes.nextButtonBlock}
                    >
                        <Grid item>
                            <ButtonComponent
                                variant="contained"
                                color="primary"
                                className={classes.nextButton}
                                onClick={props.handlePreview}
                            >
                                Далее
                            </ButtonComponent>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    )
}
