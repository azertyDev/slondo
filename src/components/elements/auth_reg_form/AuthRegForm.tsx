import React, {useState} from "react"
import {IconButton, Tabs, Typography} from "@material-ui/core"
import {Link} from "../../../../i18n"
import {CloseBlackIcon} from '../icons'
import {CustomTab} from "../custom_tab/CustomTab"
import {CustomTabPanel} from "../custom_tab_panel/CustomTabPanel"
import {Field, Form, Formik} from "formik"
import {CustomField} from "../custom_field/CustomField"
import {ButtonComponent} from "../button/Button"
import {requiredValidate, phoneValidate} from '../../../components/validates'
import {useStyles} from './useStyles'


interface ILoginValues {
    phone: string,
    password: string
}

export const AuthRegForm = (props) => {
    const {t, language, handleCloseModal, onSubmit} = props;
    const inputsVals: ILoginValues = {phone: '', password: ''};

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='close-btn-wrapper'>
                <IconButton onClick={handleCloseModal}>
                    <img src={CloseBlackIcon} alt="close"/>
                </IconButton>
            </div>
            <div className='form-block'>
                <div className='welcome-block'>
                    <Typography variant="h6" color="initial">
                        {t('auth_reg:welcome')}
                    </Typography>
                    <Typography variant="subtitle2" color="initial">
                        {t('auth_reg:authSite')}
                    </Typography>
                </div>
                <div className='tabs-container'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
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
                            value={value}
                            index={0}
                            className='sign-panel'
                        >
                            <Formik initialValues={inputsVals} onSubmit={onSubmit}>
                                {({errors, touched}) => {
                                    return (
                                        <Form>
                                            <div>
                                                <Typography
                                                    className={classes.errorTxt}
                                                    variant="subtitle2"
                                                >
                                                    {errors.phone && touched.phone ? errors.phone : ''}
                                                </Typography>
                                                <Field
                                                    name='phone'
                                                    type='phone'
                                                    placeholder={t('auth_reg:enterPhone')}
                                                    validate={phoneValidate}
                                                    component={CustomField}
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
                                                <Field
                                                    name='password'
                                                    type="password"
                                                    placeholder={t('auth_reg:enterPassword')}
                                                    validate={requiredValidate}
                                                    component={CustomField}
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
                                                <ButtonComponent className='signin-btn' type='submit'>
                                                    {t('auth_reg:signIn')}
                                                </ButtonComponent>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1} className='reg-panel'>
                            <Formik initialValues={inputsVals} onSubmit={onSubmit}>
                                {({errors, touched}) => (
                                    <Form>
                                        <div>
                                            <div>
                                                <Typography
                                                    className={classes.errorTxt}
                                                    variant="subtitle2"
                                                >
                                                    {errors.phone && touched.phone ? errors.phone : ''}
                                                </Typography>
                                            </div>
                                            <div>
                                                <Field
                                                    name='phone'
                                                    type='phone'
                                                    placeholder={t('auth_reg:enterPhone')}
                                                    validate={phoneValidate}
                                                    component={CustomField}
                                                    className={errors.phone && touched.phone ? classes.errorInput : ''}
                                                />
                                            </div>
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