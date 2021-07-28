import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {cookieOpts, cookies, getErrorMsg, phonePrepare} from "@src/helpers";
import {useTranslation} from "react-i18next";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {useFormik} from "formik";
import {codeSchema, passwordConfirmSchema} from "@root/validation_schemas/authRegSchema";
import {userAPI} from "@src/api/api";
import {useHandlers} from "@src/hooks";
import {UserCtx} from "@src/context";
import {CustomFormikProvider} from "@src/components/elements/custom_formik_provider/CustomFormikProvider";
import {Backdrop, Modal, Typography} from "@material-ui/core";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {CONFIRM_SECONDS} from "@src/constants";
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
    const {user: userInfo, setUser} = useContext(UserCtx);

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
                        cookies.set('slondo_user', user, cookieOpts);
                        cookies.set('slondo_auth', token, cookieOpts);
                        setUser(user);
                        closeModal();
                    });
            }
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

    const getContent = () => {
        switch (status) {
            case "confirm":
                return <div>
                    <Typography>{t('change_password_confirm')}</Typography>
                </div>;
            case "code_confirm":
                return <>
                    <FormikField
                        t={t}
                        type="text"
                        name="code"
                        placeholder={t('enter_sms')}
                        onChange={handleNumericInput}
                        errorMsg={getErrorMsg(errors.code, touched.code, t)}
                    />
                    <Typography
                        variant="subtitle2"
                        className="resendTxt"
                    >
                        {t(`resendSms`, {timer: timer})}
                    </Typography>
                </>;
            case "new_password":
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
        <Modal
            keepMounted
            open={open}
            closeAfterTransition
            onClose={closeModal}
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 300}}
            className={classes.modal}
        >
            <div className={classes.root}>
                <CustomFormikProvider formik={formik}>
                    <div>{t(`errors:${errorMsg}`)}</div>
                    {getContent()}
                    {isConfirm && (
                        <CustomButton onClick={closeModal}>
                            {t('cancel')}
                        </CustomButton>
                    )}
                    <CustomButton type="submit" disabled={isFetch}>
                        {t(`common:${isConfirm ? 'perform' : 'send'}`)}
                    </CustomButton>
                </CustomFormikProvider>
            </div>
        </Modal>
    );
};