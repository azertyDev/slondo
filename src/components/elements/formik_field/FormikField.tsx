import {FC} from 'react';
import {Field} from 'formik';
import {WithT} from 'i18next';
import ReactInputMask from 'react-input-mask';
import {Grid, TextField, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {useStyles} from './useStyles';
import {TextFieldProps} from '@material-ui/core/TextField/TextField';

type CustomFormikFieldPropsType = {
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
                                    {t(`filters:${labelText}`)}
                                    {isRequired(name) && <span className='error-text'>*</span>}&nbsp;
                                </strong>
                            </Typography>
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
                             variant="outlined"
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
    );
};
