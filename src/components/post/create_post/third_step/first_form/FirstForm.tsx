import {FC, useContext, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {unstable_batchedUpdates} from 'react-dom';
import {useTranslation} from 'next-i18next';
import {Box, Grid, Typography} from '@material-ui/core';
import {AuctionParams} from './auction_params/AuctionParams';
import {SiteServices} from './site_services/SiteServices';
import {Contacts} from './contacts/Contacts';
import {AvailableDays} from './available_days/AvailableDays';
import {handleTimeRegEx, numberRegEx} from '@src/common_data/reg_exs';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {numericFields} from '@src/common_data/fields_keys';
import {
    avalTimeSchema,
    auctionParamsSchema,
    defaultParamsSchema,
    safeDealPriceSchema
} from '@root/validation_schemas/postSchemas';
import {
    getErrorMsg,
    numberPrettier,
    phonePrepare,
    timeFormat
} from '@src/helpers';
import {PostType} from '@root/interfaces/Post';
import {WEEK_DAYS} from '@src/common_data/common';
import {StateIcon} from '@src/components/elements/icons';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FirstFormPreview} from '@root/src/components/post/create_post/third_step/first_form/FirstFormPreview';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ServiceItem} from '@root/src/components/post/create_post/third_step/first_form/site_services/ServiceItem';
import {DESC_MIN, SAFE_DEAL_LIMIT, TEXT_LIMIT} from '@src/constants';
import {useLocation} from '@src/hooks/use_location/useLocation';
import {AuthCtx} from '@src/context';

type DefaultParamsPropsType = {
    isPreview: boolean;
    postType: PostType;
    currentFormIndex: number;
    handleSubmit: (v) => void;
};

