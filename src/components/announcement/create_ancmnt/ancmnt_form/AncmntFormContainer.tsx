import React, {FC, useEffect} from 'react';
import {FormikProvider, useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AncmntForm} from './AncmntForm';
import {RootState} from "@src/redux/rootReducer";
import {AncmntType, CreateAncmntFields, FileType} from "@root/interfaces/Announcement";
import {SubLvlCtgrsType} from "@root/interfaces/Categories";
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {createAdvrtSchema, isRequired} from "@root/validation_schemas/createAdvrtSchema";
import {TOTAL_FILES_LIMIT} from "@src/constants";
import {numberRegEx} from "@src/helpers";
import {CameraIcon} from "@src/components/elements/icons";


export const autoSelectKeys = ['condition', 'area'];
export const textFieldKeys = ['area'];

export const initPhoto: FileType = {
    url: (
        <div style={{width: '120px', height: '120px', margin: 'auto'}}>
            <CameraIcon/>
        </div>
    )
};

const initPhotos: FileType[] = Array.from({
    length: TOTAL_FILES_LIMIT
}).map(() => initPhoto);

export const initFormFields: CreateAncmntFields = {
    isFetch: false,
    title: '',
    safe_deal: false,
    delivery: false,
    exchange: false,
    location: null,
    files: initPhotos,
    description: '',
    phone: '',
    price: '',
    currency: {
        id: null,
        name: ''
    },
    avalTime: {
        isActive: false,
        start_time: '00:00',
        end_time: '00:00',
        week: [
            {id: 1, name: 'Пн'},
            {id: 2, name: 'Вт'},
            {id: 3, name: 'Ср'},
            {id: 4, name: 'Чт'},
            {id: 5, name: 'Пт'},
            {id: 6, name: 'Сб'},
            {id: 7, name: 'Вс'}
        ],
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
    },
    adParams: {
        safety: [],
        multimedia: [],
        assistant: [],
        exterior: [],
        car_climate: [],
        airbags: [],
    }
};

export const formData = (data: CreateAncmntFields, ancmntType: AncmntType, subCategory: SubLvlCtgrsType): FormData => {
    const form = new FormData();
    const {
        avalTime,
        location,
        files,
        adParams,
        auction
    } = data;

    form.set('ads_type_id', ancmntType.id.toString());
    form.set('parent_categories_id', subCategory.parents[0].id.toString());
    form.set('title', data.title);
    form.set('safe_deal', Number(data.safe_deal).toString());
    form.set('delivery', Number(data.delivery).toString());
    form.set('exchange', Number(data.exchange).toString());
    form.set('phone', data.phone);
    form.set('description', data.description);
    form.set('price', data.price);
    form.set('currency_id', data.currency.id.toString());

    if (subCategory.id) form.set('child_categories_id', subCategory.id.toString());

    files.forEach(({file}: any) => file && form.append('files[]', file, file.name));

    if (avalTime.isActive) {
        avalTime.week.forEach((day, i) => (
            form.append(`week[${i}]`, day.id.toString())
        ));
        form.set('start_time', avalTime.start_time.toString());
        form.set('end_time', avalTime.end_time.toString());
    }

    for (const key in location) {
        if (typeof location[key] === 'number') {
            form.set(key, Number(location[key]).toString());
        }
    }

    for (let key in adParams) {
        const value = adParams[key];
        if (value) {
            if (typeof value === 'string') {
                const validKey = key.replace('_value', '');
                if (textFieldKeys.some(k => k === validKey)) {
                    key = validKey;
                }
                form.set(key, value);
            } else if (Array.isArray(value)) {
                value.forEach((value, i) => (
                    form.append(`${key}[${i}]`, value.id))
                )
            } else {
                if (value.id) {
                    switch (key) {
                        case 'models' :
                            key = 'model';
                            break;
                        case 'colors' :
                            key = 'color';
                    }
                    form.set(`${key}_id`, value.id);
                }
            }
        }
    }

    if (ancmntType.id !== 1) {
        form.set('duration_id', auction.duration.id.toString());
        form.set('display_phone', Number(auction.display_phone).toString());
        if (ancmntType.id === 3) {
            form.set('reserve_price', auction.reserve_price);
            form.set('auto_renewal', Number(auction.auto_renewal).toString());
            form.set('offer_the_price', Number(auction.offer_the_price).toString());
            if (auction.price_by_now.isActive) {
                form.set('price_by_now', auction.price_by_now.value);
            }
        }
    }

    // for (const key of form.entries()) {
    //     console.log(key[0] + '-' + key[1]);
    // }

    return form;
};

