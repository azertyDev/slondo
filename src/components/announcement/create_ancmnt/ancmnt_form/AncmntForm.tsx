import React, {FC} from 'react';
import {Help} from '@material-ui/icons';
import {Grid, Paper, Switch, TextField, Typography} from '@material-ui/core';
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {CustomCheckbox} from "@src/components/elements/custom_checkbox/CustomCheckbox";
import {PreviewPhotos} from "@src/components/announcement/create_ancmnt/preview_photos/PreviewPhotos";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {LocationAutocomplete} from "@src/components/elements/location_autocomplete/LocationAutocomplete";
import {CustomFormikTextarea} from "@src/components/elements/custom_formik_textarea/CustomFormikTextarea";
import {AncmntParamsContainer} from "@src/components/announcement/create_ancmnt/ancmnt_form/ancmnt_params/AncmntParamsContainer";
import {AncmntAutoFormContainer} from "@src/components/announcement/create_ancmnt/ancmnt_form/ancmnt_auto_form/AncmntAutoFormContainer";
import {useStyles} from './useStyles';


export const AncmntForm: FC<any> = (props) => {
    const {
        t,
        activeStep,
        locations,
        ancmntType,
        createAncmnt,
        values,
        setValues,
        touched,
        errors,
        handleTime,
        handleBlur,
        handleSwitch,
        handleWeekDay,
        handleMenuItem,
        handleListItem,
        handleInput,
        handleAuctionInput,
        handleParamsCheckbox,
        handleCheckboxChange,
    } = props;

    const {subCategory} = createAncmnt;

    const isPreview = activeStep === 3;
    const isAuction = ancmntType.id !== 1;
    const isAdvanceAuction = ancmntType.id === 3;

    const classes = useStyles();
    return (
        subCategory.parent.id === 1
            ? <AncmntAutoFormContainer {...props}/>
            : <div className={classes.root}>
                <Typography variant="h4" className={classes.title}>
                    Новое объявление - <span>{subCategory.parent.name}</span>
                </Typography>
                <Grid container justify="space-between" spacing={2}>
                    <Grid
                        container
                        item
                        xs={12}
                        spacing={2}
                        justify="space-between"
                    >
                        <Grid
                            item
                            xs={12}
                            container
                        >
                            <div>
                                <Typography variant="subtitle1">
                                    <strong>
                                        Тип - {`${ancmntType.name}`}
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
                                <strong>
                                    Категория - {`${subCategory.parent.name} `}
                                </strong>
                                {subCategory.name && (
                                    <strong>
                                        - {subCategory.name}
                                    </strong>
                                )}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        spacing={2}
                        alignItems="center"
                        justify="space-between"
                    >
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                <strong>
                                    Заголовок объявления
                                    {!isPreview
                                    && <span className='error-text'>*</span>}
                                </strong>
                                {errors.title && touched.title && (
                                    <span className='error-text'> {errors.title}</span>
                                )}
                            </Typography>
                            {isPreview
                                ? <Typography>{values.title}</Typography>
                                : <CustomFormikField
                                    className={
                                        errors.title && touched.title
                                            ? 'error-border' : ''
                                    }
                                    name='title'
                                    placeholder="Пример: Samsung S9 black 64 Gb"
                                    value={values.title}
                                />
                            }
                        </Grid>
                    </Grid>
                    {subCategory.id && (
                        <Grid item container className={classes.parameters} direction='column'>
                            <div>
                                <Typography variant="h5">
                                    <strong>Параметры</strong>
                                </Typography>
                            </div>
                            <AncmntParamsContainer
                                t={t}
                                isPreview={isPreview}
                                values={values}
                                createAncmnt={createAncmnt}
                                onBlur={handleBlur}
                                errors={errors}
                                touched={touched}
                                handleMenuItem={handleMenuItem}
                                handleListItem={handleListItem}
                                handleInput={handleInput}
                                handleParamsCheckbox={handleParamsCheckbox}
                            />
                        </Grid>
                    )}
                    <Grid
                        container
                        item
                        xs={12}
                        alignItems="center"
                        justify="space-between"
                        spacing={2}
                    >
                        {isAuction && (
                            <Grid item xs={12}>
                                <Typography variant="h5">
                                    <strong>Настройки аукциона</strong>
                                </Typography>
                            </Grid>
                        )}
                        {subCategory.parent.id !== 11
                        && <>
                            <Grid item xs={12} sm={6}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {isAuction ? 'Стартовая цена в сумах' : 'Цена'}
                                            {!isPreview
                                            && <span className='error-text'>*</span>}
                                        </strong>
                                        {errors.price && touched.price
                                        && <span className='error-text'> {errors.price}</span>}
                                    </Typography>
                                    {isPreview
                                        ? <Typography>
                                            {`${values.price} ${values.currency.name}.`}
                                        </Typography>
                                        : <Grid container>
                                            <Grid item xs={isAuction ? 12 : 9}>
                                                <TextField
                                                    fullWidth
                                                    variant='outlined'
                                                    value={values.price ?? ''}
                                                    className={
                                                        errors.price && touched.price
                                                            ? 'error-border' : ''
                                                    }
                                                    onChange={handleInput('price')}
                                                />
                                            </Grid>
                                            {!isAuction && (
                                                <Grid item xs={3}>
                                                    <CustomMenu
                                                        name='currency'
                                                        valueName={values.currency ? values.currency.name : 'Не выбрано'}
                                                        items={ancmntType.currency}
                                                        onClick={handleMenuItem('currency')}
                                                        onBlur={handleBlur}
                                                    />
                                                </Grid>
                                            )}
                                        </Grid>}
                                </Grid>
                            </Grid>
                            {isAuction && (
                                <Grid item xs={12} sm={6}>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1">
                                            <strong>
                                                Длительность торгов в часах
                                            </strong>
                                            {errors.auction &&
                                            errors.auction.duration && touched.duration
                                            && <span className='error-text'> {errors.auction.duration.id}</span>}
                                        </Typography>
                                        {isPreview
                                            ? <Typography>
                                                {`${values.auction.duration.expiration_at}`}
                                            </Typography>
                                            : <CustomMenu
                                                name='duration'
                                                getValByName='expiration_at'
                                                valueName={
                                                    values.auction.duration.expiration_at
                                                        ? values.auction.duration.expiration_at
                                                        : 'Не выбрано'
                                                }
                                                items={ancmntType.expired}
                                                onClick={handleMenuItem('duration')}
                                                onBlur={handleBlur}
                                            />}
                                    </Grid>
                                </Grid>
                            )}
                            {isAdvanceAuction && (
                                <>
                                    <Grid container direction='column' item xs={6}>
                                        <Typography variant="subtitle1">
                                            <strong>
                                                Резервная цена в сумах
                                            </strong>
                                        </Typography>
                                        {isPreview
                                            ? <Typography>
                                                {values.auction.reserve_price}
                                            </Typography>
                                            : <TextField
                                                variant='outlined'
                                                value={values.auction.reserve_price}
                                                onChange={handleAuctionInput('reserve_price')}
                                            />
                                        }
                                    </Grid>
                                    <Grid container item xs={12} direction='column'>
                                        <Grid container alignItems='center' item xs={6}>
                                            <CustomCheckbox
                                                disabled={isPreview}
                                                checked={values.auction.price_by_now.isActive}
                                                onChange={handleCheckboxChange('price_by_now')}
                                            />
                                            <Typography variant="subtitle1">
                                                Купить сейчас
                                            </Typography>
                                        </Grid>
                                        {values.auction.price_by_now.isActive && (
                                            <Grid container alignItems='center' item xs={6}>
                                                {isPreview
                                                    ? <Typography>
                                                        {values.auction.price_by_now.value}
                                                    </Typography>
                                                    : <TextField
                                                        variant='outlined'
                                                        value={values.auction.price_by_now.value}
                                                        onChange={handleAuctionInput('price_by_now')}
                                                    />
                                                }
                                                &nbsp;<Typography>сум.</Typography>
                                            </Grid>
                                        )}
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <Grid container alignItems='center' item xs={6}>
                                            <CustomCheckbox
                                                disabled={isPreview}
                                                checked={values.auction.auto_renewal}
                                                onChange={handleCheckboxChange('auto_renewal')}
                                            />
                                            <Typography variant="subtitle1">
                                                Автопроделение
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <Grid container alignItems='center' item xs={6}>
                                            <CustomCheckbox
                                                disabled={isPreview}
                                                checked={values.auction.offer_the_price}
                                                onChange={handleCheckboxChange('offer_the_price')}
                                            />
                                            <Typography variant="subtitle1">
                                                Предложить цену
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                        </>}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="initial">
                            <strong>Оплата и доставка</strong>
                        </Typography>
                    </Grid>
                    {subCategory.parent.id !== 11 && (
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
                    )}
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
                                            Ознакомиться с правилами «Есть доставка»
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
                                    {!isPreview
                                    && <span className='error-text'>*</span>}
                                </strong>
                                {errors.location && touched.location && (
                                    <span className='error-text'> {errors.location}</span>
                                )}
                            </Typography>
                            {isPreview
                                ? <Typography>
                                    {values.location.district
                                        ? `${values.location.district}, ${values.location.city}, `
                                        : `${values.location.city}, `}
                                    {`${values.location.region}.`}
                                </Typography>
                                : <LocationAutocomplete
                                    name='location'
                                    placeholder='Выберите город или регион'
                                    values={values}
                                    setValues={setValues}
                                    list={locations.data}
                                    onBlur={handleBlur}
                                    className={errors.location && touched.location ? 'error-border' : ''}
                                />}
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
                                    {!isPreview
                                    && <span className='error-text'>*</span>}
                                </strong>
                                {errors.files && touched.files && (
                                    <span className='error-text'> {errors.files}</span>
                                )}
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
                                    {!isPreview
                                    && <span className='error-text'>*</span>}
                                </strong>
                                {errors.description && touched.description && (
                                    <span className='error-text'> {errors.description}</span>
                                )}
                            </Typography>
                            {isPreview
                                ? <Typography>{values.description}</Typography>
                                : <CustomFormikTextarea
                                    name='description'
                                    onBlur={handleBlur}
                                    className={
                                        `${classes.description} ${errors.description && touched.description ? 'error-border' : ''}`
                                    }
                                    rowsMin={15}
                                    value={values.description}
                                />}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction='row'
                        justify='space-between'
                        spacing={1}
                    >
                        <Grid
                            container
                            item
                            xs={12}
                            sm={6}
                            spacing={2}
                            direction='column'
                            justify='center'
                        >
                            {ancmntType.id !== 1 && (
                                <Grid item container direction='row' alignItems='center'>
                                    <CustomCheckbox
                                        disabled={isPreview}
                                        checked={values.auction.display_phone}
                                        onChange={handleCheckboxChange('display_phone')}
                                    />
                                    <Typography variant="subtitle1">
                                        Отображать номер телефона
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item>
                                <Typography variant="subtitle1">
                                    <strong>Ваш телефон</strong>
                                </Typography>
                                {isPreview
                                    ? <Typography>+998909998877</Typography>
                                    : <CustomFormikField
                                        disabled={true}
                                        type="tel"
                                        name="phone"
                                        value='+998909998877'
                                    />}
                            </Grid>
                            {((isPreview && values.phone) || !isPreview)
                            && <Grid item>
                                <Typography variant="subtitle1">
                                    <strong>
                                        Дополнительный телефон
                                    </strong>
                                </Typography>
                                {isPreview
                                    ? <Typography>{values.phone}</Typography>
                                    : <CustomFormikField
                                        type="tel"
                                        name="phone"
                                        placeholder="+998 (__) ___ __ __"
                                        value={values.phone}
                                    />}
                            </Grid>}
                        </Grid>
                        {!isAuction && (
                            <Grid
                                item
                                container
                                justify='center'
                                alignItems='center'
                                xs={12}
                                sm={6}
                            >
                                <Grid item xs={10} className={classes.week}>
                                    {!isPreview
                                    && <div className='switcher'>
                                        <Typography variant="subtitle1">
                                            <strong>
                                                Время звонков
                                            </strong>
                                        </Typography>
                                        <Switch
                                            color='primary'
                                            checked={values.avalTime.isActive}
                                            onChange={handleSwitch}
                                        />
                                    </div>}
                                    {(isPreview && values.avalTime.isActive || !isPreview)
                                    && <>
                                        <Paper className='scheduler'>
                                            <div className='week-days'>
                                                {[
                                                    {id: 1, name: 'Пн'},
                                                    {id: 2, name: 'Вт'},
                                                    {id: 3, name: 'Ср'},
                                                    {id: 4, name: 'Чт'},
                                                    {id: 5, name: 'Пт'},
                                                    {id: 6, name: 'Сб'},
                                                    {id: 7, name: 'Вс'}
                                                ].map(day => (
                                                        <CustomCheckbox
                                                            disabled={!values.avalTime.isActive || isPreview}
                                                            key={day.id}
                                                            checked={
                                                                values.avalTime.isActive
                                                                && values.avalTime.week.some(({id}) => id === day.id)
                                                            }
                                                            checkedIcon={
                                                                <Typography className='selected-day'>
                                                                    {day.name}
                                                                </Typography>
                                                            }
                                                            icon={<Typography>{day.name}</Typography>}
                                                            onChange={handleWeekDay(day)}
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <div className='available-time'>
                                                <div>
                                                    <Typography>С</Typography>
                                                    <TextField
                                                        variant='outlined'
                                                        name='start_time'
                                                        onChange={handleTime}
                                                        onBlur={handleBlur}
                                                        value={values.avalTime.start_time}
                                                        disabled={!values.avalTime.isActive || isPreview}
                                                    />
                                                </div>
                                                <div>
                                                    <Typography>До</Typography>
                                                    <TextField
                                                        variant='outlined'
                                                        name='end_time'
                                                        onChange={handleTime}
                                                        onBlur={handleBlur}
                                                        value={values.avalTime.end_time}
                                                        disabled={!values.avalTime.isActive || isPreview}
                                                    />
                                                </div>
                                            </div>
                                        </Paper>
                                        {!isPreview && <a href="#" className='settings'>Настройки</a>}
                                    </>}
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <div className={classes.nextButtonBlock}>
                    <ButtonComponent
                        type='submit'
                        disabled={values.isFetch}
                        className={classes.navButton}
                    >
                        <Typography>
                            {isPreview
                                ? 'Создать'
                                : 'Далее'}
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
    )
};