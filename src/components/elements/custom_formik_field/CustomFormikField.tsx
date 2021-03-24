import React, {FC} from 'react';
import {TextField, Typography} from '@material-ui/core';
import {Field} from 'formik';
import {TFunction} from "i18next";
import {TextFieldProps} from "@material-ui/core/TextField/TextField";
import {isRequired} from "@src/helpers";
import {useStyles} from './useStyles';

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
        labelText,
        ...otherProps
    } = props;

    const classes = useStyles();
    return (
        <Field name={name} {...otherProps}>
            {({field}) =>
                <div className={classes.root}>
                    {t && (
                        <Typography variant="subtitle1">
                            <strong>
                                {t(labelText ?? name)}
                                {isRequired(name) && <span className='error-text'>*</span>}&nbsp;
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
                </div>}
        </Field>
    );
};
