import React, {FC} from "react";
import {WithT} from "i18next";
import {Grid, TextField, Typography} from "@material-ui/core";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {AuctionParams} from "./auction_params/AuctionParams";
import {PaymentDelivery} from "./payment_delivery/PaymentDelivery";
import {Location} from "./location/Location";
import {Description} from "./description/Description";
import {Contacts} from "./contacts/Contacts";
import {AvailableDays} from "./available_days/AvailableDays";
import {useStyles} from './useStyles';


type PriceDescContactsProps = {
    isPreview: boolean;
    isAuction: boolean;
    errors,
    touched,
    postType,
    category,
    defaultParams,
    auction,
    locations,
    avalTime,
    handleTime,
    handleInput,
    handleBlur,
    handleMenuItem,
    handleCheckboxChange,
    handleLocation,
    handleSwitch,
    handleAvalDays
};

export const PriceDescContacts: FC<PriceDescContactsProps & WithT> = (props) => {
    const {
        t,
        isPreview,
        isAuction,
        errors,
        touched,
        postType,
        category,
        defaultParams,
        auction,
        locations,
        avalTime,
        handleTime,
        handleInput,
        handleBlur,
        handleMenuItem,
        handleCheckboxChange,
        handleLocation,
        handleSwitch,
        handleAvalDays
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className='title' variant="subtitle1">
                <strong>
                    {t('postTitle')}:
                    {!isPreview && <span className='error-text'>*</span>}
                </strong>
                {errors.title
                && touched.title
                && <span className='error-text'> {errors.title}</span>}
            </Typography>
            {isPreview
                ? <Typography>{defaultParams.title}</Typography>
                : <CustomFormikField
                    className={
                        errors.title && touched.title
                            ? 'error-border'
                            : ''
                    }
                    name='title'
                    onChange={handleInput}
                    placeholder={t('exampleTitle')}
                    value={defaultParams.title}
                />}
            {category.mark !== 'free'
            && <>
                {isAuction
                    ? <div>
                        <AuctionParams
                            auction={auction}
                            errors={errors}
                            touched={touched}
                            postType={postType}
                            isPreview={isPreview}
                            handleBlur={handleBlur}
                            handleInput={handleInput}
                            defaultParams={defaultParams}
                            handleMenuItem={handleMenuItem}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </div>
                    : <div>
                        <Typography variant="subtitle1">
                            <strong>
                                {t('price')}
                                {!isPreview && <span className='error-text'>*</span>}
                            </strong>
                            {errors.price
                            && touched.price
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
                                        name='price'
                                        variant='outlined'
                                        value={defaultParams.price ?? ''}
                                        className={errors.price && touched.price
                                            ? 'error-border'
                                            : ''}
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <CustomMenu
                                    name='currency'
                                    valueName={
                                        defaultParams.currency
                                            ? defaultParams.currency.name
                                            : t('noSelect')}
                                    items={postType.currency}
                                    onClick={handleMenuItem('currency')}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                        }
                    </div>
                }
            </>}
            <div>
                <PaymentDelivery
                    isPreview={isPreview}
                    handleCheckboxChange={handleCheckboxChange}
                    defaultParams={defaultParams}
                />
            </div>
            <div className='location-wrapper'>
                <Location
                    isPreview={isPreview}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleLocation={handleLocation}
                    locations={locations}
                />
            </div>
            <div>
                <Description
                    errors={errors}
                    touched={touched}
                    isPreview={isPreview}
                    handleInput={handleInput}
                    handleBlur={handleBlur}
                    defaultParams={defaultParams}
                />
            </div>
            <Grid
                item
                container
                justify='space-between'
                spacing={1}
            >
                <Grid item xs={6}>
                    <Contacts
                        isPreview={isPreview}
                        isAuction={isAuction}
                        auction={auction}
                        handleCheckboxChange={handleCheckboxChange}
                        defaultParams={defaultParams}
                        handleInput={handleInput}
                    />
                </Grid>
                {!isAuction
                && <Grid item xs={6}>
                    {(isPreview && avalTime.isActive || !isPreview)
                    && <AvailableDays
                        isPreview={isPreview}
                        avalTime={avalTime}
                        handleTime={handleTime}
                        handleBlur={handleBlur}
                        handleSwitch={handleSwitch}
                        handleAvalDays={handleAvalDays}
                    />}
                </Grid>}
            </Grid>
        </div>
    )
}