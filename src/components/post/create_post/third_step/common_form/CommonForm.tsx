import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import Link from "next/link";
import {useTranslation} from 'next-i18next';
import {Box, Grid, Typography} from '@material-ui/core';
import {AuctionParams} from './auction_params/AuctionParams';
import {SiteServices} from './site_services/SiteServices';
import {Contacts} from './contacts/Contacts';
import {AvailableDays} from './available_days/AvailableDays';
import {numberRegEx, timeRegEx} from '@src/common_data/reg_exs';
import {useFormik} from 'formik';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {numericFields} from '@src/common_data/fields_keys';
import {auctionParamsSchema, defaultParamsSchema} from '@root/validation_schemas/createPostSchemas';
import {clearWhiteSpaces, getErrorMsg, numberPrettier, phonePrepare} from '@src/helpers';
import {PostType} from '@root/interfaces/Post';
import {WEEK_DAYS} from '@src/common_data/common';
import {StateIcon} from '@src/components/elements/icons';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CommonFormPreview} from '@src/components/post/create_post/third_step/common_form/CommonFormPreview';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {Location} from '@src/components/elements/location/Location';
import {UserCtx} from "@src/context/UserCtx";
import {useRouter} from "next/router";
import {TEXT_LIMIT} from "@src/constants";
import {useStyles} from './useStyles';

type DefaultParamsPropsType = {
    postType: PostType,
    currentFormIndex: number,
    isPreview: boolean,
    categoryName: string,
    setIsPreview: Dispatch<SetStateAction<boolean>>,
    handleSubmit: (v) => void
};

