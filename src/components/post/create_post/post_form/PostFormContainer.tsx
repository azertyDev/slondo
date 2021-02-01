import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import {FormikProvider, useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {userAPI} from "@src/api/api";
import {PostForm} from './PostForm';
import {RootState} from "@src/redux/rootReducer";
import {PostType, CreatePostProps, FileType, IdNameType} from "@root/interfaces/Post";
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {createPostSchema} from "@root/validation_schemas/createPostSchema";
import {TOTAL_FILES_LIMIT} from "@src/constants";
import {
    noSelect,
    numberRegEx,
    numericFields,
    fieldKeysWithTxt,
    timeRegEx, optionKeys,
} from "@src/helpers";
import {CameraIcon} from "@src/components/elements/icons";
import {CategoryType} from "@root/interfaces/Categories";
import {WithT} from "i18next";
import {DataForCrtPostType} from "@src/components/post/create_post/CreatePostContainer";


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
    dataForCrtPost: DataForCrtPostType;
    setDataForCrtPost: Dispatch<SetStateAction<DataForCrtPostType>>
    secCtgr: SecLvlCtgrType
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
        secCtgr,
        dataForCrtPost,
        setDataForCrtPost,
    } = props;

    const dispatch = useDispatch();
    const {locations} = useSelector((store: RootState) => store);
    const isAuction = ['auc', 'exauc'].some(type => type === postType.name);

    const {mark} = category;
    const weekDays = Array.from({length: 7}).map((_, i) => ({id: ++i}));
    const initPhotos: FileType[] = Array.from({length: TOTAL_FILES_LIMIT}).map(() => initPhoto);

    const initFormikForm: CreatePostProps = {
        isFetch: false,
        files: initPhotos,
        postParams: {
            [mark]: {
                [`${mark}_id`]: secCtgr.id,
                type_id: secCtgr.type.id
            }
        },
        defaultParams: {
            category_id: category.id,
            sub_category_id: secCtgr.id,
            ads_type_id: postType.id,
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
            currency: postType.currency[0],
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
            [mark]: {
                [`${mark}_id`]: secCtgr.id
            }
        };

        Object.keys(postParamsByMark).map(k => {
            if (postParamsByMark[k]) {
                if (Array.isArray(postParamsByMark[k]) && postParamsByMark[k].length) {
                    valsForCrtPost[mark][k] = postParamsByMark[k].map(val => ({id: val.id}));
                } else if (postParamsByMark[k].id) {
                    if (postParamsByMark[k].txt) {
                        valsForCrtPost[mark][k] = postParamsByMark[k].txt;
                    }
                    valsForCrtPost[mark][`${k}_id`] = postParamsByMark[k].id;
                } else if (!!postParamsByMark[k]) {
                    valsForCrtPost[mark][k] = postParamsByMark[k];
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
        const {data} = dataForCrtPost;

        if (mark === 'free') {
            defaultParams.price = '0';
        }
        if (isAuction) {
            auction.duration = postType.expired[0];
        }
        if (postParamsByMark.spares_type) {
            postParamsByMark.spares_type = noSelect;
        }

        Object.keys(data).forEach(dataKey => {
            const isFieldKeysWithTxt = fieldKeysWithTxt.some(k => k === dataKey);
            const isOptionKey = optionKeys.some(k => k === dataKey);

            if (Array.isArray(data[dataKey])) {
                const isCarManufacturer = dataKey === 'manufacturer' && !!data[dataKey][0].models;

                if (data[dataKey].length) {
                    if (isFieldKeysWithTxt) {
                        postParamsByMark[dataKey] = {...noSelect, txt: ''};
                    } else if (isOptionKey) {
                        postParamsByMark[dataKey] = [];
                    } else if (!postParamsByMark[dataKey]) {
                        if (isCarManufacturer) {
                            const fstMnfctr = data[dataKey][0];

                            postParamsByMark[dataKey] = {id: fstMnfctr.id, name: fstMnfctr.name};
                            postParamsByMark.model = noSelect;

                            dataForCrtPost.data.model = fstMnfctr.models;
                            setDataForCrtPost({...dataForCrtPost})
                        } else {
                            postParamsByMark[dataKey] = noSelect;
                        }
                    }
                }
            } else {
                postParamsByMark[dataKey] = data[dataKey];
            }
        });

        setValues({...values});
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
        window && window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setDefaultVals();
    }, [dataForCrtPost]);

    // console.log(secCtgr)
    console.log(dataForCrtPost)
    console.log(values)

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
                    secCtgr={secCtgr}
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
                postParamsByMark[keyName] = noSelect;
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
        return ({target}) => {
            if (postParamsByMark[keyName] && !!value) {
                if (postParamsByMark[keyName].some(({id}) => id === value.id)) {
                    postParamsByMark[keyName].forEach(({id}, index) => {
                        if (id === value.id) {
                            postParamsByMark[keyName].splice(index, 1);
                        }
                    });
                } else {
                    postParamsByMark[keyName].push(value);
                }
            } else {
                postParamsByMark[keyName] = target.checked;
            }
            setValues({...values});
        }
    }

    function handleMenuItem(valueKey: string) {
        return (newValue, setAnchor) => () => {
            setAnchor(null);

            if (valueKey === 'currency') {
                defaultParams.currency = newValue;
            } else if (valueKey === 'duration') {
                auction[valueKey] = newValue;
            } else {
                const isTxtField = fieldKeysWithTxt.some(k => k === valueKey);
                postParamsByMark[valueKey] = isTxtField
                    ? {...postParamsByMark[valueKey], ...newValue}
                    : newValue;
            }

            if (valueKey === 'parts') {
                dataForCrtPost.data.spares_type = newValue.spares_type;
                setDataForCrtPost({...dataForCrtPost});
            } else if (valueKey === 'manufacturer' && postParamsByMark[valueKey].models) {
                postParamsByMark.model = noSelect;
                dataForCrtPost.data.model = postParamsByMark[valueKey].models;
                setDataForCrtPost({...dataForCrtPost});
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
                    case 'area':
                        postParamsByMark[name].txt = value;
                        break;
                    default:
                        postParamsByMark[name] = value;
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