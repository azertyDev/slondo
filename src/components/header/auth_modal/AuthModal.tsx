import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {Form, FormikProvider, useFormik} from 'formik';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {Box, Grid, Hidden, IconButton, Tab, Tabs, Typography, useMediaQuery} from '@material-ui/core';
import {cookieOpts, cookies, getErrorMsg, getTime, phonePrepare} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {signInSchema, codeSchema, passwordConfirmSchema, phoneSchema} from '@root/validation_schemas/authRegSchema';
import {
    AdsIcon,
    BonusIcon,
    BorderErrorIcon, CloseIcon,
    RatingIcon,
    SafeBuyingIcon,
    TorgIcon
} from '@src/components/elements/icons';
import {AuthCtx} from '@src/context/AuthCtx';
import {CONFIRM_SECONDS} from '@src/constants';
import {useStyles} from './useStyles';
import Link from "next/link";
import {CustomTabPanel} from "@src/components/elements/custom_tab_panel/CustomTabPanel";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {ResponsiveModal} from "@src/components/elements/responsive_modal/ResponsiveModal";
import {useTheme} from "@material-ui/core/styles";

export type SubmitTxtType = 'signIn'
    | 'send'
    | 'signUp'
    | 'firstSignIn'
    | 'recoverPassword'

type FormStatusesType = 'reg'
    | 'firstSignIn'
    | 'rec'
    | 'code'
    | 'newPass'

