import {FC} from 'react';
import {Field} from 'formik';
import {WithT} from 'i18next';
import ReactInputMask from 'react-input-mask';
import {FormControl, Grid, InputLabel, TextField, TextFieldProps, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {useStyles} from './useStyles';

type CustomFormikFieldPropsType = {
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
        disableRequire,
        ...otherProps
    } = props;

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <Field name={name} {...otherProps}>
                {({field}) =>
                    <div>
                        <div className='label-wrapper'>
                            {labelText && (
                                <InputLabel>
                                    {t(`filters:${labelText}`)}
                                    {!disableRequire && isRequired(name) && <span className='error-text'>*</span>}&nbsp;
                                </InputLabel>
                            )}
                        </div>
                        {props.type === 'tel'
                         ? <ReactInputMask
                             alwaysShowMask
                             {...field}
                             mask='+\9\98(99) 999 99 99'
                         >
                             {() => <TextField
                                 fullWidth
                                 name={name}
                                 focused={false}
                                 size='small'
                                 variant="outlined"
                                 className={errorMsg ? 'error-border' : ''}
                             />}
                         </ReactInputMask>
                         : <TextField
                             size='small'
                             fullWidth
                             name={name}
                             {...field}
                             {...otherProps}
                             focused={false}
                             variant="outlined"
                             className={errorMsg ? 'error-border' : ''}
                         />}
                        <Grid container className='helpers-content'>
                            {errorMsg && (
                                <Grid item xs={limit ? 6 : 12}>
                                    <Typography variant="subtitle1">
                                    <span className='error-text'>
                                        {errorMsg}
                                    </span>
                                    </Typography>
                                </Grid>
                            )}
                            {!!limit && (
                                <Grid item xs={errorMsg ? 6 : 12} className='limit-txt'>
                                    <Typography variant="subtitle1">
                                        {`${otherProps.value.length}/${limit}`}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </div>}
            </Field>
        </FormControl>
    );
};
