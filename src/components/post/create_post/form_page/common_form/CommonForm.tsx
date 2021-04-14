import React, {Dispatch, FC, SetStateAction} from "react";
import {WithT} from "i18next";
import {useSelector} from "react-redux";
import {Grid} from "@material-ui/core";
import {AuctionParams} from "./auction_params/AuctionParams";
import {PaymentDelivery} from "./payment_delivery/PaymentDelivery";
import {Description} from "./description/Description";
import {Contacts} from "./contacts/Contacts";
import {AvailableDays} from "./available_days/AvailableDays";
import {numberRegEx, timeRegEx} from "@src/common_data/reg_exs";
import {FormikProvider, useFormik} from "formik";
import {CustomAccordion} from "@src/components/post/create_post/form_page/components/accordion/CustomAccordion";
import {numericFields} from "@src/common_data/form_fields";
import {auctionParamsSchema, defaultParamsSchema} from "@root/validation_schemas/createPostSchemas";
import {clearWhiteSpaces, getErrorMsg, numberPrettier} from "@src/helpers";
import {RootState} from "@src/redux/rootReducer";
import {PostType} from "@root/interfaces/Post";
import {WEEK_DAYS} from "@src/common_data/common";
import {StateIcon} from '@src/components/elements/icons';
import {LocationAutocomplete} from "@src/components/post/create_post/form_page/common_form/location/LocationAutocomplete";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {CommonFormPreview} from "@src/components/post/create_post/form_page/common_form/CommonFormPreview";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {useStyles} from './useStyles';


type DefaultParamsPropsType = {
    postType: PostType,
    currentFormIndex: number,
    asPath: string,
    post,
    setPost,
    isPreview: boolean,
    setIsPreview: Dispatch<SetStateAction<boolean>>
    ownerPhone: string
} & WithT;

export const CommonForm: FC<DefaultParamsPropsType> = (props) => {
    const {
        t,
        isPreview,
        setIsPreview,
        currentFormIndex,
        postType,
        post,
        setPost,
        ownerPhone
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
            duration: null,
            reserve_price: '',
            offer_the_price: false,
            auto_renewal: false,
            display_phone: false,
            price_buy_now: {
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
                price_buy_now,
                reserve_price,
                auto_renewal,
                offer_the_price,
                ...otherAuctionData
            } = auction;

            otherAuctionData.duration_id = duration.id;

            if (isAdvanceAuction) {
                if (price_buy_now.isActive) {
                    otherAuctionData.price_buy_now = clearWhiteSpaces(price_buy_now.value);
                }
                if (reserve_price) {
                    otherAuctionData.reserve_price = clearWhiteSpaces(reserve_price);
                }
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
            const {week_days, start_time, end_time} = time;
            otherData.start_time = start_time;
            otherData.end_time = end_time;
            otherData.week_days = week_days.map(({id}) => ({id}));
        }

        !otherData.safe_deal && delete otherData.safe_deal;
        !otherData.delivery && delete otherData.delivery;
        !otherData.exchange && delete otherData.exchange;

        setPost({
            ...post,
            ...address,
            ...otherData,
            currency_id: currency.id
        });

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
        handleSubmit,
        handleBlur
    } = formik;

    const {auction, location, avalTime} = values;

    const locationText = !location
                         ? ''
                         : `${location.region.name}${location.city ? `, ${location.city.name}` : ''}${location.district ? `, ${location.district.name}` : ''}`;

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
            if (numberRegEx.test(value)) {
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
            setValues({...values, [name]: value});
        }
    };

    const handleLocation = (_, location) => {
        values.location = location;
        setValues({...values});
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
                    nextButtonTxt={t('next')}
                    title={t('priceDescContacts')}
                >
                    <div className={classes.root}>
                        {isPreview
                         ? <CommonFormPreview
                             t={t}
                             values={values}
                             isAuction={isAuction}
                             ownerPhone={ownerPhone}
                             locationText={locationText}
                             isAdvanceAuction={isAdvanceAuction}
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
                              : <Grid container alignItems='center'>
                                  <Grid item xs={3}>
                                      <CustomFormikField
                                          name='price'
                                          labelText={t('price')}
                                          value={values.price}
                                          onChange={handleInput}
                                          style={{width: '270px'}}
                                          errorMsg={getErrorMsg(errors.price, touched.price, t)}
                                      />
                                  </Grid>
                                  <Grid item xs={1}>
                                      <CustomSelect
                                          t={t}
                                          name='currency'
                                          values={values}
                                          onBlur={handleBlur}
                                          items={postType.currency}
                                          handleSelect={handleSelect}
                                      />
                                  </Grid>
                              </Grid>}
                             <div>
                                 <PaymentDelivery
                                     t={t}
                                     values={values}
                                     isAuction={isAuction}
                                     handleCheckboxChange={handleCheckboxChange}
                                 />
                             </div>
                             <div className='location-wrapper'>
                                 <LocationAutocomplete
                                     name='location'
                                     errorMsg={
                                         getErrorMsg(errors.location, touched.location, t)
                                     }
                                     value={values.location}
                                     locations={locations.data}
                                     onBlur={handleBlur}
                                     onChange={handleLocation}
                                 />
                             </div>
                             <div>
                                 <Description
                                     label='description'
                                     handleInput={handleInput}
                                     handleBlur={handleBlur}
                                     description={values.description}
                                     errorMsg={getErrorMsg(errors.description, touched.description, t)}
                                 />
                             </div>
                             <Grid
                                 item
                                 container
                                 spacing={1}
                                 justify='space-between'
                             >
                                 <Grid item xs={6}>
                                     <Contacts
                                         t={t}
                                         values={values}
                                         isAuction={isAuction}
                                         ownerPhone={ownerPhone}
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
    );
};