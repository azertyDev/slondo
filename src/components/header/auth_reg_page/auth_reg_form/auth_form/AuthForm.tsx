import {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {Typography} from '@material-ui/core';
import {Form, FormikProvider, useFormik} from 'formik';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {authSchema} from '@root/validation_schemas/authRegSchema';
import {signInAction} from '@src/redux/slices/userSlice';
import {cookies, cookieOpts, phonePrepare, getErrorMsg} from '@src/helpers';


const initialInputsVals = {
    isFetch: false,
    error: null,
    phone: '',
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

    const onSubmit = async (values) => {
        try {
            const phone = phonePrepare(values.phone);

            await setValues({...values, isFetch: true});
            const {token, user} = await userAPI.login(phone, values.password);
            await setValues({...values, isFetch: false});

            cookies.set('slondo_user', user, cookieOpts);
            cookies.set('slondo_auth', token, cookieOpts);

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

    const handleInput = ({target: {value, name}}) => {
        setValues({...values, [name]: value});
    };

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <div className="formik-num-pass">
                    <FormikField
                        t={t}
                        type="tel"
                        name="phone"
                        labelText='enter_phone'
                        value={values.phone}
                        onChange={handleInput}
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
                <div className='auth-btns sing-in'>
                    <CustomButton type="submit">
                        {t('signIn')}
                    </CustomButton>
                </div>
            </Form>
        </FormikProvider>
    );
};