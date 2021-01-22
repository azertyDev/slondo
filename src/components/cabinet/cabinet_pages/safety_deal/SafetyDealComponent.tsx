import React, { FC } from 'react';
import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Switch,
    Typography,
} from '@material-ui/core';
import { CabinetMenuWrapper } from '@src/components/cabinet/CabinetMenuWrapper';
import { CustomFormikField } from '@src/components/elements/custom_formik_field/CustomFormikField';
import { Form, FormikProvider, useFormik } from 'formik';
import { useStyles } from './useStyles';

const initialInputsVals = {
    firstName: '',
    secondName: '',
    phone: '',
    backupPhoneNumber: '',
};

export const SafetyDealComponent: FC = () => {
    const title = 'Безопасная покупка';

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: initialInputsVals,
        onSubmit,
    });

    const { errors, touched } = formik;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title}>
                <div className="wrapper">
                    <Grid item xs={7}>
                        <FormControl component="div">
                            <FormGroup aria-label="position">
                                <FormControlLabel
                                    control={<Switch color="primary" />}
                                    label="Подключить функцию Безопасная покупка"
                                    labelPlacement="start"
                                />
                            </FormGroup>
                        </FormControl>
                        <FormikProvider value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <CustomFormikField
                                    name="firstName"
                                    type="text"
                                    labelText="Персональные данные"
                                    placeholder="Имя"
                                    className={
                                        errors.firstName && touched.firstName
                                            ? 'error-border'
                                            : ''
                                    }
                                />
                                <CustomFormikField
                                    name="secondName"
                                    type="text"
                                    placeholder="Фамилия"
                                    className={
                                        errors.secondName && touched.secondName
                                            ? 'error-border'
                                            : ''
                                    }
                                />
                                <CustomFormikField
                                    name="phone"
                                    type="tel"
                                    labelText="Номер телефона"
                                    placeholder="+998"
                                    value="+998 90 908 0880"
                                />
                                <CustomFormikField
                                    name="backupPhoneNumber"
                                    type="tel"
                                    labelText="Добавить резервный номер"
                                    placeholder="+998"
                                />
                            </Form>
                        </FormikProvider>
                    </Grid>
                </div>
            </CabinetMenuWrapper>
        </div>
    );
};
