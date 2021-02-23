/* eslint-disable prefer-const */
import React, {FC} from "react";
import {WithT} from "i18next";
import {useSelector} from "react-redux";
import {Grid, TextField, Typography} from "@material-ui/core";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {AuctionParams} from "./auction_params/AuctionParams";
import {PaymentDelivery} from "./payment_delivery/PaymentDelivery";
import {Location} from "./location/Location";
import {Description} from "./description/Description";
import {Contacts} from "./contacts/Contacts";
import {AvailableDays} from "./available_days/AvailableDays";
import {numberRegEx, timeRegEx} from "@src/common_data/reg_ex";
import {FormikProvider, useFormik} from "formik";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {numericFields} from "@src/common_data/form_fields";
import {numberPrettier} from "@src/helpers";
import {RootState} from "@src/redux/rootReducer";
import {PostType} from "@root/interfaces/Post";
import {WEEK_DAYS} from "@src/common_data/common";
import {Router} from "@root/i18n";
import {useStyles} from './useStyles';
import { StateIcon } from '@src/components/elements/icons'


type PriceDescContactsProps = {
    open: boolean,
    postType: PostType,
    mark: string,
    asPath: string,
    handleSetPost
} & WithT;

export const DefaultParamsForm: FC<PriceDescContactsProps> = (props) => {
    const {
        t,
        open,
        mark,
        asPath,
        postType,
        handleSetPost
    } = props;

    const isAuction = postType.name === 'auc' || postType.name === 'exauc';

    const {locations} = useSelector((store: RootState) => store);

    const initForm = {
        title: '',
        safe_deal: false,
        delivery: false,
        exchange: false,
        location: {
            region_id: null,
            city_id: null,
            district_id: null
        },
        description: '',
        phone: '',
        price: mark === 'free' ? '0' : '',
        currency: postType.currency[0],
        avalTime: {
            isActive: false,
            start_time: '09:00',
            end_time: '18:00',
            available_days: [...WEEK_DAYS],
        },
        auction: {
            duration: {
                id: null,
                expiration_at: null
            },
            offer_the_price: false,
            auto_renewal: false,
            reserve_price: '',
            price_by_now: {
                isActive: false,
                value: ''
            },
            display_phone: false,
        }
    };

    const onSubmit = (values) => {
        let {
            auction,
            avalTime: {
                available_days,
                start_time,
                end_time
            },
            ...otherVals
        } = values;

        if (isAuction) {
            otherVals = {...otherVals, ...auction};
        }

        handleSetPost({
            ...otherVals,
            available_days,
            start_time,
            end_time
        });
        // Router.push(asPath.replace(/0$/, '1'));
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: null,
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleSubmit,
        handleBlur
    } = formik;

    const {auction} = values;

    const handleMenuItem = (valueKey: string) => (newValue, setAnchor) => () => {
        if (valueKey === 'currency') {
            values.currency = newValue;
        } else if (valueKey === 'duration') {
            auction.duration = newValue;
        }

        setAnchor(null);
        setValues({...values});
    };

    const handleInput = ({target: {name, value}}) => {
        const isNumericField = numericFields.some((n => n === name));

        if (isNumericField) {
            if (numberRegEx.test(value)) {
                value = numberPrettier(value);
                switch (name) {
                    case 'price':
                        values.price = value;
                        break;
                    case 'reserve_price':
                        auction.reserve_price = value;
                        break;
                    case 'price_by_now':
                        auction.price_by_now.value = value;
                }
            }
        } else {
            values[name] = value;
        }
        setValues({...values});
    };

    const handleLocation = (_, location) => {
        values.location = !!location
            ? (
                {
                    region_id: location.region_id ?? null,
                    city_id: location.city_id ?? null,
                    district_id: location.district_id ?? null
                }
            )
            : initForm.location;

        setValues({...values});
    };

    const handleCheckboxChange = valName => ({target}) => {
        const isAuctionField = ['auto_renewal', 'display_phone', 'offer_the_price']
            .some(fieldName => fieldName === valName);

        if (isAuctionField) {
            auction[valName] = target.checked;
        } else if (valName === 'price_by_now') {
            auction.price_by_now.isActive = target.checked;
        } else {
            values[valName] = target.checked;
        }

        setValues({...values});
    };

    const handleSwitch = (_, value) => {
        values.avalTime.isActive = value;
        setValues({...values});
    };

    const handleAvalDays = day => () => {
        const isExstDay = values.avalTime.available_days.some(({id}) => id === day.id);
        if (isExstDay) {
            values.avalTime.available_days.map(({id}, index) => {
                if (id === day.id) {
                    values.avalTime.available_days.splice(index, 1);
                }
            });
        } else {
            values.avalTime.available_days.push(day);
        }
        setValues({...values});
    };

    const handleTime = ({target: {value, name}}) => {
        if (timeRegEx.test(value)) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            values.avalTime = {...values.avalTime, [name]: value};
            setValues({...values});
        }
    };

    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    open={open}
                    title={t('titleDescContacts')}
                    nextButtonTxt={t('next')}
                    icon={<StateIcon/>}
                >
                    <div className={classes.root}>
                        <Typography className='title' variant="subtitle1">
                            <strong>
                                {t('postTitle')}:
                                {<span className='error-text'>*</span>}
                            </strong>
                            {errors.title
                            && touched.title
                            && <span className='error-text'>&nbsp;{errors.title}</span>}
                        </Typography>
                        <CustomFormikField
                            name='title'
                            onChange={handleInput}
                            className={errors.title && touched.title ? 'error-border' : ''}
                            placeholder={t('exampleTitle')}
                            value={values.title}
                        />
                        {mark !== 'free' && <>
                            {isAuction
                                ? <div>
                                    <AuctionParams
                                        t={t}
                                        values={values}
                                        auction={auction}
                                        errors={errors}
                                        touched={touched}
                                        postType={postType}
                                        handleBlur={handleBlur}
                                        handleInput={handleInput}
                                        handleMenuItem={handleMenuItem}
                                        handleCheckboxChange={handleCheckboxChange}
                                    />
                                </div>
                                : <div>
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {t('price')}
                                            <span className='error-text'>*</span>
                                        </strong>
                                        {errors.price
                                        && touched.price
                                        && <span className='error-text'>&nbsp;{errors.price}</span>}
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
                                        <CustomMenu
                                            name='currency'
                                            onBlur={handleBlur}
                                            items={postType.currency}
                                            onClick={handleMenuItem('currency')}
                                            valueName={values.currency ? values.currency.name : t('noSelect')}
                                        />
                                    </Grid>
                                </div>
                            }
                        </>}
                        <div>
                            <PaymentDelivery
                                t={t}
                                values={values}
                                handleCheckboxChange={handleCheckboxChange}
                            />
                        </div>
                        <div className='location-wrapper'>
                            <Location
                                t={t}
                                errors={errors}
                                touched={touched}
                                locations={locations}
                                handleBlur={handleBlur}
                                handleLocation={handleLocation}
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
                                    isAuction={isAuction}
                                    phone={values.phone}
                                    displayPhone={auction.display_phone}
                                    handleInput={handleInput}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            </Grid>
                            {!isAuction && <Grid item xs={6}>
                                <AvailableDays
                                    t={t}
                                    avalTime={values.avalTime}
                                    handleBlur={handleBlur}
                                    handleTime={handleTime}
                                    handleSwitch={handleSwitch}
                                    handleAvalDays={handleAvalDays}
                                />
                            </Grid>}
                        </Grid>
                    </div>
                </CustomAccordion>
            </form>
        </FormikProvider>
    )
}