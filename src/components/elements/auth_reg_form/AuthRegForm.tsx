import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Tabs, Typography} from "@material-ui/core"
import {i18n, Link} from "@root/i18n"
import {CustomTab} from "../custom_tab/CustomTab"
import {CustomTabPanel} from "../custom_tab_panel/CustomTabPanel"
import {Form, Formik} from "formik"
import {CustomFormikField} from "../custom_formik_field/CustomFormikField"
import {ButtonComponent} from "../button/Button"
import {requiredValidate, phoneValidate} from '../../../components/validates'
import {RootState} from "@src/redux/rootReducer"
import {fetchToken} from "@src/redux/slices/authRegSlice"
import {AuthInputTypes} from "@root/types/AuthInputTypes";
import {useStyles} from './useStyles'


const initialInputsVals: AuthInputTypes = {
    phone: '998908080265',
    password: '123456789aaa'
};

export const AuthRegForm = (props) => {
    const {t} = props;
    const {language} = i18n;

    const dispatch = useDispatch();
    const {isFetch, error} = useSelector((store: RootState) => store.auth);

    const [tabValue, setTabValue] = useState(0);

    const tabsHandler = (event, newValue) => {
        setTabValue(newValue);
    };

    const loginReg = (values) => {
        if (tabValue === 0) {
            return dispatch(fetchToken(values))
        }
    };

    const onSubmit = (values, actions) => {
        loginReg(values);
        actions.resetForm();
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='form-block'>
                <div>
                    {error && <Typography className={classes.errorTxt}>{error}</Typography>}
                </div>
                <div className='tabs-container'>
                    <Tabs
                        value={tabValue}
                        onChange={tabsHandler}
                        indicatorColor="primary"
                        className='tabs'
                    >
                        <CustomTab
                            label={
                                <Typography variant="subtitle1">
                                    {t('auth_reg:signInTitle')}
                                </Typography>
                            }
                            id={0}
                        />
                        <CustomTab
                            label={
                                <Typography variant="subtitle1">
                                    {t('auth_reg:signUpTitle')}
                                </Typography>
                            }
                            id={1}
                        />
                    </Tabs>
                    <div className='tab-panels'>
                        <CustomTabPanel
                            value={tabValue}
                            index={0}
                            className='sign-panel'
                        >
                            <Formik initialValues={initialInputsVals} onSubmit={onSubmit}>
                                {({errors, touched, setFieldValue}) => {
                                    return (
                                        <Form>
                                            <div>
                                                <Typography
                                                    className={classes.errorTxt}
                                                    variant="subtitle2"
                                                >
                                                    {errors.phone && touched.phone ? errors.phone : ''}
                                                </Typography>
                                                <CustomFormikField
                                                    name='phone'
                                                    type='tel'
                                                    placeholder={t('auth_reg:enterPhone')}
                                                    setFieldValue={setFieldValue}
                                                    validate={phoneValidate}
                                                    className={errors.phone && touched.phone ? classes.errorInput : ''}
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    className={classes.errorTxt}
                                                    variant="subtitle2"
                                                >
                                                    {errors.password && touched.password ? errors.password : ''}
                                                </Typography>
                                                <CustomFormikField
                                                    name='password'
                                                    type="password"
                                                    placeholder={t('auth_reg:enterPassword')}
                                                    validate={requiredValidate}
                                                    setFieldValue={setFieldValue}
                                                    className={errors.password && touched.password ? classes.errorInput : ''}
                                                />
                                            </div>
                                            <div className='forget-password'>
                                                <a href="#">
                                                        <span>
                                                            {t('auth_reg:forgetPassword')}
                                                        </span>
                                                </a>
                                            </div>
                                            <div className={classes.modalBtns}>
                                                <ButtonComponent
                                                    className='signin-btn'
                                                    type='submit'
                                                    disabled={isFetch}
                                                >
                                                    {t('common:signIn')}
                                                </ButtonComponent>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </CustomTabPanel>
                        <CustomTabPanel value={tabValue} index={1} className='reg-panel'>
                            <Formik initialValues={initialInputsVals} onSubmit={onSubmit}>
                                {({errors, touched, setFieldValue}) => (
                                    <Form>
                                        <div>
                                            <Typography
                                                className={classes.errorTxt}
                                                variant="subtitle2"
                                            >
                                                {errors.phone && touched.phone ? errors.phone : ''}
                                            </Typography>
                                            <CustomFormikField
                                                name='phone'
                                                type='tel'
                                                placeholder={t('auth_reg:enterPhone')}
                                                validate={phoneValidate}
                                                setFieldValue={setFieldValue}
                                                className={errors.phone && touched.phone ? classes.errorInput : ''}
                                            />
                                        </div>
                                        <div className={classes.modalBtns}>
                                            <ButtonComponent className='reg-btn' type='submit'>
                                                {t('auth_reg:signUp')}
                                            </ButtonComponent>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div className={classes.agreement}>
                                <Typography className='reg-agreement' variant='body2'>
                                    {`${t('auth_reg:agreement.firstPart')} `}
                                    <Link href='#'>
                                        <a>{`${t('auth_reg:agreement.secondPart')} `}</a>
                                    </Link>
                                    {`${t('auth_reg:agreement.thirdPart')} `}
                                    <Link href='#'>
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