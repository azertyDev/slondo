import React, {FC, useEffect} from 'react';
import {FormikProvider, useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {PostForm} from './PostForm';
import {RootState} from "@src/redux/rootReducer";
import {PostType, CreatePostProps, FileType, IdNameType} from "@root/interfaces/Post";
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {createPostSchema} from "@root/validation_schemas/createPostSchema";
import {TOTAL_FILES_LIMIT} from "@src/constants";
import {numberRegEx} from "@src/helpers";
import {CameraIcon} from "@src/components/elements/icons";
import {userAPI} from "@src/api/api";
import {CategoryType} from "@root/interfaces/Categories";
import {WithT} from "i18next";


export const autoSelectKeys = ['condition', 'area'];
export const textFieldKeys = ['area'];
export const noSelectData = {id: null, name: 'Не выбрано'}

export const initPhoto: FileType = {
    url: (
        <div style={{width: '120px', height: '120px', margin: 'auto'}}>
            <CameraIcon/>
        </div>
    )
};

type PostFormContainerProps = {
    activeStep: number;
    handleNextStep: () => void;
    postType: PostType;
    category: CategoryType;
    dataForCrtPost: any;
    secLvlCtgr: SecLvlCtgrType
}

export type SecLvlCtgrType = {
    type: IdNameType
} & IdNameType

export const PostFormContainer: FC<PostFormContainerProps & WithT> = (props) => {
    const {
        activeStep,
        postType,
        handleNextStep,
        category,
        secLvlCtgr,
        dataForCrtPost,
    } = props;

    const dispatch = useDispatch();
    const {locations} = useSelector((store: RootState) => store);
    const isAuction = postType.name === 'auc' || postType.name === 'exauc';

    const mark = category.mark.replace(/s$/, '');
    const initPhotos: FileType[] = Array.from({length: TOTAL_FILES_LIMIT}).map(() => initPhoto);
    const weekDays = Array.from({length: 7}).map((_, i) => ({id: ++i}));
    const initFormikForm: CreatePostProps = {
        isFetch: false,
        files: initPhotos,
        postParams: {
            [mark]: {
                [`${mark}_id`]: null,
                type_id: null
            }
        },
        defaultParams: {
            category_id: null,
            sub_category_id: null,
            ads_type_id: null,
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
            price: '',
            currency: {
                id: null,
                name: ''
            },
            avalTime: {
                isActive: false,
                start_time: '00:00',
                end_time: '00:00',
                available_days: weekDays,
            }
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

    const formik = useFormik({
        initialValues: initFormikForm,
        validationSchema: createPostSchema,
        onSubmit
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur,
        handleSubmit
    } = formik;

    const {postParams, defaultParams, auction} = values;
    const postParamsByMark = postParams[mark];

    const preparedValues = () => {
        const {
            phone,
            currency,
            location,
            avalTime: {
                start_time,
                end_time,
                available_days
            },
            ...defParams
        } = defaultParams;

        const valsForCrtPost: any = {
            ...defParams,
            ...location,
            start_time,
            end_time,
            available_days,
            phone: !!phone ? phone : null,
            currency_id: currency.id,
        };
        Object.keys(postParamsByMark).map(k => {
            if (!!postParamsByMark[k] && postParamsByMark[k].id) {
                valsForCrtPost[mark][`${k}_id`] = postParamsByMark[k].id;
            } else {
                valsForCrtPost[mark] = {
                    ...valsForCrtPost[mark],
                    [k]: postParamsByMark[k]
                }
            }
        });

        if (isAuction) {
            const {
                duration,
                display_phone,
                auto_renewal,
                reserve_price,
                offer_the_price,
                price_by_now: {value}
            } = auction;

            valsForCrtPost.auction = {
                display_phone,
                offer_the_price,
                auto_renewal,
                duration_id: duration.id,
                reserve_price: !!reserve_price ? reserve_price : null,
                price_by_now: !!value ? value : null
            };
        }

        return valsForCrtPost;
    };

    const setDefaultVals = () => {
        defaultParams.category_id = category.id;
        defaultParams.sub_category_id = secLvlCtgr.id;
        defaultParams.ads_type_id = postType.id;
        defaultParams.currency = postType.currency[0];

        if (mark === 'free') {
            defaultParams.price = '0';
        }

        if (isAuction) {
            auction.duration = postType.expired[0];
        }

        postParams[mark] = {
            [`${mark}_id`]: secLvlCtgr.id,
            type_id: secLvlCtgr.type.id
        };

        Object.keys(dataForCrtPost).forEach(dataKey => {
            if (Array.isArray(dataForCrtPost[dataKey])) {
                postParams[mark] = {
                    ...postParams[mark],
                    [dataKey]: noSelectData
                }
            } else {
                postParams[mark] = {
                    ...postParams[mark],
                    [dataKey]: dataForCrtPost[dataKey]
                }
            }
        });

        setValues({
            ...values,
            defaultParams,
            postParams
        });
    };

    async function onSubmit() {
        try {
            if (activeStep === 2) {
                handleNextStep();
            } else {
                setValues({...values, isFetch: true});
                const {files} = values;

                const form = new FormData();

                files.forEach(({file}: any) => file && form.append('files[]', file, file.name));

                const valsForCrtPost = preparedValues();
                const postId = await userAPI.createPost(valsForCrtPost);

                form.set('ads_id', postId.toString());
                await userAPI.uploadPhotos(form);

                console.log(postId)
                setValues({...values, isFetch: false});

                handleNextStep();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setValues({...values, isFetch: false});
        }
    }

    useEffect(() => {
        setDefaultVals();
        window && window.scrollTo(0, 0);
    }, []);

    // console.log(secLvlCtgr)
    console.log(values)
    // console.log(dataForCrtPost)

    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <PostForm
                    {...props}
                    errors={errors}
                    touched={touched}
                    values={values}
                    mark={mark}
                    setValues={setValues}
                    locations={locations}
                    handleBlur={handleBlur}
                    handleTime={handleTime}
                    handleInput={handleInput}
                    handleSwitch={handleSwitch}
                    handleAvalDays={handleAvalDays}
                    handleListItem={handleListItem}
                    handleMenuItem={handleMenuItem}
                    handleLocation={handleLocation}
                    secLvlCtgr={secLvlCtgr}
                    handleAuctionInput={handleAuctionInput}
                    handleParamsCheckbox={handleParamsCheckbox}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </form>
        </FormikProvider>
    )

    // ----------------------------------------------> Handlers <-------------------------------------------------
    function handleLocation(_, loc) {
        const location = !!loc
            ? {
                region_id: loc.region_id ?? null,
                city_id: loc.city_id ?? null,
                district_id: loc.district_id ?? null
            }
            : initFormikForm.defaultParams.location;

        setValues({
            ...values,
            defaultParams: {
                ...defaultParams,
                location
            }
        });
    }

    function handleCheckboxChange(valName) {
        return ({target}) => {
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
        }
    }

    function handleParamsCheckbox(valueName, value) {
        return () => {
            let post = {...postParams, [valueName]: [value]};

            if (postParams[valueName]) {
                if (postParams[valueName].some(val => val.id === value.id)) {
                    postParams[valueName].map((val, index) => {
                        if (val.id === value.id) {
                            postParams[valueName].splice(index, 1);
                        }
                    });
                } else {
                    post = {
                        ...postParams,
                        [valueName]: [...postParams[valueName], value]
                    };
                }
            }

            setValues({...values, postParams: post});
        };
    }

    function handleMenuItem(valueName) {
        return (newValue, setAnchor) => () => {
            setAnchor(null);

            if (valueName === 'currency') {
                setValues({
                    ...values,
                    defaultParams: {
                        ...defaultParams,
                        currency: newValue
                    }
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
                    if (postParams[key]) {
                        values.postParams = {
                            ...postParams,
                            [key]: {id: null, name: 'Не выбрано'}
                        };
                    }
                    postParams[mark] = {
                        ...postParams[mark],
                        [valueName]: newValue
                    };

                    setValues({
                        ...values,
                        postParams: {...postParams}
                    });
                });
            }
        }
    }

    function handleListItem(valueName, value) {
        return () => {
            if (postParams[valueName] && postParams[valueName].id === value.id) {
                values.postParams = {
                    ...postParams,
                    [valueName]: {id: null, name: 'Не выбрано'}
                };
            } else {
                values.postParams = {...postParams, [valueName]: value};
            }
            setValues({...values});
        };
    }

    function handleInput({target}) {
        const {name, value} = target;
        if (name === 'price') {
            if (numberRegEx.test(target.value)) {
                values.defaultParams.price = value;
                setValues({...values});
            }
        } else {
            values.defaultParams[name] = value;
            setValues({...values});
        }
    }

    function handleAuctionInput(valName) {
        return ({target}) => {
            if (numberRegEx.test(target.value)) {
                if (valName === 'price_by_now') {
                    values.auction = {
                        ...values.auction,
                        [valName]: {
                            isActive: true,
                            value: target.value
                        }
                    };
                    setValues({...values});
                } else {
                    values.auction = {...values.auction, [valName]: target.value};
                    setValues({...values});
                }
            }
        }
    }

    function handleSwitch(_, value) {
        defaultParams.avalTime.isActive = value;
        setValues({...values, defaultParams});
    }

    function handleAvalDays(day) {
        return () => {
            const isExstDay = defaultParams.avalTime.available_days.some(({id}) => id === day.id);

            if (isExstDay) {
                defaultParams.avalTime.available_days.map(({id}, index) => {
                    if (id === day.id) {
                        defaultParams.avalTime.available_days.splice(index, 1);
                    }
                });
            } else {
                defaultParams.avalTime.available_days.push({id: day.id});
            }

            setValues({...values, defaultParams});
        };
    }

    function handleTime({target}) {
        let {value} = target;
        const regEx = /^([0-1]?[0-9]|2[0-3])?:([0-5][0-9]?)?$/;
        const isValid = regEx.test(value);

        if (isValid) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            defaultParams.avalTime = {...defaultParams.avalTime, [target.name]: value};
            setValues({...values, defaultParams});
        }
    }
}