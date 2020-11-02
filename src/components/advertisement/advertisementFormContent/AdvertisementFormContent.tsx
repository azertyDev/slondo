import React, {FC} from 'react';
import {
    Grid,
    Typography,
    TextField,
    Checkbox,
    InputAdornment,
    Hidden,
} from '@material-ui/core';
//icons
import {Help, Search} from '@material-ui/icons';
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {adTypesList} from "@src/components/advertisement/createAdModalForm/CreateAdModalForm";
// styles
import {useStyles} from './useStyles';
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {CustomFormikTextarea} from "@src/components/elements/custom_formik_textarea/CustomFormikTextarea";
import {AdvertisementCreateData} from "@src/components/advertisement/advertisementFormContent/AdvertisementCreateData";


export const AdvertisementFormContent: FC<any> = (props) => {

    const {
        store,
        values,
        touched,
        errors,
        handleBlur,
        handleCheckboxChange,
        handleClickMenuItem,
        handleClickMenuCategory,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Новое объявление - <span>{values.adCategory.name}</span>
            </Typography>
            <Grid container justify="space-between" spacing={1}>
                <Grid
                    container
                    item
                    xs={12}
                    justify="space-between"
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        container
                    >
                        <Typography variant="subtitle1">
                            <strong>
                                Тип
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                        <CustomMenu
                            valueName={values.adType.name}
                            items={adTypesList}
                            onBlur={handleBlur}
                            onClick={handleClickMenuItem('adType')}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        container
                    >
                        <Typography variant="subtitle1">
                            <strong>
                                Категория
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                        <CustomMenu
                            valueName={values.adCategory.name}
                            items={store.categories.list}
                            onBlur={handleBlur}
                            onClick={handleClickMenuCategory}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        container
                        direction='column'
                        justify='flex-end'
                    >
                        <Typography variant="subtitle1">
                            <strong>
                                Под категория
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                        <CustomMenu
                            valueName={values.adSubCategory.name}
                            items={values.adCategory.childs}
                            onBlur={handleBlur}
                            onClick={handleClickMenuItem('adSubCategory')}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={1} className={classes.advertisementSettings}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            <strong>Настройки объявления</strong>
                        </Typography>
                    </Grid>
                    <AdvertisementCreateData
                        values={values}
                        data={store.createAdvrt.data}
                        onBlur={handleBlur}
                        handleClickMenuItem={handleClickMenuItem}
                    />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    alignItems="center"
                    justify="space-between"
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1">
                            <strong>
                                Заголовок объявления
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={9}>
                        <CustomFormikField
                            name='adName'
                            placeholder="Пример: Samsung S9 black 64 Gb"
                        />
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
                            checked={values.safeBuy}
                            onChange={handleCheckboxChange}
                            color="primary"
                        />
                        <Help className="question-mark"/>
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
                            checked={values.haveDelivery}
                            onChange={handleCheckboxChange}
                            color="primary"
                        />
                        <Help className="question-mark"/>
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
                            checked={values.haveExch}
                            onChange={handleCheckboxChange}
                            color="primary"
                            inputProps={{
                                'aria-label': 'secondary checkbox',
                            }}
                        />
                        <Help className="question-mark"/>
                        <Typography variant="subtitle2">
                            Примечание: Вы принимаете предложения от
                            других пользователей на обмен. Вы будете
                            выделены специальным <br/>
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
                    <Grid item xs={12} sm={3}>
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
                                        <Search/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Hidden xsDown>
                        <Grid item sm={3}/>
                    </Hidden>
                    <Grid item xs={12} sm={9}>
                        <div className="photos-dropdown"/>
                    </Grid>
                </Grid>
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
                                Фотографии
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
                    <Grid item xs={12} sm={3}>
                        <Typography variant="subtitle1">
                            <strong>
                                Описание
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomFormikTextarea
                            name='description'
                            className={classes.description}
                            rowsMin={15}
                            value={values.description}
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
                    <Grid item xs={12} sm={3}>
                        <Typography variant="subtitle1">
                            <strong>
                                Телефон
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
                            value={values.phone}
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
            </Grid>
        </div>
    )
};