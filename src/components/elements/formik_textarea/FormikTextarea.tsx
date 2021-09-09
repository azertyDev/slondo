import {FC} from 'react';
import {Field} from 'formik';
import {TextareaAutosizeProps, TextField, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type FormikTextareaPropsType = {
    value: string,
    limit?: number,
    disableRequire?: boolean,
    labelTxt?: string,
    errorMsg?: string
} & TextareaAutosizeProps;

export const FormikTextarea: FC<FormikTextareaPropsType> = (props) => {
    const {
        name,
        limit,
        labelTxt,
        disableRequire,
        errorMsg,
        ...textareaProps
    } = props;

    const classes = useStyles();
    return (
        <Field name={name} {...textareaProps}>
            {({field}) => (
                <div className={classes.root}>
                    {labelTxt && (
                        <Typography variant="subtitle1" gutterBottom>
                            <strong>
                                {labelTxt}
                                {!disableRequire && <span className='error-text'>*</span>}&nbsp;
                            </strong>
                            {errorMsg && <span className='error-text'>&nbsp;{errorMsg}</span>}
                        </Typography>
                    )}
                    <TextField
                        fullWidth
                        multiline
                        name={name}
                        {...field}
                        variant="outlined"
                        {...textareaProps}
                        classes={{root: classes.textArea}}
                        helperText={`${textareaProps.value.length}/${limit}`}
                        className={`description-area ${errorMsg ? 'error-border' : ''}`}
                    />
                </div>
            )}
        </Field>
    );
};