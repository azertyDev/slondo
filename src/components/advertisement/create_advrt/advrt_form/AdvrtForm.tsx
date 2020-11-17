import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Help} from '@material-ui/icons';
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {CustomFormikTextarea} from "@src/components/elements/custom_formik_textarea/CustomFormikTextarea";
import {AdvrtSettingsBlock} from "@src/components/advertisement/create_advrt/advrt_form/advrt_settings_block/AdvrtSettingsBlock";
import {CustomCheckbox} from "@src/components/elements/custom_checkbox/CustomCheckbox";
import {PreviewPhotos} from "@src/components/elements/preview_photos/PreviewPhotos";
// styles
import {useStyles} from './useStyles';
import {AddressAutocomplete} from "@src/components/elements/address_autocomplete/AddressAutocomplete";


export const AdvrtForm: FC<any> = (props) => {
    const {
        isPreview,
        createAdvrt,
        values,
        setValues,
        touched,
        errors,
        handleBlur,
        handleParamsCheckbox,
        handleCheckboxChange,
        handleMenuItem,
        handleListItem,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Новое объявление - <span>{createAdvrt.category.name}</span>
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
                        container
                    >
                        <div>
                            <Typography variant="subtitle1">
                                <strong>
                                    Тип
                                    <span className={classes.required}>
                                        *
                                    </span>
                                    - {`${createAdvrt.adType.name}`}
                                </strong>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                    >
                        <Typography variant="subtitle1">
                            <>
                                <strong>
                                    Категория
                                    <span className={classes.required}>
                                        *
                                    </span>
                                    - {`${createAdvrt.category.name} `}
                                </strong>
                                {
                                    createAdvrt.data.name && (
                                        <strong>
                                            - {createAdvrt.data.name}
                                        </strong>
                                    )
                                }
                            </>
                        </Typography>
                    </Grid>
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
                        {
                            isPreview
                                ? <Typography>{values.title}</Typography>
                                : <CustomFormikField
                                    name='title'
                                    placeholder="Пример: Samsung S9 black 64 Gb"
                                    value={values.title}
                                />
                        }
                    </Grid>
                </Grid>
                {
                    createAdvrt.data.id && (
                        <Grid item container className={classes.parameters} direction='column'>
                            <div>
                                <Typography variant="h5">
                                    <strong>Параметры</strong>
                                </Typography>
                            </div>
                            {createAdvrt.data.id && (
                                <AdvrtSettingsBlock
                                    isPreview={isPreview}
                                    adsParams={values.adsParams}
                                    createAdvrt={createAdvrt}
                                    onBlur={handleBlur}
                                    handleMenuItem={handleMenuItem}
                                    handleListItem={handleListItem}
                                    handleParamsCheckbox={handleParamsCheckbox}
                                />
                            )}
                        </Grid>
                    )
                }
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
                        <CustomCheckbox
                            disabled={isPreview}
                            checked={values.safe_deal}
                            onChange={handleCheckboxChange('safe_deal')}
                        />
                        <Help className="question-mark"/>
                        <Typography variant="subtitle2">
                            Примечание: Вы подключили услугу «Безопасный
                            торг». Ваша сделка защищена. Стоимость
                            услуги составляет n%.{' '}
                            <a href="#">
                                <span className="safe-auction-rules">
                                    Ознакомиться с правилами «Безопасный торг»
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
                        <CustomCheckbox
                            disabled={isPreview}
                            checked={values.delivery}
                            onChange={handleCheckboxChange('delivery')}
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
                        <CustomCheckbox
                            disabled={isPreview}
                            checked={values.exchange}
                            onChange={handleCheckboxChange('exchange')}
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
                    direction="row"
                    justify="space-between"
                    xs={12}
                    spacing={1}
                    className={classes.advertisementName}
                >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">
                            <strong>
                                Местоположение
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                        {
                            isPreview
                                ? <Typography>{`${values.location.area}, ${values.location.city}`}</Typography>
                                : <AddressAutocomplete
                                    name='location'
                                    placeholder='Выберите город или регион'
                                    values={values}
                                    setValues={setValues}
                                    list={createAdvrt.data.address}
                                />
                        }
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
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>
                                Фотографии
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                        <PreviewPhotos
                            values={values}
                            setValues={setValues}
                            isPreview={isPreview}
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
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            <strong>
                                Описание
                                <span className={classes.required}>
                                    *
                                </span>
                            </strong>
                        </Typography>
                        {
                            isPreview
                                ? <Typography>{values.description}</Typography>
                                : <CustomFormikTextarea
                                    name='description'
                                    className={classes.description}
                                    rowsMin={15}
                                    value={values.description}
                                />
                        }
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
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
                        {
                            isPreview
                                ? <Typography>{values.phone}</Typography>
                                : <CustomFormikField
                                    type="tel"
                                    name="phone"
                                    placeholder="+998 (__) ___ __ __"
                                    value={values.phone}
                                />
                        }
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