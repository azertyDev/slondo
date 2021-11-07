import {FC} from 'react';
import {useTranslation} from "next-i18next";
import {Checkbox, Grid, Typography} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {getErrorMsg} from '@src/helpers';

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
    const {reserve_price, offer_the_price, price_buy_now} = auction;

    return (
        <Grid item container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={3}>
                <DropDownSelect
                    name='duration'
                    values={auction}
                    onBlur={handleBlur}
                    items={postType.expired}
                    handleSelect={handleSelect}
                    labelTxt={t('auction:auc_duration')}
                    errorMsg={getErrorMsg(errors.auction, touched.auction, t)}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
                <FormikField
                    t={t}
                    name='price'
                    value={values.price}
                    onChange={handleInput}
                    labelText='start_price'
                    placeholder={t('enter_price')}
                    errorMsg={getErrorMsg(errors.price, touched.price, t)}
                />
            </Grid>
            {isAdvanceAuction && (
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <FormikField
                        t={t}
                        name='reserve_price'
                        labelText='reserve_price'
                        onChange={handleInput}
                        value={reserve_price}
                        placeholder={t('enter_price')}
                    />
                </Grid>
            )}
            <Grid container alignItems='center' item xs={12}>
                <Checkbox
                    color='primary'
                    checked={offer_the_price}
                    onChange={handleCheckboxChange('offer_the_price')}
                />
                <Typography variant="subtitle1">
                    <strong>
                        {t('offer_price')}
                    </strong>
                </Typography>
            </Grid>
            {isAdvanceAuction && (
                <>
                    <Grid container item xs={12} sm={4} md={4} lg={3} alignItems='center'>
                        <Checkbox
                            color='primary'
                            checked={price_buy_now.isActive}
                            onChange={handleCheckboxChange('price_buy_now')}
                        />
                        <Typography variant="subtitle1">
                            <strong>
                                {t('buy_now')}
                            </strong>
                        </Typography>
                    </Grid>
                    {price_buy_now.isActive && (
                        <Grid item xs={12} sm={4} md={4} lg={3}>
                            <FormikField
                                t={t}
                                name='price_buy_now'
                                onChange={handleInput}
                                placeholder={t('enter_price')}
                                value={price_buy_now.value}
                                disabled={!price_buy_now.isActive}
                            />
                        </Grid>
                    )}
                </>
            )}
        </Grid>
    );
};