import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Tab, Tabs, Typography} from "@material-ui/core";
import {i18n, Link} from "@root/i18n";
import {CustomTabPanel} from "../custom_tab_panel/CustomTabPanel";
import {Form, FormikProvider, useFormik} from "formik";
import {CustomFormikField} from "../custom_formik_field/CustomFormikField";
import {ButtonComponent} from "../button/Button";
import {RootState} from "@src/redux/rootReducer";
import {fetchTokenLogin, fetchTokenRegister} from "@src/redux/slices/authRegSlice";
import {AuthInputs} from "@root/interfaces/Auth";
import {WithT} from "i18next";
import {useStyles} from './useStyles';
import {authRegSchema} from "@root/validation_schemas/authRegSchema";
import ConfirmAuth from "@src/components/elements/auth_reg_form/ConfirmAuth";
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {toCamelCase, cookies} from "@src/helpers";
import {userAPI} from "@src/api/api";
import {setIsAuthAction} from "@src/redux/slices/authRegSlice";


const initialInputsVals: AuthInputs = {
    phone: '+998',
    password: '',
    code: ''
};

export const AuthRegForm: FC<WithT & { handleCloseModal: () => void }> = (props) => {
    const {t} = props;
    const {language} = i18n;

    const dispatch = useDispatch();
    const {isFetch, error} = useSelector((store: RootState) => store.auth);

    const [tabValue, setTabValue] = useState(0);
    const [resetPassword, setResetPassword] = useState(false);

    const tabsHandler = (event, newValue) => {
        setTabValue(newValue);
        newValue === 0 && setResetPassword(false)
    };


    const loginReg = (values) => {
        const phone = values.phone.replace("+", "");
        const data = {...values, phone};
        if (tabValue === 0) {
            userAPI.login(data.phone, data.password)
                .then(result => {
                    cookies.set('token', result.token, {path: '/', maxAge: 2 * 3600});
                    cookies.set('user', result.user, {path: '/', maxAge: 2 * 3600});
                    dispatch(setIsAuthAction({payload: true}));
                })
                .catch(error => dispatch(setErrorMsgAction(t(`auth_reg:${toCamelCase(error.response.data.error)}`))))
        } else {
            userAPI.register(phone)
                .then(result => console.warn("result", result))
                .catch(error => dispatch(setErrorMsgAction(t(`auth_reg:${toCamelCase(error.response.data.error)}`))))
        }
    };

    const onSubmit = (values) => {
        loginReg(values);
        tabValue === 0 ? props.handleCloseModal() : setTabValue(0);
    };

    const formik = useFormik({
        initialValues: initialInputsVals,
        validationSchema: tabValue === 0 ? authRegSchema : null,
        onSubmit
    });

    const {errors, touched} = formik;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="form-block">
                <div className="server-error">
                    {error &&
                    <Typography variant="body2" className="error-text">{t('auth_reg:serverError')}</Typography>}
                </div>
                <div className="tabs-container">
                    <Tabs
                        value={tabValue}
                        onChange={tabsHandler}
                        indicatorColor="primary"
                        className="tabs"
                    >
                        <Tab
                            label={
                                <Typography variant="subtitle1">
                                    {t('auth_reg:signInTitle')}
                                </Typography>
                            }
                            value={0}
                        />
                        <Tab
                            label={
                                <Typography variant="subtitle1">
                                    {t(`auth_reg:${resetPassword ? 'resetPassTitle' : 'signUpTitle'}`)}
                                </Typography>
                            }
                            value={1}
                        />
                    </Tabs>
                    <div className="tab-panels">
                        <CustomTabPanel
                            value={tabValue}
                            index={0}
                            className="sign-panel"
                        >
                            <FormikProvider value={formik}>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <CustomFormikField
                                            name="phone"
                                            type="tel"
                                            labelText={t('auth_reg:enterPhone')}
                                            placeholder="+ (998) __ ___ __ __"
                                            className={errors.phone && touched.phone ? 'error-border' : ''}
                                        />
                                        <div className="validation-block">
                                            <Typography variant="subtitle2" className="error-text">
                                                {errors.phone && touched.phone ? errors.phone : ''}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <CustomFormikField
                                            name="password"
                                            type="password"
                                            labelText="Введите пароль"
                                            placeholder={t('auth_reg:enterPassword')}
                                            className={errors.password && touched.password ? 'error-border' : ''}
                                        />
                                        <div className="validation-block">
                                            <Typography variant="subtitle2" className="error-text">
                                                {errors.password && touched.password ? errors.password : ''}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                onClick={() => {
                                                    setTabValue(1), setResetPassword(true)
                                                }}
                                                style={{cursor: "pointer"}}
                                            >
                                                {t('auth_reg:forgetPassword')}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={classes.modalBtns}>
                                        <ButtonComponent
                                            className="signin-btn"
                                            type="submit"
                                            disabled={isFetch}
                                        >
                                            {t('common:signIn')}
                                        </ButtonComponent>
                                    </div>
                                </Form>
                            </FormikProvider>
                            <div className={classes.agreement}>
                                <Typography className="reg-agreement" variant="body2">
                                    Нажимая кнопку Войти вы принимаете условия {' '}
                                    <Link href="#">
                                        <a>лицензионного соглашения</a>
                                    </Link>
                                    {` ${t('auth_reg:agreement.thirdPart')} `}
                                    <Link href="#">
                                        <a>политики конфиденциальности</a>
                                    </Link>
                                    {language === 'uz' && ` ${t('auth_reg:agreement.fifthPart')}`}
                                </Typography>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={tabValue} index={1} className="reg-panel">
                            {resetPassword
                                ? <ConfirmAuth t={t}/>
                                : <FormikProvider value={formik}>
                                    <Form onSubmit={formik.handleSubmit}>
                                        <div>
                                            <CustomFormikField
                                                name="phone"
                                                type="tel"
                                                placeholder="+ (998) __ ___ __ __"
                                                labelText={t('auth_reg:enterPhone')}
                                                className={errors.phone && touched.phone ? 'error-border' : ''}
                                            />
                                            <div className="validation-block">
                                                <Typography variant="subtitle2" className="error-text">
                                                    {errors.phone && touched.phone ? errors.phone : ''}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className={classes.modalBtns}>
                                            <ButtonComponent
                                                className="reg-btn"
                                                type="submit"
                                            >
                                                {t('auth_reg:signUp')}
                                            </ButtonComponent>
                                        </div>
                                    </Form>
                                </FormikProvider>
                            }
                            <div className={classes.agreement}>
                                <Typography className="reg-agreement" variant="body2">
                                    {`${t('auth_reg:agreement.firstPart')} `}
                                    <Link href="#">
                                        <a>{`${t('auth_reg:agreement.secondPart')} `}</a>
                                    </Link>
                                    {`${t('auth_reg:agreement.thirdPart')} `}
                                    <Link href="#">
                                        <a>{`${t('auth_reg:agreement.fourthPart')}`}</a>
                                    </Link>
                                    {language === 'uz' && ` ${t('auth_reg:agreement.fifthPart')}`}
                                </Typography>
                            </div>
                        </CustomTabPanel>
                    </div>
                </div>
            </div>
        </div>
    )
};
