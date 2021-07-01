import {FC, ReactNode, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {Typography} from '@material-ui/core';
import {setIsAuthModalOpen, signInAction} from '@src/redux/slices/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {cookieOpts, cookies, getErrorMsg, phonePrepare} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {AuthModal} from '@src/components/header/auth/AuthModal';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {authSchema, codeSchema, passwordConfirmSchema, phoneSchema} from '@root/validation_schemas/authRegSchema';

export enum FormStatuses {
    reg,
    rec,
    code,
    newPass
}

export const AuthContainer: FC = () => {
    const initSeconds = 120;
    const dispatch = useDispatch();
    const {t} = useTranslation('auth_reg');
    const {isAuthModalOpen} = useSelector((store: RootState) => store.user);

    const initVals = {
        code: '',
        phone: '',
        password: '',
        password_confirm: ''
    };

    const [tabIndex, setTabIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');

    const [isFetch, setIsFetch] = useState(false);
    const [timer, setTimer] = useState(initSeconds);
    const [activeTimer, setActiveTimer] = useState(false);

    const [formStatus, setFormStatus] = useState<keyof typeof FormStatuses>('reg');

    const isSignInTab = tabIndex === 0;

    const tabsHandler = (_, newValue) => {
        setTouched({});
        setTabIndex(newValue);
    };

    const handleCancel = () => {
        setTabIndex(0);
        setErrors({});
        setTouched({});
        setErrorMsg('');
        setFormStatus('reg');
        setActiveTimer(false);
    };

    const handleCloseModal = () => {
        handleCancel();
        setValues(initVals);
        isAuthModalOpen && dispatch(setIsAuthModalOpen(false));
    };

    const handleForgetPass = () => {
        setTabIndex(1);
        setFormStatus('rec');
    };

    const runTimer = () => {
        if (activeTimer) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            } else {
                setErrorMsg('');
                setFormStatus('rec');
                setActiveTimer(false);
            }
        } else {
            setTimer(initSeconds);
        }
    };

    const onSubmit = async (values) => {
        try {
            const {phone, password, code} = values;
            const preparedPhone = phonePrepare(phone);

            setErrorMsg('');
            setTouched({});
            setIsFetch(true);

            if (isSignInTab) {
                const {token, user} = await userAPI.login(preparedPhone, password);
                cookies.set('slondo_user', user, cookieOpts);
                cookies.set('slondo_auth', token, cookieOpts);
                handleCloseModal();
                dispatch(signInAction(user));
            } else {
                if (formStatus === 'rec') {
                    await userAPI.getSmsCode(preparedPhone);
                    setActiveTimer(true);
                    setFormStatus('code');
                }
                if (formStatus === 'code') {
                    await userAPI.confirmSmsCode(preparedPhone, code);
                    setActiveTimer(false);
                    setFormStatus('newPass');
                }
                if (formStatus === 'newPass') {
                    const {token, user} = await userAPI.newPassword(preparedPhone, code, password);
                    cookies.set('slondo_user', user, cookieOpts);
                    cookies.set('slondo_auth', token, cookieOpts);
                    handleCloseModal();
                    dispatch(signInAction(user));
                }
                if (formStatus === 'reg') {
                    await userAPI.register(preparedPhone);
                    handleCancel();
                }
            }

            setIsFetch(false);
        } catch (e) {
            setErrorMsg(e.message);
            setIsFetch(false);
            setValues({
                ...values,
                password: '',
                password_confirm: ''
            });
        }
    };

    const getSubmitTxt = () => {
        if (isSignInTab) return 'signIn';
        switch (formStatus) {
            case 'code':
            case 'newPass':
                return 'send';
            case 'rec':
                return 'recoverPassword';
            case 'reg':
                return 'signUp';
        }
    };

    const getValidationSchema = () => {
        if (isSignInTab) return authSchema;
        switch (formStatus) {
            case 'code':
                return codeSchema;
            case 'newPass':
                return passwordConfirmSchema;
            case 'rec':
            case 'reg':
                return phoneSchema;
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: getValidationSchema()
    });

    const {
        values,
        setValues,
        errors,
        setErrors,
        touched,
        setTouched
    } = formik;

    const {handleNumericInput, handleInput} = useHandlers(values, setValues);

    const getFormByStatus = (): ReactNode => {
        switch (formStatus) {
            case 'reg':
            case 'rec':
                return <div>
                    <FormikField
                        t={t}
                        type="tel"
                        name="phone"
                        labelText='enter_phone'
                        onChange={handleNumericInput}
                        errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                    />
                </div>;
            case 'code':
                return <div className='code-confirm-form'>
                    <div className="formik-code-confirm">
                        <FormikField
                            t={t}
                            name="code"
                            labelText='enter_sms'
                            placeholder={t('filters:enter_sms')}
                            onChange={handleInput}
                            errorMsg={getErrorMsg(errors.code, touched.code, t)}
                        />
                        <Typography
                            variant="subtitle2"
                            className="resendTxt"
                        >
                            {t(`auth_reg:resendSms`, {timer: timer})}
                        </Typography>
                    </div>
                </div>;
            case 'newPass':
                return <div className='pass-confirm-form'>
                    <div className="formik-num-pass">
                        <FormikField
                            t={t}
                            type="password"
                            name="password"
                            labelText='enter_new_password'
                            placeholder={t('filters:enter_new_password')}
                            onChange={handleInput}
                            errorMsg={getErrorMsg(errors.password, touched.password, t)}
                        />
                        <FormikField
                            t={t}
                            type="password"
                            name="password_confirm"
                            labelText='repeat_new_password'
                            placeholder={t('filters:repeat_new_password')}
                            onChange={handleInput}
                            errorMsg={getErrorMsg(errors.password_confirm, touched.password_confirm, t)}
                        />
                    </div>
                </div>;
        }
    };

    useEffect(() => {
        runTimer();
    }, [activeTimer, timer]);

    return (
        <AuthModal
            t={t}
            tabIndex={tabIndex}
            formStatus={formStatus}
            isFetch={isFetch}
            isSignInTab={isSignInTab}
            formik={formik}
            open={isAuthModalOpen}
            errorMsg={errorMsg}
            form={getFormByStatus()}
            submitTxt={getSubmitTxt()}
            tabsHandler={tabsHandler}
            handleForgetPass={handleForgetPass}
            handleCloseModal={handleCloseModal}
            handleInput={handleInput}
            handleCancel={handleCancel}
            handleNumericInput={handleNumericInput}
        />
    );
};