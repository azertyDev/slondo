import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from "i18next";
import {Form, FormikProvider, useFormik} from "formik";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {passwordConfirmSchema} from '@root/validation_schemas/authRegSchema';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {userAPI} from "@src/api/api";
import {cookies, cookieOpts} from "@src/helpers";


type ConfirmAuthPropsType = {
    phone: string,
    code: string,
    setErrorMsg: Dispatch<SetStateAction<string>>
    handleCloseModal: () => void,
    handleSignIn: (user) => () => void
} & WithT;

export const PasswordConfirmForm: FC<ConfirmAuthPropsType> = (props) => {
    const {
        t,
        phone,
        code,
        setErrorMsg,
        handleCloseModal,
        handleSignIn
    } = props;

    const initialInputsVals = {
        isFetch: false,
        newPassword: '',
        newPassword_confirm: ''
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initialInputsVals,
        validationSchema: passwordConfirmSchema
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
            const {user, token} = await userAPI.newPassword(phone, code, values.newPassword);
            await setValues({...values, isFetch: false});
            handleCloseModal();
            handleSignIn(user)();
            cookies.set('slondo_user', user, cookieOpts);
            cookies.set('slondo_auth', token, cookieOpts);
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
                        type="password"
                        name="newPassword"
                        labelText={t('enterNewPassword')}
                        errorMsg={
                            errors.newPassword && touched.newPassword
                                ? t(`errors:${errors.newPassword as string}`)
                                : ''}
                        placeholder={t('enterPassword')}
                    />
                    <CustomFormikField
                        type="password"
                        name="newPassword_confirm"
                        labelText={t('repeatNewPassword')}
                        errorMsg={
                            errors.newPassword_confirm && touched.newPassword_confirm
                                ? t(`errors:${errors.newPassword_confirm as string}`)
                                : ''}
                        placeholder={t('repeatNewPassword')}
                    />
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
