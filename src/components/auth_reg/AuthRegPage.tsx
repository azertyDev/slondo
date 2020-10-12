import React, {useState} from 'react'
import {Grid, Tabs, Typography, Hidden} from '@material-ui/core'
import {Link} from '../../../i18n'
import {Formik, Form, Field} from 'formik'
import {
    BonusIcon,
    BezopasniyTorgIcon,
    AdvertisementIcon,
    TorgIcon,
    RatingIcon,
} from '../elements/icons'
import {CustomTab} from "../elements/custom_tab/CustomTab"
import {ButtonComponent} from "../elements/button/Button"
import {CustomField} from "../elements/custom_field/CustomField"
import {requiredValidate, phoneValidate} from '../validates'

// Styles
import {useStyles} from './useStyle'

interface ILoginValues {
    signInPhone: string,
    signInPswd: string
}

interface ISignUpValues {
    signUpPhone: string
}

const TabPanel = (props) => {
    const {children, value, index, ...other} = props

    return (
        <div hidden={value !== index} {...other}>
            {value === index && children}
        </div>
    )
};

export const AuthRegPage = (props) => {
    const {t, language} = props;

    const loginVals: ILoginValues = {signInPhone: '', signInPswd: ''};
    const signUpVals: ISignUpValues = {signUpPhone: ''};
    const [value, setValue] = useState(0);

    const onSubmit = (values, actions) => {
        actions.resetForm();
    };

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Hidden xsDown>
                    <Grid item xs={5} className={classes.modalBodyInfo}>
                        <div>
                            <div>
                                <img src={BonusIcon} alt="bonus-icon"/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:bonus')}
                                </Typography>
                            </div>
                            <div>
                                <img
                                    src={BezopasniyTorgIcon}
                                    alt="safeAuction-icon"
                                />
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:safeBuying')}
                                </Typography>
                            </div>
                            <div>
                                <img
                                    src={AdvertisementIcon}
                                    alt="advertisement-icon"
                                />
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:createAd')}
                                </Typography>
                            </div>
                            <div>
                                <img src={TorgIcon} alt="torg-icon"/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:createAuction')}
                                </Typography>
                            </div>
                            <div>
                                <img src={RatingIcon} alt="rating-icon"/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:rating')}
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Hidden>
                <Grid item sm={7} xs={12} className={classes.authRegForm}>
                    <div>
                        <div className={classes.welcome}>
                            <Typography variant="h6" color="initial">
                                {t('auth_reg:welcome')}
                            </Typography>
                            <Typography variant="subtitle2" color="initial">
                                {t('auth_reg:authSite')}
                            </Typography>
                        </div>
                        <div className={classes.tabsContainer}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                className={classes.tabs}
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
                            <div className={classes.tabPanels}>
                                <TabPanel
                                    value={value}
                                    index={0}
                                    className={classes.signPanel}
                                >
                                    <Formik initialValues={loginVals} onSubmit={onSubmit}>
                                        {({errors, touched}) => {
                                            return (
                                                <Form>
                                                    <div>
                                                        <Typography
                                                            className={classes.errorTxt}
                                                            variant="subtitle2"
                                                        >
                                                            {errors.signInPhone && touched.signInPhone ? errors.signInPhone : ''}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Field
                                                            name='signInPhone'
                                                            type='phone'
                                                            placeholder={t('auth_reg:enterPhone')}
                                                            validate={phoneValidate}
                                                            component={CustomField}
                                                            className={errors.signInPhone && touched.signInPhone ? classes.errorInput : ''}
                                                        />
                                                    </div>
                                                    <div>
                                                        <Typography
                                                            className={classes.errorTxt}
                                                            variant="subtitle2"
                                                        >
                                                            {errors.signInPswd && touched.signInPswd ? errors.signInPswd : ''}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Field
                                                            name='signInPswd'
                                                            type="password"
                                                            placeholder={t('auth_reg:enterPassword')}
                                                            validate={requiredValidate}
                                                            component={CustomField}
                                                            className={errors.signInPswd && touched.signInPswd ? classes.errorInput : ''}
                                                        />
                                                    </div>
                                                    <div className={classes.forgetPswd}>
                                                        <a href="#">
                                                        <span>
                                                            {t('auth_reg:forgetPassword')}
                                                        </span>
                                                        </a>
                                                    </div>
                                                    <div className={classes.modalSignButton}>
                                                        <ButtonComponent type='submit'>
                                                            {t('auth_reg:signIn')}
                                                        </ButtonComponent>
                                                    </div>
                                                    <div>
                                                        <Typography variant='body2' className={classes.agreement}>
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
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Formik initialValues={signUpVals} onSubmit={onSubmit}>
                                        {({errors, touched}) => (
                                            <Form>
                                                <div>
                                                    <Typography
                                                        className={classes.errorTxt}
                                                        variant="subtitle2"
                                                    >
                                                        {errors.signUpPhone && touched.signUpPhone ? errors.signUpPhone : ''}
                                                    </Typography>
                                                </div>
                                                <div>
                                                    <Field
                                                        name='signUpPhone'
                                                        type='phone'
                                                        placeholder={t('auth_reg:enterPhone')}
                                                        validate={phoneValidate}
                                                        component={CustomField}
                                                        className={errors.signUpPhone && touched.signUpPhone ? classes.errorInput : ''}
                                                    />
                                                </div>
                                                <div className={classes.modalSignButton}>
                                                    <ButtonComponent type='submit'>
                                                        {t('auth_reg:confirm')}
                                                    </ButtonComponent>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};