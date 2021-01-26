import React, {FC, useEffect} from 'react';
import {FormikProvider, useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {PostForm} from './PostForm';
import {RootState} from "@src/redux/rootReducer";
import {PostType, CreatePostProps, FileType, IdNameType} from "@root/interfaces/Post";
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {createPostSchema} from "@root/validation_schemas/createPostSchema";
import {TOTAL_FILES_LIMIT} from "@src/constants";
import {
    noSelectData,
    numberRegEx,
    numericFields,
    textFieldKeys,
    timeRegEx
} from "@src/helpers";
import {CameraIcon} from "@src/components/elements/icons";
import {userAPI} from "@src/api/api";
import {CategoryType} from "@root/interfaces/Categories";
import {WithT} from "i18next";


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

    const {mark} = category;
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
            [mark]: {}
        };

        Object.keys(postParamsByMark).map(k => {
            if (!!postParamsByMark[k] && !!postParamsByMark[k].id) {
                valsForCrtPost[mark][`${k}_id`] = postParamsByMark[k].id;
            } else {
                valsForCrtPost[mark][k] = postParamsByMark[k];
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
                if (textFieldKeys.some(k => k === dataKey)) {
                    postParams[mark][dataKey] = {...noSelectData, txt: ''}
                } else {
                    postParams[mark][dataKey] = noSelectData;
                }
            } else {
                postParams[mark][dataKey] = dataForCrtPost[dataKey];
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
                    mark={mark}
                    errors={errors}
                    touched={touched}
                    values={values}
                    setValues={setValues}
                    locations={locations}
                    handleBlur={handleBlur}
                    secLvlCtgr={secLvlCtgr}
                    handleTime={handleTime}
                    handleInput={handleInput}
                    handleSwitch={handleSwitch}
                    handleAvalDays={handleAvalDays}
                    handleListItem={handleListItem}
                    handleMenuItem={handleMenuItem}
                    handleLocation={handleLocation}
                    handleParamsCheckbox={handleParamsCheckbox}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </form>
        </FormikProvider>
    )

    // ----------------------------------------------> Handlers <-------------------------------------------------
    function handleLocation(_, loc) {
        defaultParams.location = !!loc
            ? {
                region_id: loc.region_id ?? null,
                city_id: loc.city_id ?? null,
                district_id: loc.district_id ?? null
            }
            : initFormikForm.defaultParams.location;
        setValues({...values});
    }

    function handleListItem(keyName, value) {
        return () => {
            if (postParamsByMark[keyName] && postParamsByMark[keyName].id === value.id) {
                postParamsByMark[keyName] = {id: null, name: 'Не выбрано'};
            } else {
                postParamsByMark[keyName] = value;
            }
            setValues({...values});
        };
    }

    function handleCheckboxChange(valName) {
        return ({target}) => {
            const isAuctionField = ['auto_renewal', 'display_phone', 'offer_the_price']
                .some(fieldName => fieldName === valName);
            if (isAuctionField) {
                auction[valName] = target.checked;
            } else if (valName === 'price_by_now') {
                auction.price_by_now.isActive = target.checked;
            } else {
                defaultParams[valName] = target.checked;
            }
            setValues({...values});
        }
    }

    function handleParamsCheckbox(keyName, value) {
        return () => {
            if (postParamsByMark[keyName]) {
                if (postParamsByMark[keyName].some(val => val.id === value.id)) {
                    postParamsByMark[keyName].forEach((val, index) => {
                        if (val.id === value.id) {
                            postParamsByMark[keyName].splice(index, 1);
                        }
                    });
                } else {
                    postParamsByMark[keyName] = value;
                }
                setValues({...values});
            }
        }
    }

    function handleMenuItem(valueKey) {
        return (newValue, setAnchor) => () => {
            setAnchor(null);
            if (valueKey === 'currency') {
                defaultParams.currency = newValue;
            } else if (valueKey === 'duration') {
                auction[valueKey] = newValue;
            } else {
                const isTxtField = textFieldKeys.some(k => k === valueKey);
                postParamsByMark[valueKey] = isTxtField
                    ? {...postParamsByMark[valueKey], ...newValue}
                    : newValue;
            }
            setValues({...values});
        }
    }

    function handleInput({target: {name, value}}) {
        const isNumericField = numericFields.some((n => n === name));
        if (isNumericField) {
            if (numberRegEx.test(value)) {
                switch (name) {
                    case 'price':
                        defaultParams[name] = value;
                        break;
                    case 'reserve_price':
                        auction[name] = value;
                        break;
                    case 'price_by_now':
                        auction[name].value = value;
                        break;
                    case 'year':
                        postParamsByMark[name] = value;
                        break;
                    case 'area':
                        postParamsByMark[name].txt = value;
                }
            }
        } else {
            defaultParams[name] = value;
        }
        setValues({...values});
    }

    function handleSwitch(_, value) {
        defaultParams.avalTime.isActive = value;
        setValues({...values});
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
            setValues({...values});
        };
    }

    function handleTime({target: {value, name}}) {
        if (timeRegEx.test(value)) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            defaultParams.avalTime = {...defaultParams.avalTime, [name]: value};
            setValues({...values});
        }
    }
};