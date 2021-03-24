import React, {FC, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {Tab, Tabs, Typography} from '@material-ui/core'
import {useRouter} from "next/router";
import {CustomTabPanel} from '../../../elements/custom_tab_panel/CustomTabPanel';
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomFormikField} from '../../../elements/custom_formik_field/CustomFormikField';
import {ButtonComponent} from '../../../elements/button/Button';
import {WithT} from 'i18next';
import {authRegSchema} from '@root/validation_schemas/authRegSchema';
import ConfirmAuth from '@src/components/header/auth_reg/auth_reg_form/ConfirmAuth';
import {setIsAuthModalOpen, signInAction} from '@src/redux/slices/userSlice';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {COOKIE_LIFE_TIME} from "@src/constants";
import {cookies} from "@src/helpers";
import {Agreements} from "./Agreements";
import {useStyles} from './useStyles';


const initialInputsVals = {
    isFetch: false,
    error: null,
    phone: '+998',
    password: '',
    code: ''
};

export const AuthRegForm: FC<WithT & { handleCloseModal: () => void }> = (props) => {
    const {t, handleCloseModal} = props;
    const {locale} = useRouter();

    const dispatch = useDispatch();

    const [tabValue, setTabValue] = useState(0);
    const [timer, setTimer] = useState<any>(0);
    const [errorMessage, setErrormessage] = useState("");
    const [smsConfirm, setSmsConfirm] = useState(false);
    const [codeChecker, setCodeChecker] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);

    const tabsHandler = (_, newValue) => {
        setTabValue(newValue);
    };

    const handleForgetPass = () => {
        setTabValue(1);
        setResetPassword(true);
    };

    const handleErrorMsg = () => {
        setErrormessage("Дождитесь истечении времени запроса!");
    };

    const handleSmsConfirm = (values) => {
        if (codeChecker) {
            // dispatch(fetchTokenRecovery(values));
            dispatch(setIsAuthModalOpen(false));
        } else if (smsConfirm) {
            // dispatch(fetchRecovery());
        } else {
            userAPI.recoverySMS(values.phone, values.code)
                .then(result => {
                    setTimer(60);
                    setCodeChecker(typeof result === 'object' && result !== null);
                });
        }
    };

    const onSubmit = async (values) => {
        const phone = values.phone.replace("+", "");
        const data = {...values, phone};
        const cookieOpts = {path: '/', maxAge: COOKIE_LIFE_TIME};

        try {
            const {token, user} = tabValue === 1
                ? await userAPI.register(phone)
                : await userAPI.login(data.phone, data.password);

            cookies.set('slondo_user', user, cookieOpts);
            cookies.set('slondo_auth', token, cookieOpts);

            handleCloseModal();
            dispatch(signInAction(user));
        } catch (e) {
            dispatch(setErrorMsgAction(t(`error:${e.message}`)));
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initialInputsVals,
        validationSchema: tabValue === 0 ? authRegSchema : null
    });

    const {values: {isFetch, error}, errors, touched} = formik;

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000);
        } else {
            setTimer('Запросить пароль еще раз!');
        }
    }, [timer]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className='auth-form'>
                    <div className="form-block">
                        <div className="server-error">
                            {error && (
                                <Typography variant="body2" className="error-text">
                                    {t('serverError')}
                                </Typography>
                            )}
                        </div>
                        <div className="tabs-container">
                            <Tabs
                                value={tabValue}
                                onChange={tabsHandler}
                                indicatorColor="primary"
                                className="tabs"
                            >
                                <Tab
                                    value={0}
                                    label={
                                        <Typography variant="subtitle1">
                                            {t('signInTitle')}
                                        </Typography>
                                    }
                                />
                                <Tab
                                    value={1}
                                    label={
                                        <Typography variant="subtitle1">
                                            {t(`${resetPassword ? 'resetPassTitle' : 'signUpTitle'}`)}
                                        </Typography>
                                    }
                                />
                            </Tabs>
                            <div className="tab-panels">
                                <CustomTabPanel
                                    index={0}
                                    value={tabValue}
                                    className="sign-panel"
                                >
                                    <div>
                                        <CustomFormikField
                                            t={t}
                                            type="tel"
                                            name="phone"
                                            errors={errors}
                                            touched={touched}
                                            labelText={t('enterPhone')}
                                            placeholder="+ (998) __ ___ __ __"
                                            className={errors.phone && touched.phone ? 'error-border' : ''}
                                        />
                                    </div>
                                    <div>
                                        <CustomFormikField
                                            t={t}
                                            name="password"
                                            type="password"
                                            errors={errors}
                                            touched={touched}
                                            labelText="Введите пароль"
                                            placeholder={t('enterPassword')}
                                            className={errors.password && touched.password ? 'error-border' : ''}
                                        />
                                        <div>
                                            <Typography
                                                variant="subtitle1"
                                                onClick={handleForgetPass}
                                                style={{cursor: "pointer"}}
                                            >
                                                {t('forgetPassword')}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={classes.modalBtns}>
                                        <ButtonComponent
                                            type="submit"
                                            className="signin-btn"
                                            disabled={isFetch}
                                        >
                                            {t('signIn')}
                                        </ButtonComponent>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel
                                    index={1}
                                    value={tabValue}
                                    className="reg-panel"
                                >
                                    {resetPassword
                                        ? <ConfirmAuth
                                            t={t}
                                            errors={errors}
                                            touched={touched}
                                            smsConfirm={smsConfirm}
                                            timer={timer}
                                            errorMsg={errorMessage}
                                            codeChecker={codeChecker}
                                            handleErrorMsg={handleErrorMsg}
                                            handleSmsConfirm={handleSmsConfirm}
                                        />
                                        : <div>
                                            <div>
                                                <CustomFormikField
                                                    t={t}
                                                    errors={errors}
                                                    touched={touched}
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+ (998) __ ___ __ __"
                                                    labelText={t('enterPhone')}
                                                    className={errors.phone && touched.phone ? 'error-border' : ''}
                                                />
                                            </div>
                                            <div className={classes.modalBtns}>
                                                <ButtonComponent
                                                    className="reg-btn"
                                                    type="submit"
                                                >
                                                    {t('signUp')}
                                                </ButtonComponent>
                                            </div>
                                        </div>}
                                </CustomTabPanel>
                            </div>
                        </div>
                    </div>
                </Form>
            </FormikProvider>
            <div className={classes.agreements}>
                <Agreements locale={locale} t={t} isRegAgreements={tabValue !== 0}/>
            </div>
        </div>
    )
};
