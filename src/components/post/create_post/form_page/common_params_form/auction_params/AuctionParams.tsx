import React, {FC} from "react";
import {WithT} from "i18next";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {CustomSelect} from "@root/src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
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

    console.log(errors)
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid container className='price-wrapper'>
                <Grid item container spacing={2} xs={12}>
                    <Grid item container xs={4}>
                        <CustomSelect
                            t={t}
                            name='duration'
                            values={auction}
                            onBlur={handleBlur}
                            items={postType.expired}
                            handleSelect={handleSelect}
                            errorMsg={
                                errors.auction && touched.auction
                                    ? t(`errors:${errors.auction}`)
                                    : ''
                            }
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CustomFormikField
                            name='price'
                            labelText={t('startPrice')}
                            value={values.price}
                            onChange={handleInput}
                            errorMsg={
                                errors.price && touched.price
                                    ? t(`errors:${errors.price}`)
                                    : ''
                            }
                        />
                    </Grid>
                    {isAdvanceAuction && (
                        <Grid item xs={2}>
                            <CustomFormikField
                                name='reserve_price'
                                labelText={t('reservePrice')}
                                value={values.reserve_price}
                                onChange={handleInput}
                            />
                        </Grid>
                    )}
                </Grid>
                {isAdvanceAuction && (
                    <>
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
                    </>
                )}
            </Grid>
        </Grid>
    )
};