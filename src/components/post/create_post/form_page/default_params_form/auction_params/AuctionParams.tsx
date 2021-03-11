import React, {FC} from "react";
import {WithT} from "i18next";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {CustomSelect} from "@root/src/components/elements/customSelect/CustomSelect";
import {useStyles} from './useStyles';


type AuctionParamsPropsType = {
    values,
    errors,
    touched,
    postType,
    handleBlur,
    handleInput,
    handleSelect,
    isAdvanceAuction: boolean,
    handleCheckboxChange,
} & WithT;

export const AuctionParams: FC<AuctionParamsPropsType> = (props) => {
    const {
        t,
        errors,
        touched,
        values,
        postType,
        handleBlur,
        handleInput,
        handleSelect,
        isAdvanceAuction,
        handleCheckboxChange
    } = props;

    const {auction} = values;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} className='price-wrapper'>
                <Grid item container xs={12}>
                    <Grid item xs={5}>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('startPrice')}
                                {<span className='error-text'>*</span>}
                            </strong>
                            {errors.price && touched.price && (
                                <span className='error-text'>&nbsp;{t(errors.price)}</span>
                            )}
                        </Typography>
                        <TextField
                            fullWidth
                            name='price'
                            variant='outlined'
                            onChange={handleInput}
                            value={values.price ?? ''}
                            className={errors.price && touched.price ? 'error-border' : ''}
                        />
                    </Grid>
                </Grid>
                {isAdvanceAuction && (
                    <Grid container direction='column' item xs={12}>
                        <Grid item xs={5}>
                            <Typography variant="subtitle1">
                                <strong>
                                    {t('reservePrice')}
                                </strong>
                            </Typography>
                            <TextField
                                fullWidth
                                variant='outlined'
                                name='reserve_price'
                                value={auction.reserve_price}
                                onChange={handleInput}
                            />
                        </Grid>
                    </Grid>
                )}
                <Grid item container xs={12}>
                    <div className='auction-duration'>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('auctionDuration')}
                            </strong>
                            {errors.auction
                            && touched.auction
                            && errors.auction.duration
                            && touched.auction.duration
                            && <span className='error-text'>&nbsp;{t(errors.auction.duration)}</span>}
                        </Typography>
                        <CustomSelect
                            t={t}
                            name='duration'
                            values={auction}
                            onBlur={handleBlur}
                            items={postType.expired}
                            handleSelect={handleSelect}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                </Grid>
            </Grid>
            {isAdvanceAuction && (
                <Grid container className='adv-auction'>
                    <Grid container item xs={12} direction='column' className='buy-now-wrapper'>
                        <Grid container item xs={12} alignItems='center'>
                            <Checkbox
                                color='primary'
                                checked={auction.price_by_now.isActive}
                                onChange={handleCheckboxChange('price_by_now')}
                            />
                            <Typography variant="subtitle1">
                                <strong>
                                    {t('buyNow')}
                                </strong>
                            </Typography>
                        </Grid>
                        {auction.price_by_now.isActive && (
                            <Grid item xs={3}>
                                <TextField
                                    variant='outlined'
                                    name='price_by_now'
                                    value={auction.price_by_now.value}
                                    onChange={handleInput}
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Grid container alignItems='center' item xs={12}>
                        <Checkbox
                            color='primary'
                            checked={auction.auto_renewal}
                            onChange={handleCheckboxChange('auto_renewal')}
                        />
                        <Typography variant="subtitle1">
                            <strong>
                                {t('autoRenewal')}
                            </strong>
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' item xs={12}>
                        <Checkbox
                            color='primary'
                            checked={auction.offer_the_price}
                            onChange={handleCheckboxChange('offer_the_price')}
                        />
                        <Typography variant="subtitle1">
                            <strong>
                                {t('offerPrice')}
                            </strong>
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </div>
    )
};