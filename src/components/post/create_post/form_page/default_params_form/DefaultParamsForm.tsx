/* eslint-disable prefer-const */
import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {useSelector} from "react-redux";
import {Grid, TextField, Typography} from "@material-ui/core";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {AuctionParams} from "./auction_params/AuctionParams";
import {PaymentDelivery} from "./payment_delivery/PaymentDelivery";
import {Description} from "./description/Description";
import {Contacts} from "./contacts/Contacts";
import {AvailableDays} from "./available_days/AvailableDays";
import {numberRegEx, timeRegEx} from "@src/common_data/reg_ex";
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
    openKey: boolean,
    mark: string,
    asPath: string,
    post,
    setPost,
    isPreview: boolean,
    isCategoryFree: boolean,
    handleFormOpen: (k, e) => void
} & WithT;

export const DefaultParamsForm: FC<DefaultParamsPropsType> = (props) => {
    const {
        t,
        isPreview,
        openKey,
        mark,
        asPath,
        postType,
        post,
        setPost,
        handleFormOpen,
        isCategoryFree
    } = props;

    const formKey = 'defParams';

    const isAuction = postType.name === 'auc' || postType.name === 'exauc';
    const isAdvanceAuction = postType.name === 'exauc';

    const {locations} = useSelector((store: RootState) => store);

    const initForm = {
        title: '',
        safe_deal: false,
        delivery: false,
        exchange: false,
        location: null,
        description: '',
        phone: '',
        price: mark === 'free' ? '0' : '',
        currency: postType.currency[0],
        avalTime: {
            isActive: false,
            time: {
                start_time: '09:00',
                end_time: '18:00',
                available_days: [...WEEK_DAYS],
            }
        },
        auction: {
            duration: null,
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
        values.price = clearWhiteSpaces(values.price);

        let {
            auction,
            currency,
            location,
            avalTime: {time},
            ...otherVals
        } = values;

        if (isAuction) {
            const {duration, ...others} = auction;

            others.duration_id = duration.id;
            others.price_by_now = clearWhiteSpaces(auction.price_by_now.value);
            others.reserve_price = clearWhiteSpaces(auction.reserve_price);

            otherVals.auction = others;
        }

        const {region, city, district} = location;

        location = {
            region_id: region.id,
            city_id: city.id,
        };

        if (district) {
            location = {
                ...location,
                district_id: district.id
            };
        }

        let {available_days, ...startEndTimes} = time;

        available_days = available_days.map(({id}) => ({id}));

        setPost({
            ...post,
            ...location,
            ...otherVals,
            ...startEndTimes,
            available_days,
            currency_id: currency.id
        });

        Router.push(asPath.replace(/preview=0/, 'preview=1'));
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: defaultParamsSchema,
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
            'display_phone',
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
        const isExstDay = avalTime.time.available_days.some(({id}) => id === day.id);

        if (isExstDay) {
            avalTime.time.available_days.map(({id}, index) => {
                if (id === day.id) {
                    avalTime.time.available_days.splice(index, 1);
                }
            });
        } else {
            avalTime.time.available_days.push(day);
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

    useEffect(() => {
        if (isAuction) {
            auction.duration = {
                id: null,
                hours: null
            };
            setValues({...values});
        }
    }, []);

    // console.log('vals', values)
    // console.log('errors', errors)
    // console.log('touched', touched)
    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    isPreview={isPreview}
                    formKey={formKey}
                    handleOpen={handleFormOpen}
                    open={openKey || isPreview}
                    title={t('titleDescContacts')}
                    nextButtonTxt={t('next')}
                    icon={<StateIcon/>}
                >
                    <div className={classes.root}>
                        {
                            isPreview
                                ? <PreviewDefParams
                                    t={t}
                                    values={values}
                                    isAuction={isAuction}
                                    isAdvanceAuction={isAdvanceAuction}
                                    locationText={locationText}
                                    isCategoryFree={isCategoryFree}
                                />
                                : <div>
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {t('postTitle')}:
                                            {<span className='error-text'>*&nbsp;</span>}
                                        </strong>
                                        {
                                            errors.title
                                            && touched.title
                                            && <span className='error-text'>{t(errors.title as string)}</span>
                                        }
                                    </Typography>
                                    <CustomFormikField
                                        name='title'
                                        value={values.title}
                                        onChange={handleInput}
                                        placeholder={t('exampleTitle')}
                                        className={errors.title && touched.title ? 'error-border' : ''}
                                    />
                                    {
                                        mark !== 'free' && (
                                            <>
                                                {
                                                    isAuction
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
                                                        : !isCategoryFree
                                                        && (
                                                            <div>
                                                                <Typography variant="subtitle1">
                                                                    <strong>
                                                                        {t('price')}
                                                                        <span className='error-text'>*&nbsp;</span>
                                                                    </strong>
                                                                    {
                                                                        errors.price
                                                                        && touched.price
                                                                        && <span className='error-text'>
                                                                            {t(errors.price as string)}
                                                                        </span>
                                                                    }
                                                                </Typography>
                                                                <Grid container>
                                                                    <Grid item xs={3}>
                                                                        <TextField
                                                                            fullWidth
                                                                            name='price'
                                                                            variant='outlined'
                                                                            onBlur={handleBlur}
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
                                                            </div>
                                                        )
                                                }
                                            </>
                                        )
                                    }
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
                                </div>
                        }
                    </div>
                </CustomAccordion>
            </form>
        </FormikProvider>
    )
}