import {FC} from 'react';
import {Field} from 'formik';
import {WithT} from 'i18next';
import ReactInputMask from 'react-input-mask';
import {FormControl, Grid, TextField, TextFieldProps, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {useStyles} from './useStyles';

type CustomFormikFieldPropsType = {
    autoFocus?: boolean,
    disableRequire?: boolean,
    limit?: number,
    errorMsg?: string,
    labelText?: string,
    value?: any
} & TextFieldProps & WithT;

export const FormikField: FC<CustomFormikFieldPropsType> = (props) => {
    const {
        t,
        name,
        errorMsg,
        labelText,
        limit,
        autoFocus,
        disableRequire,
        ...otherProps
    } = props;

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <Field name={name} {...otherProps}>
                {({field}) =>
                    <div>
                        {labelText && (
                            <label htmlFor={name}>
                                <Typography variant='subtitle1' gutterBottom>
                                    {t(`filters:${labelText}`)}&nbsp;
                                    {!disableRequire && isRequired(name) && <span className='error-text'>*</span>}
                                </Typography>
                            </label>
                        )}
                        {props.type === 'tel'
                            ? <ReactInputMask
                                alwaysShowMask
                                {...field}
                                mask='+\9\98(99) 999 99 99'
                                onChange={otherProps.onChange}
                            >
                                {() => <TextField
                                    fullWidth
                                    name={name}
                                    focused={false}
                                    size='small'
                                    variant="outlined"
                                    autoFocus={autoFocus}
                                    className={errorMsg ? 'error-border' : ''}
                                />}
                            </ReactInputMask>
                            : <TextField
                                fullWidth
                                name={name}
                                {...field}
                                {...otherProps}
                                focused={false}
                                variant="outlined"
                                size='small'
                                autoFocus={autoFocus}
                                className={errorMsg ? 'error-border' : ''}
                            />}
                        {errorMsg && (
                            <Grid container className='helpers-content'>
                                <Grid item xs={limit ? 9 : 12}>
                                    <Typography variant="subtitle1" className='error-text'>
                                    <span>
                                        {errorMsg}
                                    </span>
                                    </Typography>
                                </Grid>
                                {!!limit && (
                                    <Grid item xs={errorMsg ? 3 : 12} className='limit-txt'>
                                        <Typography variant="subtitle1">
                                            {`${otherProps.value.length}/${limit}`}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        )}
                    </div>}
            </Field>
        </FormControl>
    );
};
