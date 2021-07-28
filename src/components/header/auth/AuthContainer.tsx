import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {useFormik} from 'formik';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {Typography} from '@material-ui/core';
import {cookieOpts, cookies, getErrorMsg, phonePrepare} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {AuthModal} from './AuthModal';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {authSchema, codeSchema, passwordConfirmSchema, phoneSchema} from '@root/validation_schemas/authRegSchema';
import {UserCtx} from "@src/context/UserCtx";
import {AuthCtx} from "@src/context/AuthCtx";
import {CONFIRM_SECONDS} from "@src/constants";

export enum FormStatuses {
    reg,
    rec,
    code,
    newPass
}

export const AuthContainer: FC = () => {
    const {t} = useTranslation('auth_reg');
    const {setUser} = useContext(UserCtx);
    const {auth: {authModalOpen}, setIsAuth, setAuthModalOpen} = useContext(AuthCtx);

    const initVals = {
        code: '',
        phone: '',
        password: '',
        password_confirm: ''
    };

    const [tabIndex, setTabIndex] = useState(0);
    const isSignInTab = tabIndex === 0;
    const [errorMsg, setErrorMsg] = useState('');
    const [isFetch, setIsFetch] = useState(false);
    const [timer, setTimer] = useState(CONFIRM_SECONDS);
    const [activeTimer, setActiveTimer] = useState(false);
    const [formStatus, setFormStatus] = useState<keyof typeof FormStatuses>('reg');

    const tabsHandler = (_, newValue) => {
        unstable_batchedUpdates(() => {
            setTouched({});
            setTabIndex(newValue);
        });
    };

    const handleCancel = () => {
        unstable_batchedUpdates(() => {
            setTabIndex(0);
            setErrors({});
            setTouched({});
            setErrorMsg('');
            setFormStatus('reg');
            setActiveTimer(false);
        });
    };

    const handleCloseModal = () => {
        unstable_batchedUpdates(() => {
            handleCancel();
            setValues(initVals);
            setAuthModalOpen(false);
        });
    };

    const handleForgetPass = () => {
        unstable_batchedUpdates(() => {
            setTabIndex(1);
            setFormStatus('rec');
        });
    };

    const runTimer = () => {
        if (activeTimer) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            } else {
                unstable_batchedUpdates(() => {
                    setErrorMsg('');
                    setFormStatus('rec');
                    setActiveTimer(false);
                });
            }
        } else {
            setTimer(CONFIRM_SECONDS);
        }
    };

    const onSubmit = async (values) => {
        try {
            const {phone, password, code} = values;
            const preparedPhone = phonePrepare(phone);

            unstable_batchedUpdates(() => {
                setErrorMsg('');
                setTouched({});
                setIsFetch(true);
            });

            if (isSignInTab) {
                const {token, user} = await userAPI.login(preparedPhone, password);
                unstable_batchedUpdates(() => {
                    setUser(user);
                    setIsAuth(true);
                    handleCloseModal();
                    cookies.set('slondo_user', user, cookieOpts);
                    cookies.set('slondo_auth', token, cookieOpts);
                });
            } else {
                if (formStatus === 'rec') {
                    await userAPI.getSmsCode(preparedPhone);
                    unstable_batchedUpdates(() => {
                        setActiveTimer(true);
                        setFormStatus('code');
                    });
                }
                if (formStatus === 'code') {
                    await userAPI.confirmSmsCode(preparedPhone, code);
                    unstable_batchedUpdates(() => {
                        setActiveTimer(false);
                        setFormStatus('newPass');
                    });
                }
                if (formStatus === 'newPass') {
                    const {token, user} = await userAPI.newPassword(preparedPhone, code, password);
                    unstable_batchedUpdates(() => {
                        cookies.set('slondo_user', user, cookieOpts);
                        cookies.set('slondo_auth', token, cookieOpts);
                        handleCloseModal();
                        setUser(user);
                    });
                }
                if (formStatus === 'reg') {
                    await userAPI.register(preparedPhone);
                    handleCancel();
                }
            }

            setIsFetch(false);
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.message);
                setIsFetch(false);
                setValues({
                    ...values,
                    password: '',
                    password_confirm: ''
                });
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

    const {handleInput} = useHandlers(values, setValues);

    const getFormByStatus = (): ReactNode => {
        switch (formStatus) {
            case 'reg':
            case 'rec':
                return <div>
                    <FormikField
                        t={t}
                        type="tel"
                        name="phone"
                        labelText={t('enter_phone')}
                        onChange={handleInput}
                        errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                    />
                </div>;
            case 'code':
                return <div className='code-confirm-form'>
                    <div className="formik-code-confirm">
                        <FormikField
                            t={t}
                            name="code"
                            labelText={t('enter_sms')}
                            placeholder={t('enter_sms')}
                            onChange={handleInput}
                            errorMsg={getErrorMsg(errors.code, touched.code, t)}
                        />
                        <Typography
                            variant="subtitle2"
                            className="resendTxt"
                        >
                            {t(`resendSms`, {timer: timer})}
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
                            labelText={t('enter_new_password')}
                            placeholder={t('enter_new_password')}
                            onChange={handleInput}
                            errorMsg={getErrorMsg(errors.password, touched.password, t)}
                        />
                        <FormikField
                            t={t}
                            type="password"
                            name="password_confirm"
                            labelText={t('repeat_new_password')}
                            placeholder={t('repeat_new_password')}
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
            open={authModalOpen}
            errorMsg={errorMsg}
            form={getFormByStatus()}
            submitTxt={getSubmitTxt()}
            tabsHandler={tabsHandler}
            handleInput={handleInput}
            handleCancel={handleCancel}
            handleForgetPass={handleForgetPass}
            handleCloseModal={handleCloseModal}
        />
    );
};