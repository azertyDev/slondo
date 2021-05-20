import {FC, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {FormikType} from '@root/interfaces/Formik';
import {Grid, Typography} from '@material-ui/core';
import {FormikProvider, useFormik} from 'formik';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {getErrorMsg, isRequired} from '@src/helpers';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {ApartmentsParams} from '@src/components/post/create_post/form_page/params_form/params_forms/apartments_params/ApartmentsParams';
import {HousesCottagesParams} from '@src/components/post/create_post/form_page/params_form/params_forms/houses_cotteges_params/HousesCottagesParams';
import {LandParams} from '@src/components/post/create_post/form_page/params_form/params_forms/land_params/LandParams';
import {ParkingLotsBoxes} from '@src/components/post/create_post/form_page/params_form/params_forms/parking_lots_boxes_params/ParkingLotsBoxes';
import {CommercialPropertyParams} from '@src/components/post/create_post/form_page/params_form/params_forms/commercial_property_params/CommercialPropertyParams';
import {RegularParams} from '@src/components/post/create_post/form_page/params_form/params_forms/regular_params/RegularParams';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {CarParams} from '@src/components/post/create_post/form_page/params_form/params_forms/car_params/CarParams';
import {fractionalFields, numericFields, optionFields} from '@src/common_data/form_fields';
import {numberRegEx} from '@src/common_data/reg_exs';
import {useStyles} from './useStyles';


export type CategoriesCommonType = {
    isPreview?: boolean,
    filters,
    formik: FormikType<any>,
} & WithT;

type RegularFormPropsType = {
    filters,
    post,
    setPost,
    type,
    categoryName: string,
    subCategory,
    isPreview: boolean,
    currentFormIndex: number,
    handleNextFormOpen: () => void,
    handleFormOpen: (k) => () => void,
} & WithT;

export const ParamsFormContainer: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        isPreview,
        filters,
        post,
        setPost,
        categoryName,
        type,
        subCategory,
        currentFormIndex,
        handleFormOpen,
        handleNextFormOpen
    } = props;

    const dispatch = useDispatch();

    const isCarCtgr = categoryName === 'car';

    const isMadeInUzb = subCategory.name === 'madeInUzb';
    const isApartments = subCategory.name === 'apartments';
    const isHousesCottages = subCategory.name === 'housesCottages';

    const titleTxtLimit = 50;

    const [valuesByYear, setValuesByYear] = useState<any>({});

    const onSubmit = (values) => {
        if (currentFormIndex === 3) {
            const preparedValues = prepareParamsData({...values});

            post.title = values.title;
            post[categoryName] = {
                ...preparedValues,
                [`${categoryName}_id`]: subCategory.id
            };

            if (type) {
                post[categoryName].type_id = type.id ?? preparedValues.type_id;
            }

            setPost({...post});
        }
        handleNextFormOpen();
    };

    const initVals: any = {title: ''};

    if (isCarCtgr) {
        initVals.model = null;
        initVals.year = null;
        initVals.broken = false;
        initVals.mileage = '';
        initVals.engine_capacity = '';
    }

    if (isApartments || isHousesCottages) {
        if (isApartments) {
            initVals.floor = null;
        } else {
            initVals.land_area = null;
            initVals.general_area = null;
        }
        initVals.rooms = null;
        initVals.number_of_floors = null;
    }

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        setTouched,
        handleSubmit
    } = formik;

    const handleTitle = ({target: {name, value}}) => {
        if (titleTxtLimit >= value.length) {
            setValues({...values, [name]: value});
        }
    };

    const handleInput = ({target: {name, value}}) => {
        const isNumericField = numericFields.some((n => n === name));
        const isFractionalField = fractionalFields.some((n => n === name));

        if (isNumericField && RegExp(numberRegEx).test(value)) {
            if ((!isFractionalField) || (isFractionalField && value.length < 4)) {
                if (isFractionalField && value.length === 2 && value[1] !== '.') {
                    value = value.replace(/(?<=^.{1})./, `.${value[1]}`);
                }
                setValues({...values, [name]: value});
            }
        }
    };

    const handleSelect = async (name, value) => {
        try {
            let newVals = {...values, [name]: value};
            if (isMadeInUzb) {
                const initVals = {
                    title: '',
                    manufacturer: null,
                    model: null,
                    year: null,
                    body: null,
                    position: null,
                    transmission: null,
                    drive: null,
                    engine_type: null,
                    engine_capacity: '',
                    mileage: '',
                    broken: false
                };
                if (name === 'manufacturer' || name === 'model' || name === 'year' || name === 'position') {
                    if (name === 'manufacturer') {
                        newVals = {
                            ...initVals,
                            title: values.title,
                            manufacturer: value
                        };
                        setValuesByYear({});
                    }
                    if (name === 'model') {
                        newVals = {
                            ...initVals,
                            title: values.title,
                            manufacturer: values.manufacturer,
                            model: value
                        };
                        setValuesByYear({});
                    }
                    if (name === 'year') {
                        if (value) {
                            const [valsByYear] = (await userAPI.getCarDataByYear(values.model.id, value.id)).bodies;

                            newVals = {
                                ...initVals,
                                title: values.title,
                                manufacturer: values.manufacturer,
                                model: values.model,
                                year: value,
                                body: valsByYear.body
                            };

                            // normalize positions structure
                            valsByYear.positions = valsByYear.positions.map(pos => {
                                const vals = {id: pos.id, name: pos.name};
                                Object.keys(pos).forEach(k => {
                                    if (Array.isArray(pos[k]) && !!pos[k].length) {
                                        const [valKey] = Object.keys(pos[k][0]);
                                        const isOptionKey = optionFields.some(optKey => optKey === valKey);
                                        vals[valKey] = isOptionKey
                                                       ? pos[k].map(opt => opt[valKey])
                                                       : pos[k][0][valKey];
                                    }
                                });
                                return vals;
                            });

                            setValuesByYear(valsByYear);
                        } else {
                            // Reset values by year
                            newVals = {
                                ...initVals,
                                title: values.title,
                                manufacturer: values.manufacturer,
                                model: values.model
                            };
                        }
                    }
                    if (name === 'position') {
                        const valsByPosition = {};

                        if (value) {
                            Object.keys(value).forEach(key => {
                                if (Array.isArray(value[key])) {
                                    valsByPosition[key] = [...value[key]];
                                } else if (typeof value[key] === 'object') {
                                    if (key === 'engine_capacity') valsByPosition[key] = value[key].name;
                                    else valsByPosition[key] = {...value[key]};
                                }
                            });

                            newVals = {
                                ...initVals,
                                ...valsByPosition,
                                title: values.title,
                                manufacturer: values.manufacturer,
                                model: values.model,
                                year: values.year,
                                body: values.body,
                                position: value,
                                mileage: values.mileage,
                                broken: values.broken
                            };

                        } else {
                            // Reset values by position
                            newVals = {
                                ...initVals,
                                title: values.title,
                                manufacturer: values.manufacturer,
                                model: values.model,
                                year: values.year,
                                body: values.body
                            };
                        }
                    }
                    setTouched({});
                }
            }
            setValues(newVals);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleCheckbox = ({target}) => {
        setValues({...values, [target.name]: target.checked});
    };

    const handleOptionCheckbox = (name, item) => {
        if (values[name]) {
            const isExst = values[name].some(({id}) => id === item.id);
            if (isExst) {
                values[name].forEach(({id}, i) => id === item.id && values[name].splice(i, 1));
            } else {
                values[name].push(item);
            }
        } else {
            values[name] = [item];
        }
        setValues({...values});
    };

    const getParamsForm = () => {
        switch (subCategory.name) {
            case 'foreignCars':
            case 'madeInUzb':
                return <CarParams
                    t={t}
                    isMadeInUzb={isMadeInUzb}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    valuesByYear={valuesByYear}
                    handleSelect={handleSelect}
                    handleInput={handleInput}
                    handleCheckbox={handleCheckbox}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'apartments':
                return <ApartmentsParams
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleInput={handleInput}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'housesCottages':
                return <HousesCottagesParams
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'land':
                return <LandParams
                    t={t}
                    isPreview={isPreview}
                    type={type}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />;
            case 'parkingLotsAndBoxes':
                return <ParkingLotsBoxes
                    t={t}
                    isPreview={isPreview}
                    type={type}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />;
            case 'commercialProperty':
                return <CommercialPropertyParams
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            default:
                return <RegularParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                />;
        }
    };

    const setRequireVals = () => {
        const reqVals: any = {...values};
        const isHousesCottages = subCategory.name === 'housesCottages';

        Object.keys(filters).forEach(k => {
            if (!values[k]) {
                if (typeof values[k] !== 'string' && isRequired(k)) {
                    if (k === 'area') {
                        if (!isHousesCottages) reqVals.area = null;
                        reqVals.area_id = filters[k][0].id || null;
                    } else reqVals[k] = null;
                }
            }
        });

        setValues(reqVals);
    };

    useEffect(() => {
        setRequireVals();
    }, [filters]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    <CustomAccordion
                        icon={<ParametersIcon/>}
                        title={t('parameters')}
                        isPreview={isPreview}
                        nextButtonTxt={t('appearance')}
                        open={currentFormIndex === 3}
                        handleEdit={handleFormOpen(3)}
                        isEditable={currentFormIndex < 3}
                    >
                        <Grid container className='title-wrapper'>
                            <Grid item xs={6}>
                                {isPreview
                                 ? <Typography variant="subtitle1">
                                     <strong>
                                         {t('title')}:&nbsp;
                                     </strong>
                                     {values.title}
                                 </Typography>
                                 : <FormikField
                                     t={t}
                                     name='title'
                                     labelText='title'
                                     limit={titleTxtLimit}
                                     value={values.title}
                                     onChange={handleTitle}
                                     placeholder={t('filters:example_title')}
                                     errorMsg={getErrorMsg(errors.title, touched.title, t)}
                                 />}
                            </Grid>
                        </Grid>
                        {getParamsForm()}
                    </CustomAccordion>
                </form>
            </FormikProvider>
        </div>
    );
};

function prepareParamsData(data) {
    return Object.keys(data).reduce<any>((acc, key) => {
        const isArray = Array.isArray(data[key]);
        const isStrOrBool = typeof data[key] === 'string' || typeof data[key] === 'boolean';
        const isFracField = fractionalFields.some(val => val === key);
        const isZeroField = isFracField && RegExp(/0$|0?\.0?$/).test(data[key]);

        if (data[key] !== undefined && key !== 'title') {
            if (isArray) {
                if (data[key].length) {
                    acc[key] = data[key].map(({id}) => ({id}));
                }
            } else if (isStrOrBool && !isZeroField) {
                acc[key] = data[key];
            } else if (typeof data[key] === 'object') {
                acc[`${key}_id`] = data[key].id;
            }
        }

        return acc;
    }, {});
}