import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {cookieOpts, cookies, getErrorMsg, phonePrepare} from '@src/helpers';
import {useTranslation} from 'react-i18next';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {useFormik} from 'formik';
import {codeSchema, passwordConfirmSchema} from '@root/validation_schemas/authRegSchema';
import {userAPI} from '@src/api/api';
import {useHandlers} from '@src/hooks';
import {AuthCtx} from '@src/context';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {Box, Grid, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CONFIRM_SECONDS} from '@src/constants';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useStyles} from './useStyles';

type PasswordRecoveryPropsType = {
    open: boolean,
    handleModalClose: () => void
}

enum Statuses {
    'confirm',
    'code_confirm',
    'new_password'
}

export const ChangePasswordModal: FC<PasswordRecoveryPropsType> = ({open, handleModalClose}) => {
    const {t} = useTranslation('auth_reg');
    const {user: userInfo, addUser} = useContext(AuthCtx);

    const initVals = {
        code: '',
        password: '',
        password_confirm: ''
    };

    const [status, setStatus] = useState<keyof typeof Statuses>('confirm');
    const isConfirm = status === 'confirm';

    const [isFetch, setIsFetch] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [timer, setTimer] = useState(CONFIRM_SECONDS);
    const [activeTimer, setActiveTimer] = useState(false);

    const reset = () => {
        unstable_batchedUpdates(() => {
            setValues(initVals);
            setErrorMsg('');
            setStatus('confirm');
            setActiveTimer(false);
        });
    };

    const closeModal = () => {
        handleModalClose();
        !activeTimer && reset();
    };

    const runTimer = () => {
        if (activeTimer) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            } else {
                reset();
            }
        } else {
            setTimer(CONFIRM_SECONDS);
        }
    };

    const onSubmit = async ({code, password}) => {
        try {
            setIsFetch(true);
            switch (status) {
                case "confirm":
                    await userAPI.getSmsCode(userInfo.phone);
                    unstable_batchedUpdates(() => {
                        setIsFetch(false);
                        setActiveTimer(true);
                        setStatus('code_confirm');
                    });
                    break;
                case "code_confirm":
                    await userAPI.confirmSmsCode(userInfo.phone, values.code);
                    unstable_batchedUpdates(() => {
                        setIsFetch(false);
                        setActiveTimer(false);
                        setStatus('new_password');
                        !!errorMsg && setErrorMsg('');
                        setValues({...values, code: values.code});
                    });
                    break;
                case "new_password":
                    const {token, user} = await userAPI.newPassword(phonePrepare(userInfo.phone), code, password);
                    unstable_batchedUpdates(() => {
                        closeModal();
                        addUser(user);
                        cookies.set('slondo_user', user, cookieOpts);
                        cookies.set('slondo_auth', token, cookieOpts);
                    });
            }
            setIsFetch(false);
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const getValidationSchema = () => {
        switch (status) {
            case "code_confirm":
                return codeSchema;
            case "new_password":
                return passwordConfirmSchema;
            default:
                return null;
        }
    };

    const formik = useFormik<{
        code: string,
        password: string,
        password_confirm: string
    }>({
        onSubmit,
        initialValues: initVals,
        validationSchema: getValidationSchema()
    });

    const {
        values,
        setValues,
        errors,
        touched
    } = formik;

    const {handleInput, handleNumericInput} = useHandlers(values, setValues);

    const statusObserver = () => {
        switch (status) {
            case 'confirm':
                return t('change_password_confirm');
            case 'code_confirm':
                return t('enter_sms');
            case 'new_password':
                return t('enter_new_password');
            default:
                return;
        }
    };

    const getContent = () => {
        switch (status) {
            case 'confirm':
                return <Grid item xs={12} container justifyContent='center'>
                    <Typography variant='subtitle1' component='p' align='center'>
                        {t('codeWillBeSent')}
                    </Typography>
                </Grid>;
            case 'code_confirm':
                return <>
                    <Grid item xs={12}>
                        <FormikField
                            t={t}
                            type="text"
                            name="code"
                            placeholder={t('enter_sms')}
                            onChange={handleNumericInput}
                            errorMsg={getErrorMsg(errors.code, touched.code, t)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle2"
                            className="resendTxt"
                            align='center'
                        >
                            {t(`resendSms`, {timer: timer})}
                        </Typography>
                    </Grid>
                </>;
            case 'new_password':
                return <div className="formik-num-pass">
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
                </div>;
        }
    };

    useEffect(() => {
        runTimer();
    }, [activeTimer, timer]);

    const classes = useStyles();
    return (
        <ResponsiveModal
            openDialog={open}
            maxWidth='xs'
            handleCloseDialog={handleModalClose}
        >
            <div className={classes.root}>
                <ModalHeader
                    title={statusObserver()}
                    handleCloseDialog={handleModalClose}
                />
                <Box px={4} py={2} mt={2} className={classes.modalBody}>
                    <CustomFormikProvider formik={formik}>
                        <Grid container direction='column' justifyContent='center' spacing={2}>
                            {errorMsg && (
                                <Grid item xs={12}>
                                    <Typography
                                        gutterBottom
                                        component='p'
                                        align='center'
                                        variant='subtitle2'
                                        className='error-text'
                                    >
                                        {t(`errors:${errorMsg}`)}
                                    </Typography>
                                </Grid>
                            )}
                            {getContent()}
                            <Grid
                                item
                                container
                                spacing={2}
                                justifyContent='center'
                            >
                                {isConfirm && (
                                    <Grid item xs={6}>
                                        <CustomButton onClick={closeModal} color='silver'>
                                            <Typography variant='subtitle1' component='p'>
                                                {t('cancel')}
                                            </Typography>
                                        </CustomButton>
                                    </Grid>
                                )}
                                <Grid item xs={6}>
                                    <CustomButton type="submit" disabled={isFetch} color='secondary'>
                                        <Typography variant='subtitle1' component='p'>
                                            {t(`common:${isConfirm ? 'perform' : 'send'}`)}
                                        </Typography>
                                    </CustomButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CustomFormikProvider>
                </Box>
            </div>
        </ResponsiveModal>
    );
};