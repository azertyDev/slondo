import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from "i18next";
import {Form, FormikProvider, useFormik} from "formik";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {userAPI} from "@src/api/api";
import {getErrorMsg} from '@src/helpers';


type ConfirmAuthPropsType = {
    phone: string,
    timer: number,
    deactivateTimer: () => void,
    setCode: Dispatch<SetStateAction<string>>,
    setErrorMsg: Dispatch<SetStateAction<string>>,
    setIsNewPassword: Dispatch<SetStateAction<boolean>>,
} & WithT;

export const CodeConfirmForm: FC<ConfirmAuthPropsType> = (props) => {
    const {
        t,
        timer,
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
                        t={t}
                        name="code"
                        labelText='enter_sms'
                        placeholder={t('filters:enter_sms')}
                        errorMsg={getErrorMsg(errors.code, touched.code, t)}
                    />
                    <span>{timer}</span>
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
