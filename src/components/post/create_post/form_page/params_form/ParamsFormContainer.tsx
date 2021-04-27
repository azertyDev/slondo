import React, {FC, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {Typography} from '@material-ui/core';
import {FormikProvider, useFormik} from 'formik';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {getErrorMsg, isRequired, prepareDataForCreate} from '@src/helpers';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {ApartmentsForm} from '@src/components/post/create_post/form_page/params_form/additional_forms/apartments_form/ApartmentsForm';
import {HousesCottagesForm} from '@src/components/post/create_post/form_page/params_form/additional_forms/houses_cottages_form/HousesCottagesForm';
import {CarForm} from '@src/components/post/create_post/form_page/params_form/additional_forms/car_form/CarForm';
import {CustomAccordion} from '@src/components/post/create_post/form_page/components/accordion/CustomAccordion';
import {CarIcon, FlatIcon, ParametersIcon} from '@src/components/elements/icons';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {ApartmentsParams} from '@src/components/post/create_post/form_page/params_form/params_forms/apartments_params/ApartmentsParams';
import {HousesCottagesParams} from '@src/components/post/create_post/form_page/params_form/params_forms/houses_cotteges_params/HousesCottagesParams';
import {LandParams} from '@src/components/post/create_post/form_page/params_form/params_forms/land_params/LandParams';
import {ParkingLotsBoxes} from '@src/components/post/create_post/form_page/params_form/params_forms/parking_lots_boxes_params/ParkingLotsBoxes';
import {CommercialPropertyParams} from '@src/components/post/create_post/form_page/params_form/params_forms/commercial_property_params/CommercialPropertyParams';
import {RegularParams} from '@src/components/post/create_post/form_page/params_form/params_forms/regular_params/RegularParams';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {CarParams} from '@src/components/post/create_post/form_page/params_form/params_forms/car_params/CarParams';
import {useStyles} from './useStyles';
import {optionKeys} from '@src/common_data/form_fields';


type RegularFormPropsType = {
    filters,
    post,
    setPost,
    type,
    categoryName: string,
    subCategory,
    isPreview: boolean,
    isExtendSubCtgr: boolean,
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
        isExtendSubCtgr,
        currentFormIndex,
        handleFormOpen,
        handleNextFormOpen
    } = props;

    const dispatch = useDispatch();

    const isCar = categoryName === 'car';
    const isEstate = categoryName === 'estate';

    const isMadeInUzb = subCategory.name === 'madeInUzb';
    const isApartments = subCategory.name === 'apartments';
    const isHousesCottages = subCategory.name === 'housesCottages';

    const additionalIcon = isEstate ? <FlatIcon/> : <CarIcon/>;
    const paramsIcon = isEstate ? <FlatIcon/> : <ParametersIcon/>;

    const additionalTitle = t(`categories:${categoryName}`);
    const paramsFormTitle = isExtendSubCtgr ? t('parameters') : t(`categories:${subCategory.name}`);

    const [valuesByYear, setValuesByYear] = useState<any>({});

    const onSubmit = (values) => {
        if (currentFormIndex === 3) {
            const preparedValues = prepareDataForCreate({...values}, filters);
            post.title = values.title;
            post[categoryName] = {
                ...post[categoryName],
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

    if (isCar) {
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

    const handleInput = ({target: {name, value}}) => {
        setValues({...values, [name]: value});
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
                                        const isOptionKey = optionKeys.some(optKey => optKey === valKey);
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
                            Object.keys(value).forEach(key =>
                                valsByPosition[key] = key === 'engine_capacity'
                                                      ? value[key].name
                                                      : value[key]
                            );
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

    const getAdditionalForm = () => {
        switch (subCategory.name) {
            case 'apartments':
                return <ApartmentsForm
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                />;
            case 'housesCottages':
                return <HousesCottagesForm
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                />;
            default:
                return <CarForm
                    t={t}
                    isMadeInUzb={isMadeInUzb}
                    isPreview={isPreview}
                    formik={formik}
                    filters={filters}
                    valuesByYear={valuesByYear}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                />;
        }
    };

    const getParamsForm = () => {
        switch (subCategory.name) {
            case 'foreignCars':
            case 'madeInUzb':
                return <CarParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'apartments':
                return <ApartmentsParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'housesCottages':
                return <HousesCottagesParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
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
        const isHousesCottages = subCategory.name === 'housesCottages';

        const reqVals: any = {...values};

        Object.keys(filters).forEach(k => {
            if (!values[k] && k !== 'engine_capacity') {
                if (isRequired(k)) {
                    if (k === 'area') {
                        reqVals.area_id = filters[k][0].id || null;
                        if (!isHousesCottages) {
                            reqVals.area = null;
                        }
                    } else {
                        reqVals[k] = null;
                    }
                } else if (k === 'infrastructure' || k === 'amenities') {
                    reqVals[k] = [];
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
                    {isExtendSubCtgr && (
                        <div className='acc-wrapper'>
                            <CustomAccordion
                                icon={additionalIcon}
                                title={additionalTitle}
                                isPreview={isPreview}
                                open={currentFormIndex === 4}
                                isEditable={currentFormIndex < 4}
                                handleEdit={handleFormOpen(4)}
                                nextButtonTxt={t('parameters')}
                            >
                                <div className='title-wrapper'>
                                    {isPreview
                                     ? <Typography variant="subtitle1">
                                         <strong>
                                             {t('title')}:&nbsp;
                                         </strong>
                                         {values.title}
                                     </Typography>
                                     : <CustomFormikField
                                         t={t}
                                         name='title'
                                         labelText='title'
                                         value={values.title}
                                         onChange={handleInput}
                                         style={{width: '50%'}}
                                         placeholder={t('filters:example_title')}
                                         errorMsg={getErrorMsg(errors.title, touched.title, t)}
                                     />}
                                </div>
                                {getAdditionalForm()}
                            </CustomAccordion>
                        </div>
                    )}
                    <CustomAccordion
                        icon={paramsIcon}
                        title={paramsFormTitle}
                        isPreview={isPreview}
                        nextButtonTxt={t('appearance')}
                        open={currentFormIndex === 3}
                        handleEdit={handleFormOpen(3)}
                        isEditable={currentFormIndex < 3}
                    >
                        {!isExtendSubCtgr && (
                            <div className='title-wrapper'>
                                {isPreview
                                 ? <Typography variant="subtitle1">
                                     <strong>
                                         {t('title')}:&nbsp;
                                     </strong>
                                     {values.title}
                                 </Typography>
                                 : <CustomFormikField
                                     t={t}
                                     name='title'
                                     labelText='title'
                                     value={values.title}
                                     onChange={handleInput}
                                     style={{width: '50%'}}
                                     placeholder={t('filters:example_title')}
                                     errorMsg={getErrorMsg(errors.title, touched.title, t)}
                                 />}
                            </div>
                        )}
                        {getParamsForm()}
                    </CustomAccordion>
                </form>
            </FormikProvider>
        </div>
    );
};