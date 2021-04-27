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
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {Form, FormikProvider, useFormik} from 'formik';
import {ButtonComponent} from '@root/src/components/elements/button/Button';
import {getErrorMsg} from '@src/helpers';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';

const initialInputsVals = {
    firstName: '',
    secondName: '',
    phone: '',
    backupPhoneNumber: '',
};

export const SafetyDeal: FC = () => {
    const {t} = useTranslation('filters');
    const title = t('post:safe_deal');

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
            <CabinetWrapper headerTitle={title} title={title}>
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
                                    t={t}
                                    name="firstName"
                                    type="text"
                                    labelText="Персональные данные"
                                    placeholder="Имя"
                                    errorMsg={getErrorMsg(errors.firstName, touched.firstName, t)}
                                />
                                <CustomFormikField
                                    t={t}
                                    name="secondName"
                                    type="text"
                                    placeholder="Фамилия"
                                    errorMsg={getErrorMsg(errors.secondName, touched.secondName, t)}
                                />
                                <CustomFormikField
                                    t={t}
                                    name="phone"
                                    type="tel"
                                    labelText="Номер телефона"
                                    placeholder="+998"
                                    value="+998 90 908 0880"
                                />
                                <CustomFormikField
                                    t={t}
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
                                                t={t}
                                                name="card-number"
                                                type="text"
                                                placeholder="XXXX"
                                            />
                                            <CustomFormikField
                                                t={t}
                                                name="card-number"
                                                type="text"
                                                placeholder="XXXX"
                                            />
                                            <CustomFormikField
                                                t={t}
                                                name="card-number"
                                                type="text"
                                                placeholder="XXXX"
                                            />
                                            <CustomFormikField
                                                t={t}
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
                                                t={t}
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
            </CabinetWrapper>
        </div>
    );
};
