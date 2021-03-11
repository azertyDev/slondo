/* eslint-disable prefer-const */
import React, {FC} from "react";
import {WithT} from "i18next";
import {useSelector} from "react-redux";
import {Grid, TextField, Typography} from "@material-ui/core";
import {AuctionParams} from "./auction_params/AuctionParams";
import {PaymentDelivery} from "./payment_delivery/PaymentDelivery";
import {Description} from "./description/Description";
import {Contacts} from "./contacts/Contacts";
import {AvailableDays} from "./available_days/AvailableDays";
import {numberRegEx, timeRegEx} from "@src/common_data/reg_exs";
import {FormikProvider, useFormik} from "formik";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {numericFields} from "@src/common_data/form_fields";
import {defaultParamsSchema} from "@root/validation_schemas/createPostSchemas";
import {clearWhiteSpaces, numberPrettier} from "@src/helpers";
import {RootState} from "@src/redux/rootReducer";
import {PostType} from "@root/interfaces/Post";
import {WEEK_DAYS} from "@src/common_data/common";
import {StateIcon} from '@src/components/elements/icons';
import {Router} from "@root/i18n";
import {useStyles} from './useStyles';
import {LocationAutocomplete} from "@src/components/post/create_post/form_page/default_params_form/location/LocationAutocomplete";
import {CustomSelect} from "@src/components/elements/customSelect/CustomSelect";
import {PreviewDefParams} from "@src/components/post/create_post/form_page/default_params_form/PreviewDefParams";


type DefaultParamsPropsType = {
    postType: PostType,
    currentFormIndex: number,
    asPath: string,
    post,
    setPost,
    isPreview: boolean,
    handleFormOpen: (i) => () => void
} & WithT;

