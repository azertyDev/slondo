import React, {FC, Fragment, useEffect} from "react";
import {WithT} from "i18next";
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {FlatIcon, ParametersIcon} from "@src/components/elements/icons";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {isRequired, prepareDataForCreate} from "@src/helpers";
import {FormikProvider, useFormik} from "formik";
import {Apartments} from "@src/components/post/create_post/form_page/params_form/estate_form/apartments/Apartments";
import {useStyles} from "./useStyles";
import {Grid, Typography} from "@material-ui/core";
import {excludedKeys} from "@src/common_data/form_fields";
import {CustomSelect} from "@src/components/elements/customSelect/CustomSelect";


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

    const handleSelect = (key, value) => {
        setValues({...values, [key]: value});
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
            <form onSubmit={handleSubmit} className={classes.root}>
                <div className='apartments-wrapper'>
                    <CustomAccordion
                        icon={<FlatIcon/>}
                        title={t('apartments')}
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
                </div>
                <CustomAccordion
                    icon={<ParametersIcon/>}
                    isPreview={isPreview}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                    title={t('parameters')}
                    nextButtonTxt={t('appearance')}
                >
                    <div className={classes.root}>
                        <Grid container spacing={2}>
                            {isPreview
                                ? Object.keys(values).map(key => {
                                    if (!!values[key]) {
                                        if (Object.keys(values[key]).length) {
                                            if (values[key].name) {
                                                return (
                                                    <Grid
                                                        item
                                                        sm={4}
                                                        xs={12}
                                                        key={key}
                                                    >
                                                        <Typography variant="subtitle1">
                                                            <strong>
                                                                {t(key)}:&nbsp;
                                                            </strong>
                                                            {values[key].name}
                                                        </Typography>
                                                    </Grid>
                                                )
                                            }
                                        }
                                    }
                                })
                                : getFields(filters)}
                        </Grid>
                    </div>
                </CustomAccordion>
            </form>
        </FormikProvider>
    );

    function getFields(filters) {
        return Object.keys(filters).map(key => {
            const isExcludeValue = excludedKeys.some(k => k === key);
            const isNoEmptyArray = Array.isArray(filters[key]) && filters[key].length;

            if (!isExcludeValue && isNoEmptyArray) {
                return (
                    <Fragment key={key}>
                        <Grid
                            item
                            container
                            sm={4}
                            xs={12}
                        >
                            <CustomSelect
                                t={t}
                                name={key}
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters[key]}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                    </Fragment>
                )
            }
        })
    }
};