import React, {FC} from 'react';
import {TextField, Typography} from '@material-ui/core';
import {Field} from 'formik';
import {TFunction} from "i18next";
import {TextFieldProps} from "@material-ui/core/TextField/TextField";
import {isRequired} from "@src/helpers";


type CustomFormikFieldPropsType = {
    t?: TFunction,
    errors?,
    touched?,
    labelText?: string
} & TextFieldProps;

export const CustomFormikField: FC<CustomFormikFieldPropsType> = (props) => {
    const {
        t,
        name,
        errors,
        touched,
        ...otherProps
    } = props;

    return (
        <Field name={name} {...otherProps}>
            {({field}) => (
                <>
                    {t && (
                        <Typography variant="subtitle1">
                            <strong>
                                {t(name)}
                                {isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                            </strong>
                            {errors[name] && touched[name] && (
                                <span className='error-text'>
                                    {t(errors[name] as string)}
                                </span>
                            )}
                        </Typography>
                    )}
                    <TextField
                        fullWidth
                        focused={false}
                        variant="outlined"
                        {...field}
                        {...otherProps}
                        className={errors?.[name] && touched[name] ? 'error-border' : ''}
                    />
                </>
            )}
        </Field>
    );
};
