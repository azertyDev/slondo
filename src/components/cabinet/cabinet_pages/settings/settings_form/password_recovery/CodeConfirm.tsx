import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {userAPI} from '@src/api/api';
import {getErrorMsg} from '@src/helpers';
import {Typography} from '@material-ui/core';

type CodeConfirmPropsType = {
    phone: string,
    timer: number,
    handleDisableTimer: () => void,
    setErrorMsg: Dispatch<SetStateAction<string>>,
    handlePassConfirm: () => void,
    setCode: Dispatch<SetStateAction<string>>,
    setOpenModal: (value: boolean) => void,
    errorMsg: string
} & WithT;

export const CodeConfirm: FC<CodeConfirmPropsType> = (props) => {
    const {
        t,
        timer,
        phone,
        handleDisableTimer,
        handlePassConfirm,
        setCode,
        errorMsg,
        setErrorMsg
    } = props;


    const initialInputsVals = {
        isFetch: false,
        code: ''
    };

    async function onSubmit(values) {
        try {
            await userAPI.confirmSmsCode(phone, values.code);
            setCode(values.code);
            handleDisableTimer();
            handlePassConfirm();
            !!errorMsg && setErrorMsg('');
        } catch (e) {
            setErrorMsg(e.error);
        }
    }

    const formik = useFormik({
        onSubmit,
        initialValues: initialInputsVals,
        validationSchema: codeSchema
    });

    const {
        errors,
        touched,
        values,
        isSubmitting,
        handleSubmit
    } = formik;

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className='auth-form'>
                <div>
                    <CustomFormikField
                        type="tel"
                        value={phone}
                        disabled
                        labelText={t('phoneNumber')}
                    />
                    <CustomFormikField
                        type="text"
                        name="code"
                        labelText={t('post:enterSMS')}
                        placeholder={t('post:enterSMS')}
                        errorMsg={getErrorMsg(errors.code, touched.code, t)}
                    />
                    {errorMsg && (
                        <Typography variant='subtitle1'>
                            {t(`errors:${errorMsg}`)}
                        </Typography>
                    )}
                    <span>{timer}</span>
                </div>
                <div className='auth-btns'>
                    <ButtonComponent type="submit" disabled={isSubmitting}>
                        Далее
                    </ButtonComponent>
                </div>
            </Form>
        </FormikProvider>
    );
};
