import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {FormikProvider, useFormik} from "formik";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {
    estateTxtFields,
    excludedKeys,
    fieldKeysWithTxt,
    numericFields,
    optionKeys,
} from '@src/common_data/form_fields';
import {isRequired} from '@root/validation_schemas/createPostSchemas';
import {CustomAccordion} from '../accordion/CustomAccordion';
import {numberPrettier} from '@src/helpers';
import {numberRegEx} from '@src/common_data/reg_ex';
import {ParametersIcon} from '@src/components/elements/icons';
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {CustomSelect} from "@src/components/elements/customSelect/CustomSelect";
import {useStyles} from './useStyles';


const prepareData = data => (
    Object.keys(data).reduce((acc, key) => {
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
    openKey: boolean,
    isPreview: boolean,
    mark,
    filters,
    subCategory,
    type,
    post,
    setPost,
    handleFormOpen: (k, e) => void
} & WithT;

export const ParamsForm: FC<ParamsFormPropsType> = (props) => {
    const {
        t,
        openKey,
        isPreview,
        mark,
        filters,
        subCategory,
        type,
        post,
        setPost,
        handleFormOpen
    } = props;

    const formKey = 'params';
    const nextFormName = 'appearance';

    const onSubmit = (values) => {
        values = prepareData(values);
        post[mark] = {
            ...post[mark],
            ...values,
            [`${mark}_id`]: subCategory ? subCategory.id : null,
            type_id: type ? type.id : null,
        };
        setPost({...post});
        handleFormOpen(nextFormName, true);
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {},
        validationSchema: paramsFormSchema,
    });

    const {
        errors,
        values,
        handleBlur,
        setValues,
        touched,
        handleSubmit,
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
        }

        setValues({...values});
    };

    const handleSelect = (value, key) => {
        setValues({...values, [key]: value});
    };

    const handleParamsCheckbox = (keyName, value?) => ({target}) => {
        if (values[keyName] && !!value) {
            if (values[keyName].some(({id}) => id === value.id)) {
                values[keyName].forEach(({id}, index) => {
                    if (id === value.id) {
                        values[keyName].splice(index, 1);
                    }
                });
            } else {
                values[keyName].push(value);
            }
        } else {
            values[keyName] = target.checked;
        }
        setValues({...values});
    };

    const setDefaultVals = () => {
        if (mark !== 'free') {

            Object.keys(filters).forEach(key => {
                const isExcludedKey = excludedKeys.some(k => k === key);
                const isFieldKeyWithTxt = fieldKeysWithTxt.some(k => k === key);
                const isEstateTxtField = estateTxtFields.some(k => k === key);
                const isOptionKey = optionKeys.some(k => k === key);

                if (!isExcludedKey) {
                    if (Array.isArray(filters[key])) {
                        if (filters[key].length) {
                            if (isFieldKeyWithTxt) {
                                values[key] = {...filters[key][0], txt: ''};
                            } else if (!values[key]) {
                                values[key] = null;
                            } else if (isOptionKey) {
                                values[key] = [];
                            }
                        }
                    } else if (!isEstateTxtField && !values[key]) {
                        values[key] = filters[key];
                    }
                }
            });

            setValues({...values});
        }
    };

    useEffect(() => {
        setDefaultVals();
    }, [filters]);

    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    formKey={formKey}
                    handleOpen={handleFormOpen}
                    open={openKey || isPreview}
                    isPreview={isPreview}
                    title={t('parameters')}
                    nextButtonTxt={t(nextFormName)}
                    icon={<ParametersIcon/>}
                >
                    <Grid
                        container
                        spacing={2}
                        className={classes.root}
                    >
                        {
                            isPreview
                                ? Object.keys(values).map(key => {
                                    if (!!values[key]) {
                                        let value = values[key];

                                        if (typeof values[key] === 'object') {
                                            if (values[key].id) {
                                                value = values[key].name;
                                            } else return;
                                        }

                                        return (
                                            <Grid
                                                item
                                                key={key}
                                                sm={6}
                                                xs={12}
                                                className='grid-item'
                                            >
                                                <Typography variant="subtitle1">
                                                    <strong>
                                                        {t(key)}:
                                                    </strong>
                                                    &nbsp;{value}
                                                </Typography>
                                            </Grid>
                                        )
                                    }
                                })
                                : Object.keys(filters).map(key => {
                                    const isExcludeValue = excludedKeys.some(k => k === key);
                                    const isOptionsKey = optionKeys.some(k => k === key) && filters[key].length;
                                    const isFieldKeyWithTxt = fieldKeysWithTxt.some(k => k === key);
                                    const isNoEmptyArray = Array.isArray(filters[key]) && filters[key].length;

                                    return !isExcludeValue && <Grid
                                        item
                                        container
                                        xs={12}
                                        key={key}
                                        className='grid-item'
                                        sm={isOptionsKey ? 12 : 6}
                                    >
                                        {
                                            isNoEmptyArray
                                                ? <>
                                                    <Typography variant="subtitle1">
                                                        <strong>
                                                            {t(key)}
                                                            {isRequired(key) && <span className='error-text'>*</span>}
                                                        </strong>
                                                        {
                                                            errors[key]
                                                            && touched[key]
                                                            && <span className='error-text'>
                                                                &nbsp;{t(errors[key] as string)}
                                                            </span>
                                                        }
                                                    </Typography>
                                                    <Grid container>
                                                        {
                                                            isFieldKeyWithTxt && (
                                                                <Grid item xs={9}>
                                                                    <TextField
                                                                        fullWidth
                                                                        name={key}
                                                                        variant='outlined'
                                                                        onChange={handleInput}
                                                                        value={values[key] ? values[key].txt : ''}
                                                                        className={errors[key] && touched[key] ? 'error-border' : ''}
                                                                    />
                                                                </Grid>
                                                            )
                                                        }
                                                        <Grid item xs={isFieldKeyWithTxt ? 3 : 6}>
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
                                                </>
                                                : (
                                                    !Array.isArray(filters[key]) && (
                                                        <Grid item xs={6}>
                                                            <Typography variant="subtitle1">
                                                                <strong>
                                                                    {t(key)}:
                                                                </strong>
                                                                {isRequired(key) && <span className='error-text'>*</span>}
                                                                {
                                                                    errors[key]
                                                                    && touched[key]
                                                                    && <span className='error-text'>
                                                                        &nbsp;{errors[key]}
                                                                    </span>
                                                                }
                                                            </Typography>
                                                            {
                                                                filters[key] === 1
                                                                    ? <Checkbox
                                                                        color='primary'
                                                                        checked={!!values[key]}
                                                                        onChange={handleParamsCheckbox(key)}
                                                                    />
                                                                    : <TextField
                                                                        fullWidth
                                                                        name={key}
                                                                        variant='outlined'
                                                                        value={values[key] ?? ''}
                                                                        onChange={handleInput}
                                                                        className={errors[key] && touched[key] ? 'error-border' : ''}
                                                                    />
                                                            }
                                                        </Grid>
                                                    )
                                                )
                                        }
                                    </Grid>
                                })
                        }
                    </Grid>
                </CustomAccordion>
            </form>
        </FormikProvider>
    )
};