export const DefaultParamsForm: FC<DefaultParamsPropsType> = (props) => {
    const {
        t,
        isPreview,
        currentFormIndex,
        asPath,
        postType,
        post,
        setPost,
        handleFormOpen
    } = props;

    const formIndex = 1;
    const isAdvanceAuction = postType.name === 'exauc';
    const isAuction = postType.name === 'auc' || isAdvanceAuction;

    const {locations} = useSelector((store: RootState) => store);

    const initForm = {
        safe_deal: false,
        delivery: false,
        exchange: false,
        location: null,
        description: '',
        phone: '',
        price: '',
        currency: postType.currency[0],
        avalTime: {
            isActive: false,
            time: {
                start_time: '09:00',
                end_time: '18:00',
                week_days: [...WEEK_DAYS]
            }
        },
        auction: {
            duration: postType.expired[0],
            reserve_price: '',
            offer_the_price: false,
            auto_renewal: false,
            display_phone: false,
            price_by_now: {
                isActive: false,
                value: ''
            }
        }
    };

    const onSubmit = (values) => {
        const createData = {...values};
        createData.price = clearWhiteSpaces(createData.price);

        const {
            auction,
            currency,
            location,
            avalTime: {isActive, time},
            ...otherData
        } = createData;

        if (isAuction) {
            const {
                duration,
                price_by_now,
                reserve_price,
                auto_renewal,
                offer_the_price,
                ...otherAuctionData
            } = auction;

            otherAuctionData.duration_id = duration.id;

            if (isAdvanceAuction) {
                otherAuctionData.price_by_now = clearWhiteSpaces(price_by_now.value);
                otherAuctionData.reserve_price = clearWhiteSpaces(reserve_price);
                otherAuctionData.auto_renewal = auto_renewal;
                otherAuctionData.offer_the_price = offer_the_price;
            }

            otherData.auction = otherAuctionData;
        }

        const {region, city, district} = location;

        const address: {
            region_id: number,
            city_id: number,
            district_id?: number
        } = {
            region_id: region.id,
            city_id: city.id
        };

        if (district) {
            address.district_id = district.id;
        }

        if (isActive) {
            let {week_days, start_time, end_time} = time;
            otherData.start_time = start_time;
            otherData.end_time = end_time;
            otherData.week_days = week_days.map(({id}) => ({id}));
        }

        setPost({
            ...post,
            ...address,
            ...otherData,
            currency_id: currency.id
        });

        Router.push(asPath.replace(/preview=0/, 'preview=1'));
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: defaultParamsSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleSubmit,
        handleBlur
    } = formik;

    const {auction, location, avalTime} = values;

    const locationText = location
        ? `${location.region.name}${location.city ? `, ${location.city.name}` : ''}${location.district ? `, ${location.district.name}` : ''}`
        : '';

    const handleSelect = (value, key) => {
        if (key === 'duration') {
            auction.duration = value;
        } else {
            values[key] = value;
        }
        setValues({...values});
    };

    const handleInput = ({target: {name, value}}) => {
        const isNumericField = numericFields.some((n => n === name));

        if (isNumericField) {
            if (numberRegEx.test(value)) {
                value = numberPrettier(value);
                if (name === 'reserve_price') {
                    auction[name] = value;
                } else if (name === 'price_by_now') {
                    auction[name].value = value;
                } else {
                    values[name] = value;
                }
            }
        } else {
            values[name] = value;
        }

        setValues({...values});
    };

    const handleLocation = (_, location) => {
        values.location = location;
        setValues({...values});
    };

    const handleCheckboxChange = name => ({target}) => {
        const auctionOptionsList = [
            'price_by_now',
            'price_by_now',
            'offer_the_price',
            'auto_renewal',
            'display_phone'
        ];

        if (auctionOptionsList.some(option => option === name)) {
            if (name === 'price_by_now') {
                auction.price_by_now.isActive = target.checked;
            } else {
                auction[name] = target.checked;
            }
        } else {
            values[name] = target.checked;
        }

        setValues({...values});
    };

    const handleSwitch = (_, value) => {
        avalTime.isActive = value;
        setValues({...values});
    };

    const handleAvalDays = day => () => {
        const isExstDay = avalTime.time.week_days.some(({id}) => id === day.id);

        if (isExstDay) {
            avalTime.time.week_days.map(({id}, index) => {
                if (id === day.id) {
                    avalTime.time.week_days.splice(index, 1);
                }
            });
        } else {
            avalTime.time.week_days.push(day);
        }

        setValues({...values});
    };

    const handleTime = ({target: {value, name}}) => {
        if (timeRegEx.test(value)) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            avalTime.time = {...avalTime.time, [name]: value};
            setValues({...values});
        }
    };

    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    icon={<StateIcon/>}
                    isPreview={isPreview}
                    open={currentFormIndex === formIndex}
                    isEditable={currentFormIndex < formIndex}
                    handleEdit={handleFormOpen(formIndex)}
                    title={t('priceDescContacts')}
                    nextButtonTxt={t('next')}
                >
                    <div className={classes.root}>
                        {isPreview
                            ? <PreviewDefParams
                                t={t}
                                values={values}
                                isAuction={isAuction}
                                isAdvanceAuction={isAdvanceAuction}
                                locationText={locationText}
                            />
                            : <div>
                                {isAuction
                                    ? <div>
                                        <AuctionParams
                                            t={t}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            postType={postType}
                                            handleBlur={handleBlur}
                                            handleInput={handleInput}
                                            handleSelect={handleSelect}
                                            isAdvanceAuction={isAdvanceAuction}
                                            handleCheckboxChange={handleCheckboxChange}
                                        />
                                    </div>
                                    : <div className='price-wrapper'>
                                        <Typography variant="subtitle1">
                                            <strong>
                                                {t('price')}
                                                <span className='error-text'>*&nbsp;</span>
                                            </strong>
                                            {errors.price && touched.price && (
                                                <span className='error-text'>
                                                    {t(errors.price as string)}
                                                </span>
                                            )}
                                        </Typography>
                                        <div className='price-inputs'>
                                            <TextField
                                                fullWidth
                                                name='price'
                                                variant='outlined'
                                                onBlur={handleBlur}
                                                onChange={handleInput}
                                                value={values.price ?? ''}
                                                className={errors.price && touched.price ? 'error-border' : ''}
                                            />
                                            <div className='currency'>
                                                <CustomSelect
                                                    t={t}
                                                    name='currency'
                                                    values={values}
                                                    onBlur={handleBlur}
                                                    items={postType.currency}
                                                    handleSelect={handleSelect}
                                                />
                                            </div>
                                        </div>
                                    </div>}
                                <div>
                                    <PaymentDelivery
                                        t={t}
                                        values={values}
                                        handleCheckboxChange={handleCheckboxChange}
                                    />
                                </div>
                                <div className='location-wrapper'>
                                    <LocationAutocomplete
                                        name='location'
                                        locationError={errors.location}
                                        locationTouched={touched.location}
                                        value={values.location}
                                        locations={locations.data}
                                        onBlur={handleBlur}
                                        onChange={handleLocation}
                                    />
                                </div>
                                <div>
                                    <Description
                                        t={t}
                                        errors={errors}
                                        touched={touched}
                                        handleInput={handleInput}
                                        handleBlur={handleBlur}
                                        description={values.description}
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
                                            t={t}
                                            values={values}
                                            isAuction={isAuction}
                                            handleInput={handleInput}
                                            handleCheckboxChange={handleCheckboxChange}
                                        />
                                    </Grid>
                                    {!isAuction && (
                                        <Grid item xs={6}>
                                            <AvailableDays
                                                t={t}
                                                avalTime={values.avalTime}
                                                handleBlur={handleBlur}
                                                handleTime={handleTime}
                                                handleSwitch={handleSwitch}
                                                handleAvalDays={handleAvalDays}
                                            />
                                        </Grid>
                                    )}
                                </Grid>
                            </div>}
                    </div>
                </CustomAccordion>
            </form>
        </FormikProvider>
    )
}