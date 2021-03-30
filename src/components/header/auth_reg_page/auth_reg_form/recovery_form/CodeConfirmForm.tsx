import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from "i18next";
import {Form, FormikProvider, useFormik} from "formik";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {userAPI} from "@src/api/api";


type ConfirmAuthPropsType = {
    phone: string,
    timerSeconds: number,
    deactivateTimer: () => void,
    setCode: Dispatch<SetStateAction<string>>,
    setErrorMsg: Dispatch<SetStateAction<string>>,
    setIsNewPassword: Dispatch<SetStateAction<boolean>>,
} & WithT;

export const CodeConfirmForm: FC<ConfirmAuthPropsType> = (props) => {
    const {
        t,
        timerSeconds,
        phone,
        setCode,
        setErrorMsg,
        deactivateTimer,
        setIsNewPassword
    } = props;

    const initialInputsVals = {
        isFetch: false,
        code: ''
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initialInputsVals,
        validationSchema: codeSchema
    });

    const {
        errors,
        touched,
        values,
        setValues
    } = formik;

    async function onSubmit(values) {
        try {
            await setValues({...values, isFetch: true});
            await userAPI.confirmSmsCode(phone, values.code);
            await setValues({...values, isFetch: false});
            deactivateTimer();
            setCode(values.code);
            setIsNewPassword(true);
        } catch (e) {
            setErrorMsg(e.error);
            await setValues({...values, isFetch: false});
        }
    }

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} className='auth-form'>
                <div>
                    <CustomFormikField
                        type="tel"
                        name="code"
                        labelText={t('enterSMS')}
                        placeholder={t('enterSMS')}
                        errorMsg={
                            errors.code && touched.code
                                ? t(`errors:${errors.code}`)
                                : ''
                        }
                    />
                    <span>{timerSeconds}</span>
                </div>
                <div className='auth-btns'>
                    <ButtonComponent type="submit" disabled={values.isFetch}>
                        {t('send')}
                    </ButtonComponent>
                </div>
            </Form>
        </FormikProvider>
    )
};