export const CommonForm: FC<DefaultParamsPropsType> = (props) => {
    const {
        isPreview,
        setIsPreview,
        currentFormIndex,
        postType,
        handleSubmit,
        categoryName
    } = props;

    const {t} = useTranslation('post');

    const {phone: userPhone} = useContext(UserCtx).user;

    const {
        region,
        city,
        safe_deal,
        delivery,
        exchange,
        description,
        phone,
        price,
        currency,
        available_days,
        available_start_time,
        available_end_time
    } = useRouter().query;

    const formIndex = 1;
    const isAdvanceAuction = postType.name === 'exauc';
    const isAuction = postType.name === 'auc' || isAdvanceAuction;
    const priceLabel = categoryName === 'job' ? 'salary' : 'price';

    const locationFromUrl = region
        ? {
            region: JSON.parse(region as string),
            city: city ? JSON.parse(city as string) : null
        }
        : null;

    const initForm = {
        safe_deal: !!safe_deal,
        delivery: !!delivery,
        exchange: !!exchange,
        location: locationFromUrl,
        description: description ? JSON.parse(description as string) : '',
        phone: phone ?? '',
        price: price ?? '',
        currency: currency ? JSON.parse(currency as string) : postType.currency[0],
        avalTime: {
            available_start_time: available_start_time ? JSON.parse(available_start_time as string) : '09:00',
            available_end_time: available_end_time ? JSON.parse(available_end_time as string) : '18:00',
            available_days: available_days ? JSON.parse(available_days as string) : [...WEEK_DAYS]
        },
        auction: {
            duration: null,
            reserve_price: '',
            offer_the_price: false,
            auto_renewal: false,
            display_phone: true,
            price_buy_now: {
                isActive: false,
                value: ''
            }
        }
    };

    const [avalTimeActive, setAvalTimeActive] = useState(!!available_start_time);

    const onSubmit = (values) => {
        const createData = {...values};
        createData.price = Number.parseInt(clearWhiteSpaces(createData.price));

        const {
            auction,
            currency,
            location,
            phone,
            safe_deal,
            delivery,
            exchange,
            avalTime,
            ...otherData
        } = createData;

        if (isAuction) {
            const {
                duration,
                price_buy_now,
                reserve_price,
                auto_renewal,
                offer_the_price,
                ...othersAuctionData
            } = auction;

            othersAuctionData.duration_id = duration.id;
            othersAuctionData.offer_the_price = offer_the_price;

            if (isAdvanceAuction) {
                if (price_buy_now.isActive) {
                    othersAuctionData.price_buy_now = Number.parseInt(clearWhiteSpaces(price_buy_now.value));
                }
                if (reserve_price) {
                    othersAuctionData.reserve_price = Number.parseInt(clearWhiteSpaces(reserve_price));
                }
                othersAuctionData.auto_renewal = auto_renewal;
            }

            otherData.auction = othersAuctionData;
        }

        const {region, city} = location;

        const address: {
            region_id: number,
            city_id?: number
        } = {region_id: region.id};

        if (city) {
            address.city_id = city.id;
        }

        if (avalTimeActive) {
            const {available_start_time, available_end_time, available_days} = avalTime;
            otherData.available_start_time = available_start_time;
            otherData.available_end_time = available_end_time;
            otherData.available_days = available_days.map(({id}) => ({id}));
        }

        if (!!phone && !RegExp(/_/g).test(phone)) otherData.phone = phonePrepare(phone);
        if (safe_deal) otherData.safe_deal = safe_deal;
        if (delivery) otherData.delivery = delivery;
        if (exchange) otherData.exchange = exchange;

        const commonParams = {
            ...address,
            ...otherData,
            currency_id: currency.id
        };

        handleSubmit({commonParams});
        setIsPreview(true);
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: isAuction ? auctionParamsSchema : defaultParamsSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const {auction, location, avalTime} = values;

    const handleSelect = (key, value) => {
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
            if (RegExp(numberRegEx).test(value)) {
                const number = numberPrettier(value);
                if (name === 'reserve_price') {
                    setValues({
                        ...values,
                        auction: {...auction, [name]: number}
                    });
                } else if (name === 'price_buy_now') {
                    setValues({
                        ...values,
                        auction: {
                            ...auction,
                            [name]: {
                                ...auction.price_buy_now,
                                value: number
                            }
                        }
                    });
                } else {
                    setValues({...values, [name]: number});
                }
            }
        } else {
            if (name !== 'description' || TEXT_LIMIT >= value.length) {
                setValues({...values, [name]: value});
            }
        }
    };

    const handleLocation = (location) => {
        setValues({...values, location});
    };

    const handleCheckboxChange = name => ({target}) => {
        const auctionOptionsList = [
            'price_buy_now',
            'offer_the_price',
            'auto_renewal',
            'display_phone'
        ];
        if (auctionOptionsList.some(option => option === name)) {
            if (name === 'price_buy_now') {
                auction.price_buy_now.isActive = target.checked;
                if (!target.checked) {
                    auction.price_buy_now.value = '';
                }
            } else {
                auction[name] = target.checked;
            }
        } else {
            values[name] = target.checked;
        }
        setValues({...values});
    };

    const switchActive = (_, value) => {
        setAvalTimeActive(value);
    };

    const handleAvalDays = day => () => {
        const isExstDay = avalTime.available_days.some(({id}) => id === day.id);
        if (isExstDay) {
            avalTime.available_days.map(({id}, index) => {
                if (id === day.id) {
                    avalTime.available_days.splice(index, 1);
                }
            });
        } else {
            avalTime.available_days.push(day);
        }
        setValues({...values});
    };

    const handleTime = ({target: {value, name}}) => {
        if (RegExp(timeRegEx).test(value)) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            setValues({...values, avalTime: {...avalTime, [name]: value}});
        }
    };

    const classes = useStyles();
    return (
        <CustomFormikProvider formik={formik}>
            <CustomAccordion
                submitTxt='next'
                title={t('priceDescContacts')}
                icon={<StateIcon/>}
                isPreview={isPreview}
                open={currentFormIndex === formIndex}
                isEditable={currentFormIndex < formIndex}
            >
                <Grid item container spacing={2} className={classes.root}>
                    {isPreview
                        ? <CommonFormPreview
                            values={values}
                            userPhone={userPhone}
                            location={location}
                            isAuction={isAuction}
                            priceLabel={priceLabel}
                            avalTimeActive={avalTimeActive}
                            isAdvanceAuction={isAdvanceAuction}
                        />
                        : <>
                            {isAuction
                                ? <AuctionParams
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
                                : <Grid item container spacing={1}>
                                    <Grid item xs={8} sm={5} md={3}>
                                        <FormikField
                                            t={t}
                                            name='price'
                                            labelText={priceLabel}
                                            value={values.price}
                                            onChange={handleInput}
                                            errorMsg={getErrorMsg(errors.price, touched.price, t)}
                                        />
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <DropDownSelect
                                            name='currency'
                                            values={values}
                                            onBlur={handleBlur}
                                            items={postType.currency}
                                            handleSelect={handleSelect}
                                        />
                                    </Grid>
                                </Grid>}
                            <SiteServices
                                t={t}
                                isCommonForm
                                values={values}
                                isAuction={isAuction}
                                categoryName={categoryName}
                                handleCheckbox={handleCheckboxChange}
                            />
                            <Grid item container direction='column' xs={12}>
                                <Box display='flex' mb={1}>
                                    <Location
                                        handleSelectLocation={handleLocation}
                                        userLocation={location}
                                    />
                                    <span className='error-text'>*</span>
                                </Box>
                                {errors.location && touched.location && (
                                    <Typography variant='subtitle2' component='p' className='error-text'>
                                        {t(`errors:${errors.location}`)}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <FormikTextarea
                                    rows={15}
                                    name='description'
                                    value={values.description}
                                    onBlur={handleBlur}
                                    limit={TEXT_LIMIT}
                                    onChange={handleInput}
                                    labelTxt={t('filters:description')}
                                    errorMsg={getErrorMsg(errors.description, touched.description, t)}
                                />
                            </Grid>
                            <Grid item container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Contacts
                                        t={t}
                                        values={values}
                                        isAuction={isAuction}
                                        userPhone={userPhone}
                                        handleInput={handleInput}
                                        handleCheckboxChange={handleCheckboxChange}
                                    />
                                </Grid>
                                {!isAuction && (
                                    <Grid item container xs={12} sm={6} justify='center'>
                                        <Grid item xs={12} sm={12} lg={8} className='avail-days-wrapper'>
                                            <AvailableDays
                                                t={t}
                                                time={values.avalTime}
                                                handleBlur={handleBlur}
                                                handleTime={handleTime}
                                                switchActive={switchActive}
                                                handleAvalDays={handleAvalDays}
                                                isActive={avalTimeActive}
                                            />
                                            <Link href='/cabinet/settings'>
                                                <a className='settings'>
                                                    <Typography variant='subtitle1' component='p'>
                                                        {t('configs')}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                )}
                            </Grid>
                        </>}
                </Grid>
            </CustomAccordion>
        </CustomFormikProvider>
    );
};