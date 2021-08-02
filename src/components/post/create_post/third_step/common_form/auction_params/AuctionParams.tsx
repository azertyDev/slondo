import {FC} from 'react';
import {getErrorMsg} from '@src/helpers';
import {useTranslation} from "next-i18next";
import {Checkbox, Grid, Typography} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
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
};

export const AuctionParams: FC<AuctionParamsPropsType> = (props) => {
    const {
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

    const {t} = useTranslation('filters');
    const {auction} = values;

    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid item container className='price-wrapper'>
                <Grid item container spacing={2} xs={12}>
                    <Grid item container xs={4}>
                        <DropDownSelect
                            name='duration'
                            values={auction}
                            onBlur={handleBlur}
                            items={postType.expired}
                            handleSelect={handleSelect}
                            labelTxt={t('auction:duration')}
                            errorMsg={getErrorMsg(errors.auction, touched.auction, t)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormikField
                            t={t}
                            name='price'
                            labelText='start_price'
                            value={values.price}
                            onChange={handleInput}
                            errorMsg={getErrorMsg(errors.price, touched.price, t)}
                        />
                    </Grid>
                    {isAdvanceAuction && (
                        <Grid item xs={3}>
                            <FormikField
                                t={t}
                                name='reserve_price'
                                labelText='reserve_price'
                                onChange={handleInput}
                                value={auction.reserve_price}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid container alignItems='center' item xs={12}>
                    <Checkbox
                        color='primary'
                        checked={auction.offer_the_price}
                        onChange={handleCheckboxChange('offer_the_price')}
                    />
                    <Typography variant="subtitle1">
                        <strong>
                            {t('filters:offer_price')}
                        </strong>
                    </Typography>
                </Grid>
                {isAdvanceAuction && (
                    <>
                        <Grid container item xs={12} direction='column' className='buy-now-wrapper'>
                            <Grid container item xs={4} alignItems='center'>
                                <Checkbox
                                    color='primary'
                                    checked={auction.price_buy_now.isActive}
                                    onChange={handleCheckboxChange('price_buy_now')}
                                />
                                <Typography variant="subtitle1">
                                    <strong>
                                        {t('filters:buy_now')}
                                    </strong>
                                </Typography>
                            </Grid>
                            {auction.price_buy_now.isActive && (
                                <Grid item xs={3}>
                                    <FormikField
                                        t={t}
                                        name='price_buy_now'
                                        onChange={handleInput}
                                        value={auction.price_buy_now.value}
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
                                    {t('filters:auto_renewal')}
                                </strong>
                            </Typography>
                        </Grid>
                    </>
                )}
            </Grid>
        </Grid>
    );
};