import React, {FC, Fragment, useEffect} from "react";
import {WithT} from "i18next";
import {FormikProvider, useFormik} from "formik";
import {Grid, Typography} from "@material-ui/core";
import {
    autoSelectKeys,
    excludedKeys,
    numericFields,
    requireFields
} from '@src/common_data/form_fields';
import {isRequired} from '@root/validation_schemas/createPostSchemas';
import {CustomAccordion} from '../accordion/CustomAccordion';
import {numberPrettier} from '@src/helpers';
import {numberRegEx} from '@src/common_data/reg_ex';
import {ParametersIcon} from '@src/components/elements/icons';
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {CustomSelect} from "@src/components/elements/customSelect/CustomSelect";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {useStyles} from './useStyles';


const prepareData = data => (
    Object.keys(data).reduce<any>((acc, key) => {
        if (data[key]) {
            if (typeof data[key] === 'object' && Object.keys(data[key]).length) {
                acc[`${key}_id`] = data[key].id;
            } else {
                acc[key] = data[key];
            }
        }
        return acc;
    }, {})
);

type ParamsFormPropsType = {
    isPreview: boolean,
    mark: string,
    filters,
    subCategory,
    type,
    post,
    setPost,
    currentFormIndex: number,
    handleFormOpen: (k) => () => void
} & WithT;

export const ParamsForm: FC<ParamsFormPropsType> = (props) => {
    const {
        t,
        isPreview,
        mark,
        filters,
        subCategory,
        type,
        post,
        setPost,
        currentFormIndex,
        handleFormOpen
    } = props;

    const formIndex = 1;
    const nextFormIndex = 2;

    const onSubmit = (values) => {
        const createData = prepareData({...values});
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
        errors,
        values,
        handleBlur,
        setValues,
        touched,
        handleSubmit
    } = formik;

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

    const handleSelect = (value, key) => {
        setValues({...values, [key]: value});
    };

    const setDefaultVals = () => {
        if (mark !== 'free') {
            Object.keys(filters).forEach(key => {
                const isRequireKey = requireFields.some(k => k === key);
                const isAutoSelectKey = autoSelectKeys.some(k => k === key);
                if ((isRequireKey || isAutoSelectKey) && !values[key]) {
                    values[key] = isAutoSelectKey ? filters[key][0] : null;
                }
            });
            setValues({...values});
        }
    };

    useEffect(() => {
        setDefaultVals();
    }, [filters]);
    console.log('params', values)
    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    icon={<ParametersIcon/>}
                    isPreview={isPreview}
                    open={currentFormIndex === formIndex}
                    isEditable={currentFormIndex > formIndex}
                    handleEdit={handleFormOpen(formIndex)}
                    title={t('parameters')}
                    nextButtonTxt={t('appearance')}
                >
                    <div className={classes.root}>
                        <div className='title-wrapper'>
                            {isPreview
                                ? <Typography variant="subtitle1">
                                    <strong>
                                        {t('postTitle')}:&nbsp;
                                    </strong>
                                    {values.title}
                                </Typography>
                                : <>
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {t('postTitle')}:
                                            {<span className='error-text'>*&nbsp;</span>}
                                        </strong>
                                        {errors.title
                                        && touched.title
                                        && <span className='error-text'>{t(errors.title as string)}</span>}
                                    </Typography>
                                    <CustomFormikField
                                        style={{width: '50%'}}
                                        name='title'
                                        value={values.title}
                                        onChange={handleInput}
                                        placeholder={t('exampleTitle')}
                                        className={errors.title && touched.title ? 'error-border' : ''}
                                    />
                                </>}
                        </div>
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
            const isNoEmptyArray = Array.isArray(filters[key]) && filters[key].length;
            const isExcludeValue = excludedKeys.some(k => k === key);

            if (!isExcludeValue && isNoEmptyArray) {
                return (
                    <Fragment key={key}>
                        <Grid
                            item
                            container
                            sm={4}
                            xs={12}
                        >
                            <Typography variant="subtitle1">
                                <strong>
                                    {t(key)}
                                    {isRequired(key) && <span className='error-text'>*&nbsp;</span>}
                                </strong>
                                {errors[key] && touched[key] && (
                                    <span className='error-text'>
                                        {t(errors[key] as string)}
                                    </span>
                                )}
                            </Typography>
                            <Grid container>
                                <Grid item xs={12}>
                                    <CustomSelect
                                        t={t}
                                        name={key}
                                        values={values}
                                        items={filters[key]}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                        error={!!(errors[key] && touched[key])}
                                    />
                                </Grid>
                            </Grid>
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