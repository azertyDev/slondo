import React, {FC} from "react";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {WithT} from "i18next";


type AuctionParamsPropsType = {
    values,
    auction,
    errors,
    touched,
    handleBlur,
    handleInput,
    handleMenuItem,
    postType,
    handleCheckboxChange,
} & WithT;

export const AuctionParams: FC<AuctionParamsPropsType> = (props) => {
    const {
        t,
        errors,
        touched,
        values,
        auction,
        handleBlur,
        handleInput,
        handleMenuItem,
        postType,
        handleCheckboxChange,
    } = props;

    const isAdvanceAuction = postType.name === 'exauc';

    return (
        <div>
            <Typography variant="h5">
                <strong>{t('auctionSettings')}</strong>
            </Typography>
            <Grid item xs={12} lg={6}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('startPrice')}
                            {<span className='error-text'>*</span>}
                        </strong>
                        {errors.price && touched.price
                        && <span className='error-text'>&nbsp;{errors.price}</span>}
                    </Typography>
                    <Grid container>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                name='price'
                                variant='outlined'
                                onChange={handleInput}
                                value={defaultParams.price ?? ''}
                                className={errors.price && touched.price ? 'error-border' : ''}
                            />
                        </Grid>
                        <CustomMenu
                            name='currency'
                            onBlur={handleBlur}
                            items={postType.currency}
                            onClick={handleMenuItem('currency')}
                            valueName={defaultParams.currency ? defaultParams.currency.name : 'Не выбрано'}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('auctionDuration')}
                        </strong>
                        {errors.auction &&
                        errors.auction.duration && touched.duration
                        && <span className='error-text'>&nbsp;{errors.auction.duration.id}</span>}
                    </Typography>
                    <CustomMenu
                        name='duration'
                        onBlur={handleBlur}
                        items={postType.expired}
                        getValByName='expiration_at'
                        onClick={handleMenuItem('duration')}
                        valueName={auction.duration.expiration_at ? auction.duration.expiration_at : 'Не выбрано'}
                    />
                </Grid>
            </Grid>
            {isAdvanceAuction && <>
                <Grid container direction='column' item xs={6}>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('reservePrice')}
                        </strong>
                    </Typography>
                    <TextField
                        variant='outlined'
                        name='reserve_price'
                        value={auction.reserve_price}
                        onChange={handleInput}
                    />
                </Grid>
                <Grid container item xs={12} direction='column'>
                    <Grid container alignItems='center' item xs={6}>
                        <Checkbox
                            color='primary'
                            checked={auction.price_by_now.isActive}
                            onChange={handleCheckboxChange('price_by_now')}
                        />
                        <Typography variant="subtitle1">
                            {t('buyNow')}
                        </Typography>
                    </Grid>
                    {auction.price_by_now.isActive && (
                        <Grid container alignItems='center' item xs={6}>
                            <TextField
                                variant='outlined'
                                name='price_by_now'
                                value={auction.price_by_now.value}
                                onChange={handleInput}
                            />
                            <Typography>&nbsp;{t(`common:sum`)}</Typography>
                        </Grid>
                    )}
                </Grid>
                <Grid container item xs={12}>
                    <Grid container alignItems='center' item xs={6}>
                        <Checkbox
                            color='primary'
                            checked={auction.auto_renewal}
                            onChange={handleCheckboxChange('auto_renewal')}
                        />
                        <Typography variant="subtitle1">
                            {t('autoRenewal')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container alignItems='center' item xs={6}>
                        <Checkbox
                            color='primary'
                            checked={auction.offer_the_price}
                            onChange={handleCheckboxChange('offer_the_price')}
                        />
                        <Typography variant="subtitle1">
                            {t('offerPrice')}
                        </Typography>
                    </Grid>
                </Grid>
            </>}
        </div>
    )
};