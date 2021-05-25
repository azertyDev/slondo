import {FC} from 'react';
import {TextareaAutosize, TextareaAutosizeProps, Typography} from '@material-ui/core';
import {Field} from 'formik';
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
                        <Typography variant="subtitle1">
                            <strong>
                                {labelTxt}
                                {!disableRequire && <span className='error-text'>*</span>}&nbsp;
                            </strong>
                            {errorMsg && <span className='error-text'>&nbsp;{errorMsg}</span>}
                        </Typography>
                    )}
                    <TextareaAutosize
                        name={name}
                        {...field}
                        {...textareaProps}
                        className={`description-area ${errorMsg ? 'error-border' : ''}`}
                    />
                    <div className='limit-txt'>
                        <Typography variant="subtitle1">
                            {`${textareaProps.value.length}/${limit}`}
                        </Typography>
                    </div>
                </div>
            )}
        </Field>
    );
};