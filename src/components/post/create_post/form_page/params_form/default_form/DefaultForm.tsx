import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {Typography} from "@material-ui/core";
import {FormikProvider, useFormik} from "formik";
import {FlatIcon, ParametersIcon} from "@src/components/elements/icons";
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {isRequired, prepareDataForCreate} from "@src/helpers";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {LandParams} from "@src/components/post/create_post/form_page/params_form/default_form/land_params/LandParams";
import {ParkingLotsBoxes} from "@src/components/post/create_post/form_page/params_form/default_form/parking_lots_boxes_params/ParkingLotsBoxes";
import {CommercialPropertyParams} from "@src/components/post/create_post/form_page/params_form/default_form/commercial_property_params/CommercialPropertyParams";
import {DefaultParams} from "@src/components/post/create_post/form_page/params_form/default_form/default_params/DefaultParams";
import {useStyles} from './useStyles';


type DefaultFormPropsType = {
    filters,
    post,
    setPost,
    mark,
    isPreview: boolean,
    isExtendSubCtgr: boolean,
    currentFormIndex: number,
    type,
    subCategory,
    handleNextFormOpen: () => void,
    handleFormOpen: (k) => () => void,
} & WithT;

export const DefaultForm: FC<DefaultFormPropsType> = (props) => {
    const {
        t,
        mark,
        type,
        filters,
        post,
        setPost,
        isPreview,
        isExtendSubCtgr,
        subCategory,
        handleFormOpen,
        currentFormIndex,
        handleNextFormOpen
    } = props;

    const formIndex = 3;

    const isEstate = mark === 'estate' && !isExtendSubCtgr;

    const icon = isEstate ? <FlatIcon/> : <ParametersIcon/>;
    const title = isEstate ? t(`categories:${subCategory.name}`) : t('parameters');

    const onSubmit = (values) => {
        console.log(values)
        if (!isExtendSubCtgr) {
            const createData = prepareDataForCreate({...values});
            post.title = values.title;
            post[mark] = {
                ...post[mark],
                ...createData,
                [`${mark}_id`]: subCategory.id,
                type_id: type?.id ?? createData.type_id ?? ''
            };
            setPost({...post});
        }
        handleNextFormOpen();
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {
            title: ''
        },
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleSubmit
    } = formik;

    const handleInput = ({target: {name, value}}) => {
        setValues({...values, [name]: value});
    };

    const handleSelect = (key, value) => {
        setValues({...values, [key]: value});
    };

    const handleOptionCheckbox = (name, item) => () => {
        const isExst = values[name].some(({id}) => id === item.id);

        if (isExst) {
            values[name].forEach(({id}, i) =>
                id === item.id && values[name].splice(i, 1));
        } else {
            values[name].push(item);
        }

        setValues({...values});
    };

    const formBySubCategory = () => {
        switch (subCategory.name) {
            case 'land':
                return <LandParams
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />
            case 'parkingLotsAndBoxes':
                return <ParkingLotsBoxes
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />
            case 'commercialProperty':
                return <CommercialPropertyParams
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />
            default:
                return <DefaultParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                />
        }
    };

    const setRequireVals = () => {
        Object.keys(filters).forEach(k => {
            if (!values[k]) {
                if (isRequired(k)) {
                    if (k === 'area') {
                        values.area_id = filters[k][0].id || null;
                    }
                    values[k] = null;
                } else if (k === 'infrastructure' || k === 'amenities') {
                    values[k] = [];
                }
            }
        });

        setValues({...values});
    };

    useEffect(() => {
        setRequireVals();
    }, [filters]);

    console.log('values', values)
    console.log('errors', errors)
    // console.log('filters', filters)
    // console.log('subCategory', subCategory)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    <CustomAccordion
                        icon={icon}
                        title={title}
                        isPreview={isPreview}
                        nextButtonTxt={t('appearance')}
                        open={currentFormIndex === formIndex}
                        handleEdit={handleFormOpen(formIndex)}
                        isEditable={currentFormIndex < formIndex}
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
                                        errors={errors}
                                        touched={touched}
                                        value={values.title}
                                        onChange={handleInput}
                                        style={{width: '50%'}}
                                        placeholder={t('exampleTitle')}
                                        className={errors.title && touched.title ? 'error-border' : ''}
                                    />}
                            </div>
                        )}
                        {formBySubCategory()}
                    </CustomAccordion>
                </form>
            </FormikProvider>
        </div>
    );
};