import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {Form, FormikProvider, useFormik} from 'formik';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {passwordConfirmSchema} from '@root/validation_schemas/authRegSchema';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {userAPI} from '@src/api/api';
import {cookies, cookieOpts, getErrorMsg} from '@src/helpers';


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
                <div className="formik-num-pass">
                    <FormikField
                        t={t}
                        type="password"
                        name="newPassword"
                        labelText='enter_new_password'
                        placeholder={t('filters:enter_new_password')}
                        errorMsg={getErrorMsg(errors.code, touched.code, t)}
                    />
                    <FormikField
                        t={t}
                        type="password"
                        name="newPassword_confirm"
                        labelText='repeat_new_password'
                        placeholder={t('filters:repeat_new_password')}
                        errorMsg={getErrorMsg(errors.code, touched.code, t)}
                    />
                </div>
                <div className='auth-btns'>
                    <CustomButton type="submit" disabled={values.isFetch}>
                        {t('send')}
                    </CustomButton>
                </div>
            </Form>
        </FormikProvider>
    );
};
