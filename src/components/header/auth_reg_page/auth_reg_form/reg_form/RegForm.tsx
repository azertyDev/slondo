import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {userAPI} from '@src/api/api';
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {phoneSchema} from '@root/validation_schemas/authRegSchema';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {getErrorMsg, phonePrepare} from '@src/helpers';


type RegFormPropsType = {
    handleCancel: () => void,
    setErrorMsg: Dispatch<SetStateAction<string>>
} & WithT;

const initialInputsVals = {
    isFetch: false,
    error: null,
    phone: '',
    code: ''
};

export const RegForm: FC<RegFormPropsType> = (props) => {
    const {
        t,
        handleCancel,
        setErrorMsg
    } = props;

    const handlePhoneInput = ({target: {value, name}}) => {
        if (value.length >= 7) {
            setValues({...values, [name]: value});
        }
    };

    const onSubmit = async (values) => {
        const phone = phonePrepare(values.phone);
        try {
            await setValues({...values, isFetch: true});
            await userAPI.register(phone);
            await setValues({...values, isFetch: false});
            handleCancel();
        } catch (e) {
            setErrorMsg(e.error);
            await setValues({...values, isFetch: false});
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initialInputsVals,
        validationSchema: phoneSchema
    });

    const {values, setValues, errors, touched} = formik;

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} className='auth-form'>
                <CustomFormikField
                    t={t}
                    type="tel"
                    name="phone"
                    labelText='enter_phone'
                    onChange={handlePhoneInput}
                    errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                />
                <div className='auth-btns'>
                    <ButtonComponent type="submit">
                        {t('signUp')}
                    </ButtonComponent>
                </div>
            </Form>
        </FormikProvider>
    );
};