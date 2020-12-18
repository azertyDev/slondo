import React, {FC, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useFormik} from "formik";
import {i18n} from "@root/i18n";
import {userAPI} from '@src/api/api';
import {TOTAL_FILES_LIMIT} from "@src/constants";
import {CreateAncmnt} from "./CreateAncmnt";
import {RootState} from "@src/redux/rootReducer";
import {MainLayout} from "@src/components/MainLayout";
import {CameraIcon} from "@src/components/elements/icons";
import {
    CreateAncmntFields,
    FileType,
    CreateAncmntState,
    AncmntTypesState
} from "@root/interfaces/Announcement";
import {createAdvrtSchema, isRequired} from "@root/validation_schemas/createAdvrtSchema";
import {AncmntFormContainer, autoSelectKeys, textFieldKeys} from "./ancmnt_form/AncmntFormContainer";
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {AncmntTypesPage} from "@src/components/announcement/ancmnt_types_page/AncmntTypesPage";
import {WithT} from "i18next";
import {categoryDataNormalization, categorySearchHelper} from "@src/helpers";
// import {stateHelper} from "@src/helpers";


export const initUrl: FileType = {
    url: (
        <div style={{width: '140px', height: '140px', margin: 'auto'}}>
            <CameraIcon/>
        </div>
    )
};

const initAncmntTypes = {
    isFetch: false,
    ancmnts: [
        {
            id: 1,
            name: "Обычный",
            currency: [
                {
                    id: 1,
                    name: "уе"
                },
                {
                    id: 2,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 3,
                    expiration_at: 720
                }
            ],
            condition: [
                {
                    id: 1,
                    name: "Новый"
                },
                {
                    id: 2,
                    name: "б/у"
                }
            ],
            image: {
                url: '/img/adv-background.png'
            }
        },
        {
            id: 2,
            name: "Аукцион",
            currency: [
                {
                    id: 3,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 1,
                    expiration_at: 2
                },
                {
                    id: 2,
                    expiration_at: 720
                }
            ],
            condition: [
                {
                    id: 3,
                    name: "Новый"
                },
                {
                    id: 4,
                    name: "б/у"
                }
            ],
            image: {
                url: '/img/lot-background.png'
            }
        },
        {
            id: 3,
            name: "Продвинутый аукцион",
            currency: [
                {
                    id: 4,
                    name: "sum"
                }
            ],
            expired: [
                {
                    id: 4,
                    expiration_at: 2
                },
                {
                    id: 5,
                    expiration_at: 720
                }
            ],
            condition: [
                {
                    id: 5,
                    name: "Новый"
                },
                {
                    id: 6,
                    name: "б/у"
                }
            ],
            image: {
                url: '/img/advanced-lot-background.png'
            }
        }
    ]
};

export const CreateAncmntContainer: FC<WithT> = ({t}) => {
    const lang = i18n.language;

    const initPhotos: FileType[] = Array.from({
        length: TOTAL_FILES_LIMIT
    }).map(() => initUrl);

    const initCreateAncmntState: CreateAncmntState = {
        isFetch: false,
        error: null,
        adType: {
            id: null,
            name: '',
            currency: [{
                id: null,
                name: ''
            }],
            expired: [{
                id: null,
                expiration_at: null
            }],
            condition: [{
                id: null,
                name: ''
            }],
            image: {url: ''}
        },
        category: {
            id: null,
            name: '',
            images: {
                id: null,
                url: {
                    default: ''
                }
            },
            icons: {
                id: null,
                url: {
                    default: ''
                }
            },
            childs: [{
                parent: {
                    id: null,
                    name: ''
                },
                id: null,
                name: '',
                icons: [],
                image: {
                    url: ''
                }
            }],
            has_auction: null,
        },
        subCategory: {
            id: null,
            name: '',
            data: {}
        }
    };

    const initFormFields: CreateAncmntFields = {
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

    const categoriesList = useSelector(({categories}: RootState) => categoryDataNormalization(categories.list));
    const dispatch = useDispatch();

    const [ancmntTypes, setAncmntTypes] = useState<AncmntTypesState>(initAncmntTypes);

    const [createAncmnt, setCreateAncmnt] = useState<CreateAncmntState>(initCreateAncmntState);
    const {adType, category, subCategory} = createAncmnt;

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

    const setAncmntType = (selectedAncmntType) => {
        setCreateAncmnt({
            ...createAncmnt,
            adType: selectedAncmntType
        });
    };

    const handleSearch = ({target}) => {
        const childs = categorySearchHelper(target.value, categoriesList);
        if (target.value !== '') {
            setCreateAncmnt({
                ...createAncmnt,
                category: {
                    ...createAncmnt.category,
                    childs
                }
            });
        } else {
            setCreateAncmnt({...initCreateAncmntState, adType});
        }
    };

    const handleCategory = (category) => () => {
        setCreateAncmnt({
            ...createAncmnt,
            category
        });
    };

    const handleSubCategory = (parent, child_id, name) => async () => {
        try {
            if (child_id !== undefined) {
                setCreateAncmnt({
                    ...createAncmnt,
                    isFetch: true
                });

                const data = await userAPI.getAdDataForCreate(parent.id, child_id, lang);

                setIsForm(true);

                setCreateAncmnt({
                    ...createAncmnt,
                    isFetch: false,
                    category: parent,
                    subCategory: {
                        id: child_id,
                        name,
                        data
                    }
                });
            } else {
                setIsForm(true);
                setCreateAncmnt({
                    ...initCreateAncmntState,
                    adType: createAncmnt.adType,
                    category: createAncmnt.category
                });
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setCreateAncmnt({...createAncmnt, isFetch: false});
        }
    };

    const handleCreateReset = () => {
        setErrors({});
        setTouched({});
        setValues(initFormFields);
        isForm && setIsForm(false);
        isSuccess && setIsSuccess(false);
        setCreateAncmnt({...initCreateAncmntState, adType});
    };

    const handleResetCreateAncmnt = () => {
        setCreateAncmnt(initCreateAncmntState);
    };

    const handleBackBtn = () => {
        if (isPreview) {
            setIsPreview(false);
        } else {
            handleCreateReset();
        }
    };

    const getFormData = (data: CreateAncmntFields) => {
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

    async function onSubmit(values: CreateAncmntFields) {
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
            dispatch(setErrorMsgAction(e.message));
            setCreateAncmnt({...createAncmnt, isFetch: false});
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

    // useEffect(() => {
    //     stateHelper(
    //         ancmntTypes,
    //         setAncmntTypes,
    //         userAPI.getAdTypes(lang),
    //         dispatch
    //     );
    // }, []);

    useEffect(() => {
        setReqValues();
    }, [isForm]);

    console.log(categoriesList)
    console.log(createAncmnt)
    return (
        <MainLayout>
            {isForm
                ? <AncmntFormContainer
                    t={t}
                    formik={formik}
                    isSuccess={isSuccess}
                    isPreview={isPreview}
                    setIsPreview={setIsPreview}
                    createAncmnt={createAncmnt}
                    handleBackBtn={handleBackBtn}
                    handleCreateReset={handleCreateReset}
                />
                : !!adType.id
                    ? <CreateAncmnt
                        handleSearch={handleSearch}
                        createAncmnt={createAncmnt}
                        categoriesList={categoriesList}
                        handleCategory={handleCategory}
                        handleSubCategory={handleSubCategory}
                        handleResetCreateAncmnt={handleResetCreateAncmnt}
                    />
                    : <AncmntTypesPage
                        ancmntTypes={ancmntTypes}
                        setAncmntType={setAncmntType}
                    />}
        </MainLayout>
    )
}