import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import { setErrorMsgAction } from '@root/src/redux/slices/errorSlice';

type CodeConfirmPropsType = {
    phone: string,
    timer: number,
    handleDisableTimer: () => void,
    setErrorMsg: Dispatch<SetStateAction<string>>,
    handlePassConfirm: () => void,
    setCode: Dispatch<SetStateAction<string>>,
    setOpenModal: (value: boolean) => void
} & WithT;

export const CodeConfirm: FC<CodeConfirmPropsType> = (props) => {
    const dispatch = useDispatch();
    const {
        t,
        timer,
        phone,
        setErrorMsg,
        handleDisableTimer,
        handlePassConfirm,
        setCode,
        setOpenModal
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
        } catch (e) {
            setOpenModal(false);
            dispatch(setErrorMsgAction(e.error));
            console.log(e.error);
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

    console.log(values);

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
                        labelText={t('enterSMS')}
                        placeholder={t('enterSMS')}
                        errorMsg={
                            errors.code && touched.code
                                ? t(`errors:${errors.code}`)
                                : ''
                        }
                    />
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
