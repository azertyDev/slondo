import React, {FC} from 'react';
import {Field} from 'formik';
import {TextField, Typography} from '@material-ui/core';
import {TextFieldProps} from "@material-ui/core/TextField/TextField";
import {isRequired} from "@src/helpers";
import {useStyles} from './useStyles';

type CustomFormikFieldPropsType = {
    errorMsg?: string,
    labelText?: string
} & TextFieldProps;

export const CustomFormikField: FC<CustomFormikFieldPropsType> = (props) => {
    const {
        name,
        errorMsg,
        labelText,
        ...otherProps
    } = props;

    const classes = useStyles();
    return (
        <Field name={name} {...otherProps} >
            {({field}) =>
                <div className={classes.root}>
                    <div className='label-wrapper'>
                        {labelText && (
                            <Typography variant="subtitle1">
                                <strong>
                                    {labelText}
                                    {isRequired(name) && <span className='error-text'>*</span>}&nbsp;
                                </strong>
                            </Typography>
                        )}
                    </div>
                    <TextField
                        fullWidth
                        focused={false}
                        variant="outlined"
                        {...field}
                        {...otherProps}
                        className={errorMsg ? 'error-border' : ''}
                    />
                    {errorMsg && (
                        <Typography variant="subtitle1">
                            <span className='error-text'>
                                {errorMsg}
                            </span>
                        </Typography>
                    )}
                </div>}
        </Field>
    );
};
