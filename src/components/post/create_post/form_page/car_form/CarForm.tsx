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
import {isRequired} from '@root/validation_schemas/createPostSchemas'
import {CustomMenu} from '@src/components/elements/custom_menu/CustomMenu'
import {CustomAccordion} from '../accordion/CustomAccordion'
import {numberPrettier} from '@src/helpers'
import {numberRegEx} from '@src/common_data/reg_ex'
import {useStyles} from './useStyles'
import {CarIcon, ParametersIcon} from '@src/components/elements/icons'


export const CarForm: FC<any> = (props) => {
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

    // const initForm = {
    //     [`${mark}_id`]: category.id,
    //     sub_type_id: subCategory ? subCategory.id : null,
    //     type_id: type ? type.id : null,
    // };

    const onSubmit = (values) => {
        // values = prepareData(values);
        // handleSetPost({[mark]: values});
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {},
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

    // useEffect(() => {
    //     setDefaultVals();
    // }, [filters]);

    const classes = useStyles();
    return (
        <div></div>
        // <FormikProvider value={formik}>
        //     <form onSubmit={handleSubmit}>
        //         <CustomAccordion
        //             open={open}
        //             title={t('automobile')}
        //             nextButtonTxt={t('appearance')}
        //             icon={<CarIcon/>}
        //         >
        //             <h4>Car</h4>
        //         </CustomAccordion>
        //     </form>
        // </FormikProvider>
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
    }
};