export const AuthModal: FC = () => {
    const {t} = useTranslation('auth_reg');
    const {auth: {authModalOpen}, setAuthModalOpen, addUser} = useContext(AuthCtx);
    const smDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const initVals = {
        code: '',
        password: '',
        password_confirm: '',
        phone: '+998(__) ___ __ __'
    };

    const [tabIndex, setTabIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [timer, setTimer] = useState(CONFIRM_SECONDS);
    const time = getTime(timer);
    const [isFetch, setIsFetch] = useState(false);
    const [activeTimer, setActiveTimer] = useState(false);
    const [formStatus, setFormStatus] = useState<FormStatusesType>('reg');
    const isSignInTab = tabIndex === 0;

    const tabsHandler = (_, newValue) => {
        tabIndex !== newValue && unstable_batchedUpdates(() => {
            setTabIndex(newValue);
            setTouched({});
            setErrorMsg('');
            setValues({
                ...initVals,
                phone: values.phone
            });
        });
    };

    const handleCancel = () => {
        unstable_batchedUpdates(() => {
            setErrors({});
            setTouched({});
            setErrorMsg('');
            setTabIndex(0);
            setFormStatus('reg');
            setActiveTimer(false);
        });
    };

    const handleCloseModal = () => {
        unstable_batchedUpdates(async () => {
            await setAuthModalOpen(false);
            setValues(initVals);
            handleCancel();
        });
    };

    const handleForgetPass = () => {
        unstable_batchedUpdates(() => {
            setFormStatus('rec');
            tabsHandler(null, 1);
        });
    };

    const runTimer = () => {
        if (activeTimer) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            } else {
                const isFirstSignIn = formStatus === 'firstSignIn';
                unstable_batchedUpdates(() => {
                    setErrorMsg('');
                    setActiveTimer(false);
                    setFormStatus(isFirstSignIn ? 'reg' : 'rec');
                });
            }
        } else {
            setTimer(CONFIRM_SECONDS);
        }
    };

    const signInHandle = async (phone, password) => {
        const data = await userAPI.login(phone, password);
        unstable_batchedUpdates(() => {
            addUser(data.user);
            handleCloseModal();
            cookies.set('slondo_user', data.user, cookieOpts);
            cookies.set('slondo_auth', data.token, cookieOpts);
        });
    };

    const onSubmit = async (values) => {
        try {
            const {phone, password, code} = values;
            const preparedPhone = phonePrepare(phone);

            unstable_batchedUpdates(() => {
                setIsFetch(true);
                setErrorMsg('');
                setTouched({});
            });

            if (isSignInTab) {
                await signInHandle(preparedPhone, password);
                setIsFetch(false);
                return;
            }

            switch (formStatus) {
                case "firstSignIn":
                    await signInHandle(preparedPhone, password);
                    break;
                case "reg":
                    await userAPI.register(preparedPhone);
                    unstable_batchedUpdates(() => {
                        setActiveTimer(true);
                        setFormStatus('firstSignIn');
                    });
                    break;
                case "rec":
                    await userAPI.getSmsCode(preparedPhone);
                    unstable_batchedUpdates(() => {
                        setActiveTimer(true);
                        setFormStatus('code');
                    });
                    break;
                case "code":
                    await userAPI.confirmSmsCode(preparedPhone, code);
                    unstable_batchedUpdates(() => {
                        setActiveTimer(false);
                        setFormStatus('newPass');
                    });
                    break;
                case "newPass":
                    const {token, user} = await userAPI.newPassword(preparedPhone, code, password);
                    unstable_batchedUpdates(() => {
                        addUser(user);
                        handleCloseModal();
                        cookies.set('slondo_user', user, cookieOpts);
                        cookies.set('slondo_auth', token, cookieOpts);
                    });
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

    const getValidationSchema = () => {
        if (isSignInTab) return signInSchema;
        switch (formStatus) {
            case 'firstSignIn':
                return signInSchema;
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

    const getSubmitTxt = (): SubmitTxtType => {
        if (isSignInTab) return 'signIn';
        switch (formStatus) {
            case 'code':
            case 'newPass':
                return 'send';
            case 'rec':
                return 'recoverPassword';
            case 'reg':
                return 'signUp';
            case 'firstSignIn':
                return 'signIn';
        }
    };

    const signInForm = (
        <div className='auth-form'>
            <div>
                <div className="formik-num-pass">
                    <FormikField
                        t={t}
                        type="tel"
                        name="phone"
                        autoFocus
                        value={values.phone}
                        onChange={handleInput}
                        labelText={t('enter_phone')}
                        errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                    />
                    <FormikField
                        t={t}
                        type="password"
                        name="password"
                        onChange={handleInput}
                        value={values.password}
                        labelText={t('password')}
                        errorMsg={getErrorMsg(errors.password, touched.password, t)}
                        placeholder={t(isSignInTab ? 'enter_password' : 'enter_sms_password')}
                    />
                </div>
                {isSignInTab && (
                    <div className='forget-password'>
                        <Typography
                            variant="subtitle1"
                            onClick={handleForgetPass}
                            style={{cursor: 'pointer'}}
                        >
                            {t('forget_password')}
                        </Typography>
                    </div>
                )}
                {!isSignInTab && (
                    <Typography
                        variant="subtitle2"
                        className="resendTxt"
                    >
                        {t(`resendSms`, {timer: `${time.minutes}:${time.seconds}`})}
                    </Typography>
                )}
            </div>
        </div>
    );

    const regForm = (
        <FormikField
            t={t}
            autoFocus
            type="tel"
            name="phone"
            onChange={handleInput}
            labelText={t('enter_phone')}
            errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
        />
    );

    const getFormByStatus = (): ReactNode => {
        switch (formStatus) {
            case 'firstSignIn':
                return signInForm;
            case 'reg':
            case 'rec':
                return <div>
                    {regForm}
                    <Box mt={2} className={classes.regHint}>
                        <BorderErrorIcon/>
                        <Typography variant='subtitle2' component='p' color='initial'>
                            {t(formStatus === 'reg' ? 'regHint' : 'recHint')}
                        </Typography>
                    </Box>
                </div>;
            case 'code':
                return <div className='code-confirm-form'>
                    <div className="formik-code-confirm">
                        <FormikField
                            t={t}
                            autoFocus
                            name="code"
                            onChange={handleInput}
                            placeholder={t('enter_sms')}
                            errorMsg={getErrorMsg(errors.code, touched.code, t)}
                        />
                        <Typography
                            variant="subtitle2"
                            className="resendTxt"
                        >
                            {t(`resendSms`, {timer: `${time.minutes}:${time.seconds}`})}
                        </Typography>
                    </div>
                </div>;
            case 'newPass':
                return <div className='pass-confirm-form'>
                    <div className="formik-num-pass">
                        <FormikField
                            t={t}
                            autoFocus
                            type="password"
                            name="password"
                            onChange={handleInput}
                            placeholder={t('enter_new_password')}
                            errorMsg={getErrorMsg(errors.password, touched.password, t)}
                        />
                        <FormikField
                            t={t}
                            type="password"
                            name="password_confirm"
                            onChange={handleInput}
                            placeholder={t('repeat_new_password')}
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
            fullScreen={smDown}
            openDialog={authModalOpen}
            handleCloseDialog={handleCloseModal}
        >
            <div className={classes.root}>
                <Grid container>
                    <Hidden smDown>
                        <Grid item xs={5}>
                            <div className='info-block'>
                                <Grid container spacing={2} alignItems='center'>
                                    <Grid container alignItems='center' item xs={12}>
                                        <Grid item xs={2}>
                                            <BonusIcon/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2" color="initial">
                                                {t('bonus')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' item xs={12}>
                                        <Grid item xs={2}>
                                            <SafeBuyingIcon/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2" color="initial">
                                                {t('safeBuying')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' item xs={12}>
                                        <Grid item xs={2}>
                                            <AdsIcon/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2" color="initial">
                                                {t('createAd')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' item xs={12}>
                                        <Grid item xs={2}><TorgIcon/></Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2" color="initial">
                                                {t('createAuction')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems='center' item xs={12}>
                                        <Grid item xs={2}>
                                            <RatingIcon/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2" color="initial">
                                                {t('rating')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
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
                                        <Typography variant="body2" className="error-text">
                                            {t(`errors:${errorMsg}`)}
                                        </Typography>
                                    </div>
                                    <div className="tabs-container">
                                        <FormikProvider value={formik}>
                                            <Form onSubmit={formik.handleSubmit}>
                                                <Tabs
                                                    className="tabs"
                                                    value={tabIndex}
                                                    onChange={tabsHandler}
                                                    indicatorColor="primary"
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
                                                                {t(formStatus === 'rec' ? 'resetPassTitle' : 'signUpTitle')}
                                                            </Typography>
                                                        }
                                                    />
                                                </Tabs>
                                                <div className="tab-panels">
                                                    <CustomTabPanel value={tabIndex} index={0}>
                                                        {signInForm}
                                                    </CustomTabPanel>
                                                    <CustomTabPanel value={tabIndex} index={1}>
                                                        {getFormByStatus()}
                                                    </CustomTabPanel>
                                                    <div className='auth-btns'>
                                                        {!isSignInTab && (
                                                            <CustomButton onClick={handleCancel} className='cancel-btn'>
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
                                        {!isSignInTab && formStatus === 'reg' && (
                                            <Typography className="reg-agreement" variant="body2">
                                                {`${t('agreement.firstPart')} `}
                                                <Link href="#">
                                                    <a>{`${t('agreement.secondPart')}`}</a>
                                                </Link>
                                            </Typography>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <IconButton
                size='medium'
                onClick={handleCloseModal}
                className={classes.closeBtn}
            >
                <CloseIcon/>
            </IconButton>
        </ResponsiveModal>
    );
};