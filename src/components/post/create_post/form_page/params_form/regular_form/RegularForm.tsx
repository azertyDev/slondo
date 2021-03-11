import React, {FC, Fragment, useEffect} from "react";
import {Grid, Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {FormikProvider, useFormik} from "formik";
import {numberRegEx} from "@src/common_data/reg_exs";
import {excludedKeys, numericFields} from "@src/common_data/form_fields";
import {regularFormSchema} from "@root/validation_schemas/createPostSchemas";
import {CustomSelect} from "@src/components/elements/customSelect/CustomSelect";
import {ParametersIcon} from "@src/components/elements/icons";
import {CustomAccordion} from "@src/components/post/create_post/form_page/accordion/CustomAccordion";
import {isRequired, numberPrettier, prepareDataForCreate} from "@src/helpers";
import {useStyles} from "./useStyles";


type RegularFormPropsType = {
    mark,
    post,
    setPost,
    isPreview: boolean,
    filters,
    titleComponent?,
    handleFormOpen: (k) => () => void,
    currentFormIndex: number,
    type,
    subCategory,
} & WithT;

export const RegularForm: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        mark,
        post,
        setPost,
        filters,
        isPreview,
        handleFormOpen,
        titleComponent,
        type,
        subCategory,
        currentFormIndex
    } = props;

    const formIndex = 3;
    const nextFormIndex = 2;

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
        validationSchema: regularFormSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur,
        handleSubmit
    } = formik;

    const handleSelect = (key, value) => {
        setValues({...values, [key]: value});
    };

    const handleInput = ({target: {name, value}}) => {
        const isNumericField = numericFields.some(n => n === name);

        if (isNumericField) {
            if (numberRegEx.test(value)) {
                if (name !== 'year') {
                    value = numberPrettier(value);
                }
                values[name] = value;
            }
        } else {
            values[name] = value;
        }

        setValues({...values});
    };

    const setDefaultVals = () => {
        Object.keys(filters).forEach(k => {
            if (!values[k] && isRequired(k)) {
                setValues({...values, [k]: null})
            }
        });
    };

    useEffect(() => {
        setDefaultVals();
    }, [filters]);

    // console.log(errors)
    // console.log(values)
    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    icon={<ParametersIcon/>}
                    isPreview={isPreview}
                    open={currentFormIndex === formIndex}
                    isEditable={currentFormIndex < formIndex}
                    handleEdit={handleFormOpen(formIndex)}
                    title={t('parameters')}
                    nextButtonTxt={t('appearance')}
                >
                    <div className={classes.root}>
                        {titleComponent && titleComponent(values, errors, touched, handleInput)}
                        <Grid container spacing={2}>
                            {isPreview
                                ? Object.keys(values).map(key => {
                                    if (!!values[key]) {
                                        let value = values[key];
                                        if (Object.keys(values[key]).length) {
                                            if (values[key].name) {
                                                value = values[key].name;
                                                return (
                                                    <Grid
                                                        item
                                                        key={key}
                                                        sm={4}
                                                        xs={12}
                                                    >
                                                        <Typography variant="subtitle1">
                                                            <strong>
                                                                {t(key)}:&nbsp;
                                                            </strong>
                                                            {value}
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
    )

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
                        {values[key] && Object.keys(values[key]).length && (
                            getFields(values[key])
                        )}
                    </Fragment>
                )
            }
        })
    }
};