export const FirstForm: FC<DefaultParamsPropsType> = props => {
    const {isPreview, postType, handleSubmit, currentFormIndex} = props;

    const query = useRouter().query;
    const {region, city = null} = query;
    const {user} = useContext(AuthCtx);
    const {t} = useTranslation('post');

    const initAvalTime = {
        available_start_time: query.available_start_time
            ? JSON.parse(query.available_start_time as string)
            : user?.available_start_time ?? '09:00',
        available_end_time: query.available_end_time
            ? JSON.parse(query.available_end_time as string)
            : user?.available_end_time ?? '18:00'
    };

    const location = region
        ? {
              region: JSON.parse(region as string),
              city: city ? JSON.parse(city as string) : null
          }
        : null;

    const formIndex = 1;
    const categoryName = query.main_ctgr as string;
    const isJobOrService = categoryName === 'service' || categoryName === 'job';
    const isAdvanceAuction = postType.name === 'exauc';
    const isAuction = postType.name === 'auc' || isAdvanceAuction;
    const priceLabel = categoryName === 'job' ? 'salary' : 'price';

    const {
        location: userLoc,
        locElement,
        locationModal
    } = useLocation({handleSelectLocation});

    const initForm = {
        safe_deal: !!query.safe_deal,
        delivery: !!query.delivery,
        exchange: !!query.exchange,
        auto_renewal: !!query.auto_renewal,
        location,
        description: query.description
            ? JSON.parse(query.description as string)
            : '',
        phone: query.phone
            ? JSON.parse(query.phone as string)
            : '+998(__) ___ __ __',
        price: query.price ? JSON.parse(query.price as string).toString() : '',
        currency: query.currency
            ? JSON.parse(query.currency as string)
            : postType.currency[0],
        available_days: query.available_days
            ? JSON.parse(query.available_days as string)
            : [...WEEK_DAYS],
        auction: {
            duration: null,
            reserve_price: '',
            offer_the_price: false,
            display_phone: true,
            price_buy_now: {
                isActive: false,
                value: ''
            }
        },
        ...initAvalTime
    };

    const [free, setFree] = useState(false);
    const [isSafeDeal, setIsSafeDeal] = useState(false);
    const [avalTimeActive, setAvalTimeActive] = useState(
        !!query.available_start_time
    );

    const onSubmit = values => {
        const commonData = {...values};
        const {
            auction,
            currency,
            location,
            phone,
            safe_deal,
            delivery,
            exchange,
            auto_renewal,
            available_days,
            available_end_time,
            available_start_time,
            description,
            ...otherData
        } = commonData;

        const preparedPhone = phonePrepare(phone);

        if (isAuction) {
            const {
                duration,
                price_buy_now,
                reserve_price,
                offer_the_price,
                ...other
            } = auction;

            other.duration_id = duration.id;

            if (offer_the_price) other.offer_the_price = offer_the_price;

            if (isAdvanceAuction) {
                if (price_buy_now.isActive) {
                    other.price_buy_now = price_buy_now.value;
                }
                if (reserve_price) {
                    other.reserve_price = reserve_price;
                }
            }

            otherData.auction = other;
        }

        if (avalTimeActive) {
            otherData.available_start_time = timeFormat(available_start_time);
            otherData.available_end_time = timeFormat(available_end_time);
            otherData.available_days = available_days;
        }

        if (safe_deal) otherData.safe_deal = safe_deal;
        if (delivery) otherData.delivery = delivery;
        if (exchange) otherData.exchange = exchange;

        if (auto_renewal) {
            if (isAuction) {
                otherData.auction.auto_renewal = auto_renewal;
            } else {
                otherData.auto_renewal = auto_renewal;
            }
        }

        if (!RegExp(/_/g).test(phone) && user.phone !== preparedPhone)
            otherData.phone = preparedPhone;

        otherData.description = description.trim();

        const commonParams = {
            ...otherData,
            ...location,
            currency_id: currency.id
        };

        handleSubmit({commonParams});
    };

    const getSchema = () => {
        if (isAuction) return defaultParamsSchema.concat(auctionParamsSchema);
        if (isSafeDeal) return defaultParamsSchema.concat(safeDealPriceSchema);
        if (avalTimeActive) return defaultParamsSchema.concat(avalTimeSchema);
        return defaultParamsSchema;
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: getSchema()
    });

    const {values, setValues, errors, touched, setTouched, handleBlur} = formik;

    const {auction, available_days} = values;

    const handleFree = (_, v) => {
        unstable_batchedUpdates(() => {
            setFree(v);
            setValues({...values, price: '0'});
        });
    };

    const handleSelect = (key, value) => {
        if (key === 'duration') {
            auction.duration = value;
        } else {
            values[key] = value;
        }
        setValues({...values});
    };

    const handleInput = ({target: {name, value}}) => {
        const isNumericField = numericFields.some(n => n === name);
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

    const handleCheckboxChange =
        (name: string) =>
        ({target}) => {
            const {checked} = target;

            const auctionOptionsList = [
                'price_buy_now',
                'offer_the_price',
                'display_phone'
            ];

            if (name === 'safe_deal') {
                setIsSafeDeal(checked);
                if (checked) {
                    values.price = '';
                    values.currency = {id: 2, name: 'sum'};
                    unstable_batchedUpdates(() => {
                        setFree(false);
                        setTouched({price: true});
                    });
                } else {
                    setTouched({});
                }
            }

            if (auctionOptionsList.some(option => option === name)) {
                if (name === 'price_buy_now') {
                    auction.price_buy_now.isActive = checked;
                    if (!checked) {
                        auction.price_buy_now.value = '';
                    }
                } else {
                    auction[name] = checked;
                }
            } else {
                values[name] = checked;
            }

            setValues({...values});
        };

    const switchActive = (_, value) => {
        setAvalTimeActive(value);
    };

    const handleAvalDays = day => () => {
        const isExstDay = available_days.some(({id}) => id === day.id);
        if (isExstDay) {
            available_days.map(({id}, index) => {
                if (id === day.id) {
                    available_days.splice(index, 1);
                }
            });
        } else {
            available_days.push(day);
        }
        setValues({...values});
    };

    const handleTime = ({target: {value, name}}) => {
        if (RegExp(handleTimeRegEx).test(value)) {
            setValues({...values, [name]: value});
        }
    };

    function handleSelectLocation(location) {
        setValues({...values, location});
    }

    useEffect(() => {
        !region &&
            !!userLoc &&
            setValues({
                ...values,
                location: userLoc
            });
    }, [userLoc]);

    return (
        <CustomFormikProvider formik={formik}>
            <CustomAccordion
                submitTxt="next"
                icon={<StateIcon />}
                isPreview={isPreview}
                title={t('priceDescContacts')}
                open={currentFormIndex === formIndex}
                isEditable={currentFormIndex < formIndex}
            >
                <>
                    {isPreview ? (
                        <FirstFormPreview
                            values={values}
                            isAuction={isAuction}
                            priceLabel={priceLabel}
                            avalTimeActive={avalTimeActive}
                        />
                    ) : (
                        <>
                            {isAuction ? (
                                <AuctionParams
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
                            ) : (
                                <Grid item container spacing={1}>
                                    <Grid item xs={8} sm={5} md={4} lg={3}>
                                        <FormikField
                                            t={t}
                                            name="price"
                                            disabled={free}
                                            value={values.price}
                                            labelText={priceLabel}
                                            onChange={handleInput}
                                            errorMsg={getErrorMsg(
                                                errors.price,
                                                touched.price,
                                                t,
                                                SAFE_DEAL_LIMIT
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={4} sm={2} lg={1}>
                                        <DropDownSelect
                                            name="currency"
                                            values={values}
                                            onBlur={handleBlur}
                                            items={postType.currency}
                                            handleSelect={handleSelect}
                                            disabled={values.safe_deal || free}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <div style={{height: '22px'}} />
                                        <ServiceItem
                                            checked={free}
                                            handleCheckbox={handleFree}
                                            disabled={values.safe_deal}
                                            serviceText={t(
                                                isJobOrService
                                                    ? 'negotiated'
                                                    : 'for_free'
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                            <SiteServices
                                isCreateForm
                                values={values}
                                isAuction={isAuction}
                                categoryName={categoryName}
                                handleCheckbox={handleCheckboxChange}
                            />
                            <Grid item container direction="column" xs={12}>
                                <Box
                                    mb={1}
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Typography
                                        variant="subtitle1"
                                        component="p"
                                        gutterBottom
                                    >
                                        {t('filters:choiceLocation')}&nbsp;
                                        <span className="error-text">*</span>
                                    </Typography>
                                    {locElement}
                                    {locationModal}
                                </Box>
                                {errors.location && touched.location && (
                                    <Typography
                                        variant="subtitle2"
                                        component="p"
                                        className="error-text"
                                    >
                                        {t(`errors:${errors.location}`)}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <FormikTextarea
                                    rows={15}
                                    name="description"
                                    value={values.description}
                                    onBlur={handleBlur}
                                    limit={TEXT_LIMIT}
                                    onChange={handleInput}
                                    labelTxt={t('filters:description')}
                                    errorMsg={getErrorMsg(
                                        errors.description,
                                        touched.description,
                                        t,
                                        DESC_MIN
                                    )}
                                />
                            </Grid>
                            <Grid item container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Contacts
                                        t={t}
                                        values={values}
                                        isAuction={isAuction}
                                        handleInput={handleInput}
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                    />
                                </Grid>
                                {!isAuction && (
                                    <Grid
                                        item
                                        container
                                        xs={12}
                                        sm={6}
                                        justifyContent="center"
                                    >
                                        <Grid item xs={12} sm={12} lg={8}>
                                            <AvailableDays
                                                t={t}
                                                time={values}
                                                errors={errors}
                                                touched={touched}
                                                isActive={avalTimeActive}
                                                handleTime={handleTime}
                                                switchActive={switchActive}
                                                handleAvalDays={handleAvalDays}
                                            />
                                        </Grid>
                                    </Grid>
                                )}
                            </Grid>
                        </>
                    )}
                </>
            </CustomAccordion>
        </CustomFormikProvider>
    );
};
