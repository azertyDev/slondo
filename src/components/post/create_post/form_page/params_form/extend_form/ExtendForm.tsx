import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {Typography} from "@material-ui/core";
import {FormikProvider, useFormik} from "formik";
import {FlatIcon} from "@src/components/elements/icons";
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {isRequired, prepareDataForCreate} from "@src/helpers";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {Apartments} from "./apartments_form/Apartments";
import {HousesCottages} from "./houses_cottages_form/HousesCottages";
import {useStyles} from './useStyles';


type RegularFormPropsType = {
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

export const ExtendForm: FC<RegularFormPropsType> = (props) => {
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

    const formIndex = 4;

    const onSubmit = (values) => {
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

    const handleCheckbox = ({target}) => {
        setValues({...values, [target.name]: target.checked});
    };

    const formBySubCategory = () => {
        switch (subCategory.name) {
            case 'apartments':
                return <Apartments
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                />
            default:
                return <HousesCottages
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
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

        if ((subCategory.id === 1 || subCategory.id === 2) && (!values.floor || !values.number_of_floors)) {
            values.floor = null;
            values.number_of_floors = null;
        }

        setValues({...values});
    };

    useEffect(() => {
        setRequireVals();
    }, [filters]);

    console.log('values', values)
    // console.log('subCategory', subCategory)
    console.log('errors', errors)
    console.log('filters', filters)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    <CustomAccordion
                        icon={<FlatIcon/>}
                        isPreview={isPreview}
                        open={currentFormIndex === formIndex}
                        isEditable={currentFormIndex < formIndex}
                        handleEdit={handleFormOpen(formIndex)}
                        nextButtonTxt={t('parameters')}
                        title={t(`categories:${subCategory.name}`)}
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
                                    errors={errors}
                                    touched={touched}
                                    value={values.title}
                                    onChange={handleInput}
                                    style={{width: '50%'}}
                                    placeholder={t('exampleTitle')}
                                    className={errors.title && touched.title ? 'error-border' : ''}
                                />}
                        </div>
                        {formBySubCategory()}
                    </CustomAccordion>
                </form>
            </FormikProvider>
        </div>
    );
};