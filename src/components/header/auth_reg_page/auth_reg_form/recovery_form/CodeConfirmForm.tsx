import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from "i18next";
import {Form, FormikProvider, useFormik} from "formik";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
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
                    <FormikField
                        t={t}
                        name="code"
                        labelText='enter_sms'
                        placeholder={t('filters:enter_sms')}
                        errorMsg={getErrorMsg(errors.code, touched.code, t)}
                    />
                    <span>{timer}</span>
                </div>
                <div className='auth-btns'>
                    <CustomButton type="submit" disabled={values.isFetch}>
                        {t('send')}
                    </CustomButton>
                </div>
            </Form>
        </FormikProvider>
    )
};
