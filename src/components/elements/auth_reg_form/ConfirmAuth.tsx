import React, {FC, useEffect, useState} from 'react';
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {CustomFormikPasswordField} from "@src/components/elements/custom_formik_password_field/CustomFormikPasswordField";
import {Typography, Button} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {Form, FormikProvider, useFormik} from "formik";
import {RecoveryInputs} from "@root/interfaces/Auth";
import {useDispatch} from "react-redux";
import {fetchRecovery, fetchTokenRecovery, setIsAuthModalOpen} from "@src/redux/slices/authRegSlice";
import {authRecoverySchema} from "@root/validation_schemas/authRegSchema";
import {userAPI} from "@src/api/api";
import {WithT} from "i18next";


const initialInputsVals: RecoveryInputs = {
    phone: '+998',
    code: '',
    password: '',
    password_confirmation: ''
};

const ConfirmAuth: FC<WithT> = ({t}) => {
    const dispatch = useDispatch();

    const [seconds, setSeconds] = useState<any>(60);
    const [smsConfirm, setSmsConfirm] = useState(false)
    const [codeChecker, setCodeChecker] = useState(false)
    console.warn("seconds", seconds)
    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('Запросить пароль еще раз!');
        }
    }, [seconds]);


    const confirmMsg = (values) => {
        if (codeChecker) {
            dispatch(fetchTokenRecovery(values));
            dispatch(setIsAuthModalOpen(false));
        } else if (smsConfirm) {
            dispatch(fetchRecovery(values));
        } else {
            userAPI.recoverySMS(values.phone, values.code)
                .then(result => {setCodeChecker(typeof result === 'object' && result !== null); setSeconds(60)})
        }
    };

    const onSubmit = (values) => {
        const phone = values.phone.replace("+", "");
        const data = {...values, phone};
        confirmMsg(data);
    };

    const formik = useFormik({
        initialValues: initialInputsVals,
        validationSchema: authRecoverySchema,
        onSubmit
    });

    const {errors, touched} = formik;

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                {
                    codeChecker
                        ? <div>
                            <CustomFormikPasswordField
                                name="password"
                                labelText={t('auth_reg:enterNewPassword')}
                                className={errors.phone && touched.phone ? 'error-border' : ''}
                            />
                            <div className="validation-block">
                                <Typography variant="subtitle2" className="error-text">
                                    {errors.password && touched.password ? errors.password : ''}
                                </Typography>
                            </div>
                            <CustomFormikPasswordField
                                name="password_confirmation"
                                labelText={t('auth_reg:enterNewPasswordAgain')}
                                className={errors.password_confirmation && touched.password_confirmation ? 'error-border' : ''}
                            />
                            <div className="validation-block">
                                <Typography variant="subtitle2" className="error-text">
                                    {errors.password_confirmation && touched.password_confirmation ? errors.password_confirmation : ''}
                                </Typography>
                            </div>
                        </div>
                        : <div>
                            <CustomFormikField
                                name="phone"
                                type="tel"
                                placeholder="+ (998) __ ___ __ __"
                                labelText={t('auth_reg:enterPhone')}
                                className={errors.phone && touched.phone ? 'error-border' : ''}
                            />
                            <div className="validation-block">
                                <Typography variant="subtitle2" className="error-text">
                                    {errors.phone && touched.phone ? errors.phone : ''}
                                </Typography>
                            </div>
                            {
                                smsConfirm && <>
                                    <CustomFormikField
                                        name="code"
                                        type="tel"
                                        placeholder="__ __ __ __ __ __ __ __ __"
                                        labelText={t('auth_reg:enterSMS')}
                                        className={errors.code && touched.code ? 'error-border' : ''}
                                    />
                                    <div className="validation-block">
                                        <Typography variant="subtitle2" className="error-text">
                                            {errors.code && touched.code ? errors.code : ''}
                                        </Typography>
                                    </div>
                                    <div>
                                        {typeof seconds === 'string' ? <Button type='submit'>
                                            {seconds}
                                        </Button> :
                                        <Button>
                                            {seconds}
                                        </Button>
                                        }
                                    </div>
                                </>
                            }
                        </div>
                }
                <div onClick={() => setSmsConfirm(!smsConfirm)}>
                    <ButtonComponent
                        className="reg-btn"
                        type='submit'
                    >
                        {t(`auth_reg:${smsConfirm ? 'next' : 'continue'}`)}
                    </ButtonComponent>
                </div>
            </Form>
        </FormikProvider>
    )
}

export default ConfirmAuth
