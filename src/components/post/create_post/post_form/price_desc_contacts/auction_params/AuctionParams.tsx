import React, {FC} from "react";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
// import {useStyles} from './useStyles';


export const AuctionParams: FC<any> = (props) => {
    const {
        auction,
        errors,
        touched,
        isPreview,
        defaultParams,
        handleBlur,
        handleInput,
        handleMenuItem,
        postType,
        handleCheckboxChange,
    } = props;

    const isAdvanceAuction = postType.name === 'exauc';

    // const classes = useStyles();
    return (
        <div>
            <Typography variant="h5">
                <strong>Настройки аукциона</strong>
            </Typography>
            <Grid item xs={12} lg={6}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        <strong>
                            Стартовая цена в сумах
                            {!isPreview && <span className='error-text'>*</span>}
                        </strong>
                        {errors.price && touched.price
                        && <span className='error-text'> {errors.price}</span>}
                    </Typography>
                    {isPreview
                        ? <Typography>
                            {`${defaultParams.price} ${defaultParams.currency.name}.`}
                        </Typography>
                        : <Grid container>
                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    value={defaultParams.price ?? ''}
                                    className={errors.price && touched.price
                                        ? 'error-border'
                                        : ''}
                                    name='price'
                                    onChange={handleInput}
                                />
                            </Grid>
                            <CustomMenu
                                name='currency'
                                valueName={
                                    defaultParams.currency
                                        ? defaultParams.currency.name
                                        : 'Не выбрано'}
                                items={postType.currency}
                                onClick={handleMenuItem('currency')}
                                onBlur={handleBlur}
                            />
                        </Grid>
                    }
                </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
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
                            {`${auction.duration.expiration_at}`}
                        </Typography>
                        : <CustomMenu
                            name='duration'
                            getValByName='expiration_at'
                            valueName={auction.duration.expiration_at
                                ? auction.duration.expiration_at
                                : 'Не выбрано'}
                            items={postType.expired}
                            onClick={handleMenuItem('duration')}
                            onBlur={handleBlur}
                        />}
                </Grid>
            </Grid>
            {isAdvanceAuction
            && <>
                <Grid container direction='column' item xs={6}>
                    <Typography variant="subtitle1">
                        <strong>
                            Резервная цена в сумах
                        </strong>
                    </Typography>
                    {isPreview
                        ? <Typography>
                            {auction.reserve_price}
                        </Typography>
                        : <TextField
                            variant='outlined'
                            name='reserve_price'
                            value={auction.reserve_price}
                            onChange={handleInput}
                        />
                    }
                </Grid>
                <Grid container item xs={12} direction='column'>
                    <Grid container alignItems='center' item xs={6}>
                        <Checkbox
                            disabled={isPreview}
                            checked={auction.price_by_now.isActive}
                            onChange={handleCheckboxChange('price_by_now')}
                        />
                        <Typography variant="subtitle1">
                            Купить сейчас
                        </Typography>
                    </Grid>
                    {auction.price_by_now.isActive && (
                        <Grid container alignItems='center' item xs={6}>
                            {isPreview
                                ? <Typography>
                                    {auction.price_by_now.value}
                                </Typography>
                                : <TextField
                                    variant='outlined'
                                    name='price_by_now'
                                    value={auction.price_by_now.value}
                                    onChange={handleInput}
                                />}
                            &nbsp;<Typography>сум.</Typography>
                        </Grid>
                    )}
                </Grid>
                <Grid container item xs={12}>
                    <Grid container alignItems='center' item xs={6}>
                        <Checkbox
                            disabled={isPreview}
                            checked={auction.auto_renewal}
                            onChange={handleCheckboxChange('auto_renewal')}
                        />
                        <Typography variant="subtitle1">
                            Автопроделение
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container alignItems='center' item xs={6}>
                        <Checkbox
                            disabled={isPreview}
                            checked={auction.offer_the_price}
                            onChange={handleCheckboxChange('offer_the_price')}
                        />
                        <Typography variant="subtitle1">
                            Предложить цену
                        </Typography>
                    </Grid>
                </Grid>
            </>}
        </div>
    )
};