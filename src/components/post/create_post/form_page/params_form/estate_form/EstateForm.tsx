import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {FlatIcon} from "@src/components/elements/icons";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {isRequired, prepareDataForCreate} from "@src/helpers";
import {FormikProvider, useFormik} from "formik";
import {Apartments} from "@src/components/post/create_post/form_page/params_form/estate_form/apartments/Apartments";
import {useStyles} from "./useStyles";


type RegularFormPropsType = {
    filters,
    post,
    setPost,
    mark,
    isPreview: boolean,
    handleFormOpen: (k) => () => void,
    currentFormIndex: number,
    titleComponent,
    type,
    subCategory,
} & WithT;

export const EstateForm: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        mark,
        post,
        setPost,
        filters,
        isPreview,
        handleFormOpen,
        currentFormIndex,
        titleComponent,
        type,
        subCategory
    } = props;

    const formIndex = 4;
    const nextFormIndex = 3;

    const onSubmit = (values) => {
        const createData = prepareDataForCreate({...values});
        post.title = values.title;
        post[mark] = {
            ...post[mark],
            ...createData,
            [`${mark}_id`]: subCategory ? subCategory.id : '',
            type_id: type ? type.id : createData.type_id ?? ''
        };
        setPost({...post});
        handleFormOpen(nextFormIndex)();
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
        handleSubmit,
        handleBlur
    } = formik;

    const handleInput = ({target: {name, value}}) => {
        setValues({...values, [name]: value});
    };

    const formBySubCategory = () => {
        switch (subCategory.name) {
            case 'apartments':
                return <Apartments
                    t={t}
                    filters={filters}
                    values={values}
                    setValues={setValues}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                />
        }
    };

    const setRequireVals = () => {
        Object.keys(filters).forEach(k => {
            if (!values[k] && isRequired(k)) {
                values[k] = null;
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
    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    icon={<FlatIcon/>}
                    title={t('flat')}
                    isPreview={isPreview}
                    open={currentFormIndex === formIndex}
                    isEditable={currentFormIndex < formIndex}
                    handleEdit={handleFormOpen(formIndex)}
                    nextButtonTxt={t('parameters')}
                >
                    <div className={classes.root}>
                        {titleComponent(values, errors, touched, handleInput)}
                        {formBySubCategory()}
                    </div>
                </CustomAccordion>
            </form>
        </FormikProvider>
    )
};