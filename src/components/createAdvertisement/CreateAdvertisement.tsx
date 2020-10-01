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
} from '@material-ui/core'
import { AdvertisementSelect } from './advertisementSelect/AdvertisementSelect'
import { Help, Search } from '@material-ui/icons'

// Styles
import { useStyle } from './useStyle'

const CreateAdvertisement = () => {
    const classes = useStyle()
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
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Typography variant="h4" className={classes.title}>
                        Новое объявление - <span>Электроника</span>
                    </Typography>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                        className={classes.typeAndCategoryBlock}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Тип объявления *
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />

                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Категория *
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputBase
                                    className={classes.categoryNameInput}
                                    id="demo-customized-textbox"
                                    value="Электроника-Телефоны и план..."
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item xs={9} className={classes.advertisementSettings}>
                        <Typography variant="h5">
                            Настройки объявления
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">Марка</Typography>
                        </Grid>

                        <AdvertisementSelect />

                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Операционная
                                <br />
                                система
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Диагональ экрана
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />

                        <Grid item xs={3}>
                            <Typography variant="subtitle1">4G,LTE</Typography>
                        </Grid>

                        <AdvertisementSelect />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Встроенная память
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />

                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Кол-во SIM-карт
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Слот для карт памяти
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />

                        <Grid item xs={3}>
                            <Typography variant="subtitle1">GPS</Typography>
                        </Grid>

                        <AdvertisementSelect />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Основная камера
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />

                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                NFC модуль
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Фронтальная камера
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />

                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Срок использования
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />
                    </Grid>

                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        spacing={2}
                        justify="space-between"
                        className={classes.advertisementName}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Название объявления *
                            </Typography>
                        </Grid>

                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                id="advertisementName"
                                variant="outlined"
                                helperText="Название не должно  превышать 50 символов"
                                placeholder="Пример: Samsung S9 black 64 Gb"
                                // onChange={}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justify="space-between"
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">Цена *</Typography>
                        </Grid>

                        <Grid item xs={3} container direction="row">
                            <Grid item xs={8}>
                                <TextField
                                    variant="outlined"
                                    // onChange={}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Select
                                        value={value}
                                        onChange={handleChange}
                                        className={classes.selectPrice}
                                    >
                                        <MenuItem value="" disabled selected>
                                            Выберите...
                                        </MenuItem>
                                        <MenuItem value={10}>UZS</MenuItem>
                                        <MenuItem value={10}>USD</MenuItem>
                                        <MenuItem value={20}>EUR</MenuItem>
                                        <MenuItem value={30}>RUB</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Состояние *
                            </Typography>
                        </Grid>

                        <AdvertisementSelect />
                    </Grid>

                    <Grid item xs={9}>
                        <Typography variant="h5" color="initial">
                            Оплата и доставка
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        item
                        xs={9}
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
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                            <Help className="question-mark" />
                            <Typography variant="subtitle2">
                                Примечание: Вы подключили услугу «Безопасный
                                торг». Ваша сделка защищена. Стоимость услуги
                                составляет n%.{' '}
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
                        xs={9}
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
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                            <Help className="question-mark" />
                            <Typography variant="subtitle2">
                                Примечание: Вы будете выделены специальным
                                стикером доставка. Доставка осуществляется за
                                Ваш счет. В случае невыполнения доставки, Вы
                                можете быть заблокированы.
                                <a href="#">
                                    <span className="safe-auction-rules">
                                        Ознакомиться с правилами «Есть доставка»
                                    </span>
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        item
                        xs={9}
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
                                Примечание: Вы принимаете предложения от других
                                пользователей на обмен. Вы будете выделены
                                специальным стикером «Возможен обмен»
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        item
                        xs={9}
                        direction="row"
                        spacing={2}
                        justify="space-between"
                        className={classes.advertisementName}
                    >
                        <Grid item xs={3}>
                            <Typography variant="subtitle1">
                                Местоположение
                            </Typography>
                        </Grid>

                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                // onChange={}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CreateAdvertisement
