import React, {FC} from "react";
import {WithT} from "i18next";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {CustomSelect} from "@root/src/components/elements/customSelect/CustomSelect";


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
        handleCheckboxChange,
    } = props;

    const {auction} = values;

    return (
        <div>
            <Grid item xs={12} lg={6}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('startPrice')}
                            {<span className='error-text'>*</span>}
                        </strong>
                        {
                            errors.price
                            && touched.price
                            && <span className='error-text'>&nbsp;{t(errors.price)}</span>
                        }
                    </Typography>
                    <Grid container>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                name='price'
                                variant='outlined'
                                onChange={handleInput}
                                value={values.price ?? ''}
                                className={errors.price && touched.price ? 'error-border' : ''}
                            />
                        </Grid>
                        <CustomSelect
                            t={t}
                            name='currency'
                            values={values}
                            onBlur={handleBlur}
                            items={postType.currency}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('auctionDuration')}:
                            {<span className='error-text'>*</span>}
                        </strong>
                        {
                            errors.auction
                            && touched.auction
                            && errors.auction.duration
                            && touched.auction.duration
                            && <span className='error-text'>&nbsp;{t(errors.auction.duration)}</span>
                        }
                    </Typography>
                    <CustomSelect
                        t={t}
                        name='duration'
                        values={auction}
                        onBlur={handleBlur}
                        items={postType.expired}
                        handleSelect={handleSelect}
                        error={
                            errors.auction && touched.auction
                            && errors.auction.duration && touched.auction.duration
                        }
                    />
                </Grid>
            </Grid>
            {
                isAdvanceAuction && (
                    <>
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
                            {
                                auction.price_by_now.isActive && (
                                    <Grid item container alignItems='center' xs={6}>
                                        <TextField
                                            variant='outlined'
                                            name='price_by_now'
                                            value={auction.price_by_now.value}
                                            onChange={handleInput}
                                        />
                                        <Typography>&nbsp;{t(`common:sum`)}</Typography>
                                    </Grid>
                                )
                            }
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
                    </>
                )
            }
        </div>
    )
};