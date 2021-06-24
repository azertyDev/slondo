import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {Grid, Hidden, Tab, Tabs, Typography, useMediaQuery} from '@material-ui/core';
import {
    AdsIcon,
    BonusIcon,
    RatingIcon,
    SafeBuyingIcon,
    TorgIcon
} from '@src/components/elements/icons';
import {setIsAuthModalOpen, signInAction} from '@src/redux/slices/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {useTheme} from '@material-ui/core/styles';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {RootState} from '@src/redux/rootReducer';
import {Form, FormikProvider, useFormik} from 'formik';
import {cookieOpts, cookies, getErrorMsg, phonePrepare} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {useHandlers} from '@src/hooks/useHandlers';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {authSchema, codeSchema, passwordConfirmSchema, phoneSchema} from '@root/validation_schemas/authRegSchema';
import {useStyles} from './useStyles';

enum FormStatuses {
    reg,
    rec,
    code,
    newPass
}

export const AuthRegPage: FC = () => {
    const initSeconds = 120;
    const dispatch = useDispatch();
    const {t} = useTranslation('auth_reg');
    const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
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

    const getFormByStatus = () => {
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

    const classes = useStyles();
    return (
        <ResponsiveModal
            fullScreen={fullScreen}
            openDialog={isAuthModalOpen}
            handleCloseDialog={handleCloseModal}
        >
            <div className={classes.root}>
                <Grid container>
                    <Hidden smDown>
                        <Grid item xs={5}>
                            <div className='info-block'>
                                <div>
                                    <BonusIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('bonus')}
                                    </Typography>
                                </div>
                                <div>
                                    <SafeBuyingIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('safeBuying')}
                                    </Typography>
                                </div>
                                <div>
                                    <AdsIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('createAd')}
                                    </Typography>
                                </div>
                                <div>
                                    <TorgIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('createAuction')}
                                    </Typography>
                                </div>
                                <div>
                                    <RatingIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('rating')}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={7}>
                        <div className='auth-reg-block'>
                            <div className='welcome-block'>
                                <Typography variant="h6" color="initial">
                                    {t('welcome')}
                                </Typography>
                                <Hidden smDown>
                                    <Typography variant="subtitle1" color="initial">
                                        {t('authSite')}
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.authReg}>
                                <div className="form-block">
                                    <div className="server-error">
                                        {errorMsg && (
                                            <Typography variant="body2" className="error-text">
                                                {t(`errors:${errorMsg}`)}
                                            </Typography>
                                        )}
                                    </div>
                                    <div className="tabs-container">
                                        <FormikProvider value={formik}>
                                            <Form onSubmit={formik.handleSubmit}>
                                                <Tabs
                                                    value={tabIndex}
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
                                                                {t(`${formStatus === 'reg' ? 'signUpTitle' : 'resetPassTitle'}`)}
                                                            </Typography>
                                                        }
                                                    />
                                                </Tabs>
                                                <div className="tab-panels">
                                                    <CustomTabPanel
                                                        index={0}
                                                        value={tabIndex}
                                                        className="sign-panel"
                                                    >
                                                        <div className='auth-form'>
                                                            <div>
                                                                <div className="formik-num-pass">
                                                                    <FormikField
                                                                        t={t}
                                                                        type="tel"
                                                                        name="phone"
                                                                        labelText='enter_phone'
                                                                        value={values.phone}
                                                                        onChange={handleNumericInput}
                                                                        errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                                                                    />
                                                                    <FormikField
                                                                        t={t}
                                                                        type="password"
                                                                        name="password"
                                                                        labelText='enter_password'
                                                                        value={values.password}
                                                                        onChange={handleInput}
                                                                        errorMsg={getErrorMsg(errors.password, touched.password, t)}
                                                                    />
                                                                </div>
                                                                <div className='forget-password'>
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        onClick={handleForgetPass}
                                                                        style={{cursor: 'pointer'}}
                                                                    >
                                                                        {t('forget_password')}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CustomTabPanel>
                                                    <CustomTabPanel
                                                        index={1}
                                                        value={tabIndex}
                                                        className="reg-panel"
                                                    >
                                                        {getFormByStatus()}
                                                        {/*<div className='reg-form'>{regForm}</div>*/}
                                                    </CustomTabPanel>
                                                    <div className='auth-btns'>
                                                        {!isSignInTab && (
                                                            <CustomButton onClick={handleCancel}>
                                                                {t('cancel')}
                                                            </CustomButton>
                                                        )}
                                                        <CustomButton type="submit" disabled={isFetch}>
                                                            {t(getSubmitTxt())}
                                                        </CustomButton>
                                                    </div>
                                                </div>
                                            </Form>
                                        </FormikProvider>
                                    </div>
                                    <div className='agreements-txt'>
                                        {!isSignInTab
                                            ? <Typography className="reg-agreement" variant="body2">
                                                {`${t('agreement.firstPart')} `}
                                                <Link href="#">
                                                    <a>{`${t('agreement.secondPart')} `}</a>
                                                </Link>
                                            </Typography>
                                            : <Typography className="reg-agreement" variant="body2">
                                                {t('agreement.zeroPart')}{' '}
                                                <Link href="#">
                                                    <a>{`${t('agreement.secondPart')} `}</a>
                                                </Link>
                                            </Typography>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </ResponsiveModal>
    );
};