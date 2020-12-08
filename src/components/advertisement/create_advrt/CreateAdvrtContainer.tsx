import React, {FC, useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import {i18n} from "@root/i18n";
import {userAPI} from '@src/api/api';
import {RootState} from "@src/redux/rootReducer";
import {MainLayout} from "@src/components/MainLayout";
import {CreateAdvrt} from "./CreateAdvrt";
import {CreateAdFields, FileType} from "@root/interfaces/Advertisement";
import {createAdvrtSchema, isRequired} from "@root/validation_schemas/createAdvrtSchema";
import {autoSelectKeys, textFieldKeys} from "../create_advrt/advrt_form/AdvrtFormContainer";
import {CameraIcon} from "@src/components/elements/icons";
import {TOTAL_FILES_LIMIT} from "@src/constants";


const initCreateAdState = {
    isFetch: false,
    error: null,
    adType: {
        id: null,
        name: '',
        currency: [],
        expired: [],
    },
    category: {
        id: null,
        name: '',
        childs: []
    },
    subCategory: {
        id: null,
        name: '',
        data: {}
    }
};

export const initUrl: FileType = {
    url: (
        <div style={{width: '140px', height: '140px', margin: 'auto'}}>
            <CameraIcon/>
        </div>
    )
};

const initPhotos: FileType[] = Array.from({length: TOTAL_FILES_LIMIT}).map(() => initUrl);

const initFormFields: CreateAdFields = {
    isFetch: false,
    error: null,
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

export const CreateAdvrtContainer: FC<void> = () => {
    const lang = i18n.language;

    const categoriesList = useSelector(({categories}: RootState) => categories.list);

    const [tabValue, setTabValue] = useState(1);

    const [adTypes, setAdTypes] = useState([]);

    const [createAdvrt, setCreateAdvrt] = useState(initCreateAdState);
    const {adType, category, subCategory} = createAdvrt;

    const [isForm, setIsForm] = useState(false);

    const [isPreview, setIsPreview] = useState(false);

    const [isSuccess, setIsSuccess] = useState(false);

    const formik = useFormik({
        initialValues: initFormFields,
        validationSchema: createAdvrtSchema,
        onSubmit
    });

    const {values, setValues, setErrors, setTouched} = formik;
    const {adParams} = values;

    const getAdTypes = async () => {
        try {
            setCreateAdvrt({...createAdvrt, isFetch: true});

            const adTypes = await userAPI.getAdTypes(lang);

            setCreateAdvrt({...createAdvrt, isFetch: false});

            setAdTypes(adTypes);
            setCreateAdvrt({
                ...createAdvrt,
                adType: adTypes[0]
            })
        } catch (error) {
            setCreateAdvrt({...createAdvrt, error});
        }
    };

    const handleTab = (_, newValue) => {
        setTabValue(newValue);
    };

    const setAdType = () => {
        const [selectedAdType] = adTypes.filter(type => type.id === tabValue);

        setCreateAdvrt({
            ...createAdvrt,
            adType: selectedAdType
        });
    };

    const handleCategory = (category) => () => {
        setCreateAdvrt({
            ...createAdvrt,
            error: null,
            category
        });
    };

    const handleSubCategory = (id, name) => async () => {
        try {
            if (id !== undefined) {
                setCreateAdvrt({
                    ...createAdvrt,
                    isFetch: true
                });

                const data = await userAPI.getAdDataForCreate(category.id, id, lang);

                setIsForm(true);

                setCreateAdvrt({
                    ...createAdvrt,
                    isFetch: false,
                    subCategory: {id, name, data}
                });
            } else {
                setIsForm(true);
                setCreateAdvrt({
                    ...initCreateAdState,
                    adType: createAdvrt.adType,
                    category: createAdvrt.category
                });
            }
        } catch ({message}) {
            setCreateAdvrt({
                ...createAdvrt,
                error: message
            });
        }
    };

    const handleCreateNew = () => {
        setErrors({});
        setTouched({});
        setValues(initFormFields);
        isForm && setIsForm(false);
        isSuccess && setIsSuccess(false);
    };

    const handleBackBtn = () => {
        if (isPreview) {
            setIsPreview(false);
        } else {
            handleCreateNew();
        }
    };

    const getFormData = (data: CreateAdFields) => {
        const form = new FormData();
        const {
            avalTime,
            location,
            files,
            adParams,
            auction
        } = data;

        form.set('ads_type_id', adType.id.toString());
        form.set('parent_categories_id', category.id.toString());
        if (subCategory.id) {
            form.set('child_categories_id', subCategory.id.toString());
        }
        form.set('title', data.title);
        form.set('safe_deal', Number(data.safe_deal).toString());
        form.set('delivery', Number(data.delivery).toString());
        form.set('exchange', Number(data.exchange).toString());
        form.set('phone', data.phone);
        form.set('description', data.description);
        form.set('price', data.price);
        form.set('currency_id', data.currency.id.toString());

        files.forEach(
            ({file}: any) => {
                if (file) form.append('files[]', file, file.name);
            });

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

        if (adType.id !== 1) {
            form.set('duration_id', auction.duration.id.toString());
            form.set('display_phone', Number(auction.display_phone).toString());
            if (adType.id === 3) {
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

    async function onSubmit(values: CreateAdFields) {
        try {
            if (!isPreview) {
                setIsPreview(true);
            } else {
                setValues({...values, isFetch: true});

                const data = getFormData(values);
                await userAPI.createAdvrt(data);

                setValues({...values, isFetch: false});

                setIsSuccess(true);
                setIsPreview(false);
            }
        } catch (e) {
            setValues({...values, error: e.message});
        }
    }

    const setReqValues = () => {
        const reqVals = {};
        const reqParamsVals = {};

        const adParamsVals = subCategory.data;

        if (category.id === 11) {
            reqVals['price'] = '0';
        }

        if (adType.currency.length !== 0) {
            reqVals['currency'] = adType.currency.filter(cur => cur.name === 'sum')[0];
        }

        if (adType.id !== 1 && adType.expired.length !== 0) {
            reqVals['auction'] = {
                ...values.auction,
                duration: adType.expired[0]
            };
        }

        Object.keys(adParamsVals).forEach(key => {
            if (isRequired(key) && adParams[key] === undefined) {
                if (key === 'manufacturer' && subCategory.id == 1) {
                    reqParamsVals['models'] = {id: null, name: 'Не выбрано'};
                }
                if (Array.isArray(adParamsVals[key])) {
                    reqParamsVals[key] = {id: null, name: 'Не выбрано'};
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
        getAdTypes();
    }, []);

    useEffect(() => {
        adTypes.length && setAdType();
    }, [tabValue]);

    useEffect(() => {
        setReqValues();
    }, [subCategory.name, adType.id]);

    console.log(createAdvrt)
    console.log(values)
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <CreateAdvrt
                    formik={formik}
                    isForm={isForm}
                    setIsForm={setIsForm}
                    isSuccess={isSuccess}
                    setIsSuccess={setIsSuccess}
                    isPreview={isPreview}
                    setIsPreview={setIsPreview}
                    adTypes={adTypes}
                    tabValue={tabValue}
                    createAdvrt={createAdvrt}
                    categoriesList={categoriesList}
                    handleCreateNew={handleCreateNew}
                    handleBackBtn={handleBackBtn}
                    handleTab={handleTab}
                    handleCategory={handleCategory}
                    handleSubCategory={handleSubCategory}
                />
            </Container>
        </MainLayout>
    )
}