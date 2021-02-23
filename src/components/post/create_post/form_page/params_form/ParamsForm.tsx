import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {FormikProvider, useFormik} from "formik";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {
    estateTxtFields,
    excludedKeys,
    fieldKeysWithTxt,
    noSelect,
    numericFields,
    optionKeys
} from "@src/common_data/form_fields";
import {isRequired} from "@root/validation_schemas/createPostSchema";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {CustomAccordion} from "../accordion/CustomAccordion";
import {numberPrettier} from "@src/helpers";
import {numberRegEx} from "@src/common_data/reg_ex";
import {useStyles} from "./useStyles";


type ParamsFormPropsType = {
    open: boolean,
    mark,
    filters,
    category,
    subCategory,
    type,
    handleSetPost
} & WithT;

const prepareData = (data) => (
    Object.keys(data).reduce((acc, key) => {
        if (typeof data[key] === 'object' && Object.keys(data[key]).length) {
            acc[`${key}_id`] = data[key].id;
        } else {
            acc[key] = data[key];
        }
        return acc;
    }, {})
);

export const ParamsForm: FC<ParamsFormPropsType> = (props) => {
    const {
        t,
        open,
        mark,
        filters,
        category,
        subCategory,
        type,
        handleSetPost
    } = props;

    const initForm = {
        [`${mark}_id`]: category.id,
        sub_type_id: subCategory ? subCategory.id : null,
        type_id: type ? type.id : null,
    };

    const onSubmit = (values) => {
        values = prepareData(values);
        handleSetPost({[mark]: values});
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: null,
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

    const handleMenuItem = (valueKey: string) => (newValue, setAnchor) => () => {
        setAnchor(null);
        setValues({...values, [valueKey]: newValue});
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

    useEffect(() => {
        setDefaultVals();
    }, [filters]);

    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    open={open}
                    title={t('parameters')}
                    nextButtonTxt={t('appearance')}
                    icon='/icons/parameters.svg'
                >
                    <Grid
                        container
                        spacing={2}
                        className={classes.root}
                    >
                        {Object.keys(filters).map(key => {
                            const postParamsError = errors.values;
                            const postParamsTouched = touched.values;

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
                                    // isOptionsKey
                                    //     ? <>
                                    //         <Typography variant="subtitle1">
                                    //             <strong>
                                    //                 {t(key)}:
                                    //             </strong>
                                    //             {isRequired(key) && <span className='error-text'>*</span>}
                                    //             {
                                    //                 postParamsError
                                    //                 && postParamsTouched
                                    //                 && postParamsError[key]
                                    //                 && postParamsTouched[key]
                                    //                 && postParamsTouched[key].id
                                    //                 && <span className='error-text'>
                                    //                     &nbsp;{postParamsError[key].id}
                                    //                 </span>
                                    //             }
                                    //         </Typography>
                                    //         <div className='row-list'>
                                    //             {filters[key].map(item =>
                                    //                 <div key={item.id}>
                                    //                     <div
                                    //                         style={{
                                    //                             display: 'flex',
                                    //                             alignItems: 'center'
                                    //                         }}
                                    //                     >
                                    //                         <Checkbox
                                    //                             color='primary'
                                    //                             disabled={isPreview}
                                    //                             onChange={handleParamsCheckbox(key, item)}
                                    //                             checked={!!values[key] && values[key].some(({id}) => id === item.id)}
                                    //                         />
                                    //                         <Typography>{item.name}</Typography>
                                    //                     </div>
                                    //                 </div>
                                    //             )}
                                    //         </div>
                                    //     </>
                                    isNoEmptyArray
                                        ? <>
                                            <Typography variant="subtitle1">
                                                <strong>
                                                    {t(key)}
                                                    {isRequired(key) && <span className='error-text'>*</span>}
                                                </strong>
                                                {
                                                    postParamsError
                                                    && postParamsTouched
                                                    && postParamsError[key]
                                                    && postParamsTouched[key]
                                                    && <span className='error-text'>
                                                            &nbsp;{postParamsError[key].id}
                                                        </span>
                                                }
                                            </Typography>
                                            <Grid container>
                                                {isFieldKeyWithTxt
                                                && <Grid item xs={9}>
                                                    <TextField
                                                        fullWidth
                                                        variant='outlined'
                                                        value={values[key] ? values[key].txt : ''}
                                                        name={key}
                                                        onChange={handleInput}
                                                        className={
                                                            postParamsError
                                                            && postParamsTouched
                                                            && postParamsError[key]
                                                            && postParamsTouched[key] ? 'error-border' : ''
                                                        }
                                                    />
                                                </Grid>}
                                                <Grid item xs={isFieldKeyWithTxt ? 3 : 6}>
                                                    <CustomMenu
                                                        name={key}
                                                        onBlur={handleBlur}
                                                        onClick={handleMenuItem(key)}
                                                        className={
                                                            postParamsError
                                                            && postParamsTouched
                                                            && postParamsError[key]
                                                            && postParamsTouched[key] ? 'error-border' : ''
                                                        }
                                                        valueName={values[key] ? values[key].name : ''}
                                                        items={filters[key]}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </>
                                        : !Array.isArray(filters[key]) && <Grid item xs={6}>
                                        <Typography variant="subtitle1">
                                            <strong>
                                                {t(key)}:
                                            </strong>
                                            {isRequired(key) && <span className='error-text'>*</span>}
                                            {
                                                postParamsError
                                                && postParamsTouched
                                                && postParamsError[key]
                                                && postParamsTouched[key]
                                                && <span className='error-text'>&nbsp;{postParamsError[key]}</span>
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
                                                    className={
                                                        postParamsError
                                                        && postParamsTouched
                                                        && postParamsError[key]
                                                        && postParamsTouched[key]
                                                            ? 'error-border'
                                                            : ''
                                                    }
                                                />
                                        }
                                    </Grid>
                                }
                            </Grid>
                        })}
                    </Grid>
                </CustomAccordion>
            </form>
        </FormikProvider>
    )

    async function setDefaultVals() {
        if (mark !== 'free') {
            Object.keys(filters).forEach(key => {
                const isExcludedKey = excludedKeys.some(k => k === key);
                const isFieldKeyWithTxt = fieldKeysWithTxt.some(k => k === key);
                const isEstateTxtField = estateTxtFields.some(k => k === key);
                const isOptionKey = optionKeys.some(k => k === key);

                if (!isExcludedKey) {
                    if (Array.isArray(filters[key])) {
                        if (filters[key].length && key !== 'type') {
                            if (isFieldKeyWithTxt) {
                                values[key] = {...filters[key][0], txt: ''};
                            } else if (!values[key]) {
                                values[key] = noSelect;
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
    }
};