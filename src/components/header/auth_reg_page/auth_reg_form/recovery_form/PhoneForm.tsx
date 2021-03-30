import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from "i18next";
import {Form, FormikProvider, useFormik} from "formik";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {phoneSchema} from '@root/validation_schemas/authRegSchema';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {userAPI} from "@src/api/api";
import {phoneFormat} from "@src/helpers";


type ConfirmAuthPropsType = {
    activateTimer: () => void,
    setErrorMsg: Dispatch<SetStateAction<string>>
    setPhone: Dispatch<SetStateAction<string>>
} & WithT;

export const PhoneForm: FC<ConfirmAuthPropsType> = (props) => {
    const {
        t,
        activateTimer,
        setErrorMsg,
        setPhone
    } = props;

    const initialInputsVals = {
        isFetch: false,
        phone: '+(998) '
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initialInputsVals,
        validationSchema: phoneSchema
    });

    const {
        errors,
        touched,
        values,
        setValues
    } = formik;

    const handlePhoneInput = ({target: {value, name}}) => {
        if (value.length >= 7) {
            setValues({...values, [name]: value});
        }
    };

    async function onSubmit(values) {
        const phone = phoneFormat(values.phone);
        try {
            await setValues({...values, isFetch: true});
            // await userAPI.getSmsCode(phone);
            await setValues({...values, isFetch: false});
            setPhone(phone)
            activateTimer();
        } catch (e) {
            setErrorMsg(e.error);
            await setValues({...values, isFetch: false});
        }
    }

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} className='auth-form'>
                <CustomFormikField
                    type="tel"
                    name="phone"
                    labelText={t('enterPhone')}
                    placeholder={t('enterPhone')}
                    onChange={handlePhoneInput}
                    errorMsg={
                        errors.phone && touched.phone
                            ? t(`errors:${errors.phone as string}`)
                            : ''}
                />
                <div className='auth-btns'>
                    <ButtonComponent type="submit" disabled={values.isFetch}>
                        {t('recoverPassword')}
                    </ButtonComponent>
                </div>
            </Form>
        </FormikProvider>
    )
};
