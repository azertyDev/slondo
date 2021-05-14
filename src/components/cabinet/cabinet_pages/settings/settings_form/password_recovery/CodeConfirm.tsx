import {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {Form, FormikProvider, useFormik} from 'formik';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
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
        isSubmitting,
        handleSubmit
    } = formik;

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className='auth-form'>
                <div>
                    <FormikField
                        t={t}
                        disabled
                        type="tel"
                        value={phone}
                        labelText='phone_number'
                    />
                    <FormikField
                        t={t}
                        type="text"
                        name="code"
                        labelText='enter_sms'
                        placeholder={t('filters:enter_sms')}
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
                    <CustomButton type="submit" disabled={isSubmitting}>
                        Далее
                    </CustomButton>
                </div>
            </Form>
        </FormikProvider>
    );
};