export const AncmntFormContainer: FC<any> = (props) => {
    const {
        activeStep,
        ancmntType,
        handleNextStep,
        createAncmnt
    } = props;
    const {category, subCategory} = createAncmnt;

    const {locations} = useSelector((store: RootState) => store);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: initFormFields,
        validationSchema: createAdvrtSchema,
        onSubmit
    });

    const {
        values,
        setValues,
        errors,
        touched,
        setTouched,
        handleBlur,
        handleSubmit
    } = formik;
    let {adParams} = values;

    async function onSubmit(values: CreateAncmntFields) {
        try {
            if (activeStep !== 3) {
                handleNextStep();
            } else {
                setValues({...values, isFetch: true});

                const data = formData(values, ancmntType, subCategory);
                // await userAPI.createAdvrt(data);

                setValues({...values, isFetch: false});

                handleNextStep();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setValues({...values, isFetch: false});
        }
    }

    const handleCheckboxChange = (valName) => ({target}) => {
        const isAuctionField = ['auto_renewal', 'display_phone', 'offer_the_price']
            .some(fieldName => fieldName === valName);

        if (isAuctionField) {
            setValues({
                ...values,
                auction: {
                    ...values.auction,
                    [valName]: target.checked
                }
            });
        } else if (valName === 'price_by_now') {
            setValues({
                ...values,
                auction: {
                    ...values.auction,
                    price_by_now: {
                        isActive: target.checked,
                        value: values.auction.price_by_now.value
                    }
                }
            });
        } else {
            setValues({...values, [valName]: target.checked});
        }
    };

    const handleParamsCheckbox = (valueName, value) => () => {
        if (adParams[valueName]) {
            if (adParams[valueName].some(val => val.id === value.id)) {
                adParams[valueName].map((val, index) => {
                    if (val.id === value.id) {
                        adParams[valueName].splice(index, 1);
                    }
                });
            } else {
                adParams = {
                    ...adParams,
                    [valueName]: [...adParams[valueName], value]
                };
            }
        } else {
            adParams = {...adParams, [valueName]: [value]};
        }
        setValues({...values, adParams});
    };

    const handleMenuItem = (valueName) => (newValue, setAnchor) => () => {
        setAnchor(null);

        if (valueName === 'currency') {
            setValues({
                ...values,
                [valueName]: newValue
            });
        } else if (valueName === 'duration') {
            setValues({
                ...values,
                auction: {
                    ...values.auction,
                    [valueName]: newValue
                }
            });
        } else {
            // Reset sub props in values
            Object.keys(newValue).map(key => {
                if (adParams[key]) {
                    adParams = {
                        ...adParams,
                        [key]: {id: null, name: 'Не выбрано'}
                    };
                }
                setValues({
                    ...values,
                    adParams: {
                        ...adParams,
                        [valueName]: newValue
                    }
                });
            });
        }
    };

    const handleListItem = (valueName, value) => () => {
        if (adParams[valueName] && adParams[valueName].id === value.id) {
            adParams = {
                ...adParams,
                [valueName]: {id: null, name: 'Не выбрано'}
            };
        } else {
            adParams = {
                ...adParams,
                [valueName]: value
            };
        }
        setValues({...values, adParams});
    };

    const handleInput = (valueName) => ({target}) => {
        if (numberRegEx.test(target.value)) {
            if (valueName === 'price') {
                setValues({...values, [valueName]: target.value});
            } else {
                adParams = {...adParams, [valueName]: target.value};
                setValues({...values, adParams});
            }
        }
    };

    const handleAuctionInput = (valName) => ({target}) => {
        if (numberRegEx.test(target.value)) {
            if (valName === 'price_by_now') {
                setValues({
                    ...values,
                    auction: {
                        ...values.auction,
                        [valName]: {
                            isActive: true,
                            value: target.value
                        }
                    }
                })
            } else {
                setValues({
                    ...values,
                    auction: {
                        ...values.auction,
                        [valName]: target.value
                    }
                })
            }
        }
    };

    const handleSwitch = (_, value) => {
        setValues({
            ...values,
            avalTime: {
                ...values.avalTime,
                isActive: value
            }
        });
    };

    const handleWeekDay = (value) => () => {
        if (values.avalTime.week.some(val => val.id === value.id)) {
            values.avalTime.week.map((val, index) => {
                if (val.id === value.id) {
                    values.avalTime.week.splice(index, 1)
                }
            });
            setValues({...values});
        } else {
            setValues({
                ...values,
                avalTime: {
                    ...values.avalTime,
                    week: [
                        ...values.avalTime.week,
                        value
                    ]
                }
            });
        }
    };

    const handleTime = ({target}) => {
        let {value} = target;
        const regEx = /^([0-1]?[0-9]|2[0-3])?:([0-5][0-9]?)?$/;
        const isValid = regEx.test(value);

        if (isValid) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            setValues({
                ...values,
                avalTime: {
                    ...values.avalTime,
                    [target.name]: value
                }
            });
        }
    };

    const setReqValues = () => {
        const reqVals = {};
        const reqParamsVals = {};
        const defaultVal = {id: null, name: 'Не выбрано'};

        const adParamsVals = subCategory.data;

        if (category.id === 11) {
            reqVals['price'] = '0';
        }

        if (ancmntType.currency.length !== 0) {
            reqVals['currency'] = ancmntType.currency.filter(cur => cur.name === 'sum')[0];
        }

        if (ancmntType.id !== 1 && ancmntType.expired.length !== 0) {
            reqVals['auction'] = {
                ...values.auction,
                duration: ancmntType.expired[0]
            };
        }

        Object.keys(adParamsVals).forEach(key => {
            if (isRequired(key) && adParams[key] === undefined) {
                if (key === 'manufacturer' && subCategory.id == 1) {
                    reqParamsVals['models'] = defaultVal;
                }
                if (Array.isArray(adParamsVals[key])) {
                    reqParamsVals[key] = defaultVal;
                } else {
                    reqParamsVals[key] = adParamsVals[key];
                }
            } else if (autoSelectKeys.some(k => k === key)) {
                if (textFieldKeys.some(k => k === key)) {
                    reqParamsVals[`${key}_value`] = '';
                }
                reqParamsVals[key] = adParamsVals[key][0];
            }
        });

        setValues({
            ...values,
            ...reqVals,
            adParams: {
                ...adParams,
                ...reqParamsVals
            }
        });
    };

    useEffect(() => {
        window && window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setReqValues();
    }, [subCategory.parent.id, subCategory.parent.name]);

    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <AncmntForm
                    {...props}
                    errors={errors}
                    touched={touched}
                    setTouched={setTouched}
                    values={values}
                    setValues={setValues}
                    locations={locations}
                    handleBlur={handleBlur}
                    handleTime={handleTime}
                    handleInput={handleInput}
                    handleSwitch={handleSwitch}
                    handleWeekDay={handleWeekDay}
                    handleListItem={handleListItem}
                    handleMenuItem={handleMenuItem}
                    handleAuctionInput={handleAuctionInput}
                    handleParamsCheckbox={handleParamsCheckbox}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </form>
        </FormikProvider>
    )
}