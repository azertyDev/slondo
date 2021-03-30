import React, {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {Typography} from '@material-ui/core'
import {Form, FormikProvider, useFormik} from 'formik';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {authSchema} from '@root/validation_schemas/authRegSchema';
import {signInAction} from '@src/redux/slices/userSlice';
import {cookies, cookieOpts, phoneFormat} from "@src/helpers";


const initialInputsVals = {
    isFetch: false,
    error: null,
    phone: '+(998) ',
    password: '',
    code: ''
};

type AuthFormPropsType = {
    handleCloseModal: () => void,
    handleForgetPass: () => void,
    setErrorMsg: Dispatch<SetStateAction<string>>
} & WithT;

export const AuthForm: FC<AuthFormPropsType> = (props) => {
    const {
        t,
        handleCloseModal,
        handleForgetPass,
        setErrorMsg
    } = props;

    const dispatch = useDispatch();

    const handlePhoneInput = ({target: {value, name}}) => {
        if (value.length >= 7) {
            setValues({...values, [name]: value});
        }
    };

    const handlePasswordInput = ({target: {value, name}}) => {
        setValues({...values, [name]: value});
    };

    const onSubmit = async (values) => {
        const phone = phoneFormat(values.phone);
        const data = {...values, phone};

        try {
            await setValues({...values, isFetch: true});
            const {token, user} = await userAPI.login(data.phone, data.password);
            cookies.set('slondo_user', user, cookieOpts);
            cookies.set('slondo_auth', token, cookieOpts);
            await setValues({...values, isFetch: false});
            handleCloseModal();
            dispatch(signInAction(user));
        } catch (e) {
            setErrorMsg(e.error);
            await setValues({...values, isFetch: false});
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initialInputsVals,
        validationSchema: authSchema
    });

    const {values, setValues, errors, touched} = formik;

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <CustomFormikField
                    type="tel"
                    name="phone"
                    labelText={t('enterPhone')}
                    errorMsg={
                        errors?.phone && touched?.phone
                            ? t(`errors:${errors.phone}`)
                            : ''
                    }
                    placeholder={t('enterPhone')}
                    onChange={handlePhoneInput}
                />
                <CustomFormikField
                    name="password"
                    type="password"
                    labelText={t('enterPassword')}
                    errorMsg={
                        errors?.password && touched?.password
                            ? t(`errors:${errors.password}`)
                            : ''
                    }
                    placeholder={t('enterPassword')}
                    onChange={handlePasswordInput}
                />
                <div className='forget-password'>
                    <Typography
                        variant="subtitle1"
                        onClick={handleForgetPass}
                        style={{cursor: "pointer"}}
                    >
                        {t('forgetPassword')}
                    </Typography>
                </div>
                <div className='auth-btns'>
                    <ButtonComponent type="submit">
                        {t('signIn')}
                    </ButtonComponent>
                </div>
            </Form>
        </FormikProvider>
    )
};