import React, {FC} from 'react';
import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Switch,
    Checkbox,
    FormLabel,
    Card,
    Typography,
} from '@material-ui/core';
import {CabinetMenuWrapper} from '@src/components/cabinet/CabinetMenuWrapper';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {Form, FormikProvider, useFormik} from 'formik';
import {useStyles} from './useStyles';
import {ButtonComponent} from '@root/src/components/elements/button/Button';

const initialInputsVals = {
    firstName: '',
    secondName: '',
    phone: '',
    backupPhoneNumber: '',
};

export const SafetyDeal: FC = () => {
    const title = 'Безопасная покупка';

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: initialInputsVals,
        onSubmit,
    });

    const {errors, touched} = formik;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title}>
                <div className="wrapper">
                    <Grid item xs={7}>
                        <FormikProvider value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <FormControl component="div">
                                    <FormGroup aria-label="position">
                                        <FormControlLabel
                                            control={<Switch color="primary"/>}
                                            label="Подключить функцию Безопасная покупка"
                                            labelPlacement="start"
                                        />
                                    </FormGroup>
                                </FormControl>
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
                                <FormControlLabel
                                    control={<Checkbox color="secondary"/>}
                                    label="Отображать номер телефона"
                                    labelPlacement="start"
                                />
                                <div>
                                    <FormLabel component="label">
                                        Добавить карту<span>*</span>
                                    </FormLabel>
                                    <Card className={classes.creditCard}>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            Slondo bank
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="initial"
                                        >
                                            Номер карты
                                        </Typography>
                                        <div>
                                            <CustomFormikField
                                                name="card-number"
                                                type="text"
                                                placeholder="XXXX"
                                            />
                                            <CustomFormikField
                                                name="card-number"
                                                type="text"
                                                placeholder="XXXX"
                                            />
                                            <CustomFormikField
                                                name="card-number"
                                                type="text"
                                                placeholder="XXXX"
                                            />
                                            <CustomFormikField
                                                name="card-number"
                                                type="text"
                                                placeholder="XXXX"
                                            />
                                        </div>
                                        <Typography
                                            variant="subtitle2"
                                            color="initial"
                                        >
                                            Срок действия
                                        </Typography>
                                        <div>
                                            <CustomFormikField
                                                name="card-number"
                                                type="text"
                                                placeholder="xx/xx"
                                                helperText="месяц / год"
                                            />
                                            <ButtonComponent disabled>
                                                Сохранить
                                            </ButtonComponent>
                                        </div>
                                    </Card>
                                </div>
                                <div className='submit-part'>
                                    <ButtonComponent>Применить</ButtonComponent>
                                    <Typography variant="subtitle1" color="initial">Нажимая кнопку “Сохранить” вы
                                        принимаете публичную оферту “Безопасной покупки”</Typography>
                                </div>
                            </Form>
                        </FormikProvider>
                    </Grid>
                </div>
            </CabinetMenuWrapper>
        </div>
    );
};
