import {FC, ReactNode} from 'react';
import Link from 'next/link';
import {WithT} from 'i18next';
import {Grid, Hidden, IconButton, Tab, Tabs, Typography, useMediaQuery} from '@material-ui/core';
import {
    AdsIcon,
    BonusIcon, CloseIcon,
    RatingIcon,
    SafeBuyingIcon,
    TorgIcon
} from '@src/components/elements/icons';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {Form, FormikProvider} from 'formik';
import {getErrorMsg} from '@src/helpers';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTheme} from '@material-ui/core/styles';
import {FormStatuses} from '@src/components/header/auth/AuthContainer';
import {useStyles} from './useStyles';

type AuthRegPageModalProps = {
    formik,
    isFetch: boolean,
    isSignInTab: boolean,
    open: boolean,
    errorMsg: string,
    tabIndex: number,
    form: ReactNode,
    submitTxt: 'signIn' | 'send' | 'recoverPassword' | 'signUp',
    tabsHandler: (_, v) => void,
    handleForgetPass: () => void,
    handleCloseModal: () => void,
    formStatus: keyof typeof FormStatuses,
    handleCancel: () => void,
    handleInput: (e) => void
    handleNumericInput: (e) => void
} & WithT;

export const AuthModal: FC<AuthRegPageModalProps> = (props) => {
    const {
        t,
        form,
        isFetch,
        isSignInTab,
        formik,
        submitTxt,
        tabsHandler,
        handleForgetPass,
        errorMsg,
        open,
        handleCloseModal,
        tabIndex,
        formStatus,
        handleCancel,
        handleNumericInput,
        handleInput
    } = props;

    const {
        values,
        errors,
        touched
    } = formik;

    const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    const classes = useStyles();
    return (
        <ResponsiveModal
            fullScreen={fullScreen}
            openDialog={open}
            handleCloseDialog={handleCloseModal}
        >
            <div className={classes.root}>
                <Grid container>
                    <Hidden smDown>
                        <Grid item xs={5}>
                            <div className='info-block'>
                                <div>
                                    <BonusIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('bonus')}
                                    </Typography>
                                </div>
                                <div>
                                    <SafeBuyingIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('safeBuying')}
                                    </Typography>
                                </div>
                                <div>
                                    <AdsIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('createAd')}
                                    </Typography>
                                </div>
                                <div>
                                    <TorgIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('createAuction')}
                                    </Typography>
                                </div>
                                <div>
                                    <RatingIcon/>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('rating')}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={7}>
                        <div className='auth-reg-block'>
                            <div className='welcome-block'>
                                <Typography variant="h6" color="initial">
                                    {t('welcome')}
                                </Typography>
                                <Hidden smDown>
                                    <Typography variant="subtitle1" color="initial">
                                        {t('authSite')}
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.authReg}>
                                <div className="form-block">
                                    <div className="server-error">
                                        {errorMsg && (
                                            <Typography variant="body2" className="error-text">
                                                {t(`errors:${errorMsg}`)}
                                            </Typography>
                                        )}
                                    </div>
                                    <div className="tabs-container">
                                        <FormikProvider value={formik}>
                                            <Form onSubmit={formik.handleSubmit}>
                                                <Tabs
                                                    value={tabIndex}
                                                    onChange={tabsHandler}
                                                    indicatorColor="primary"
                                                    className="tabs"
                                                >
                                                    <Tab
                                                        value={0}
                                                        label={
                                                            <Typography variant="subtitle1">
                                                                {t('signInTitle')}
                                                            </Typography>
                                                        }
                                                    />
                                                    <Tab
                                                        value={1}
                                                        label={
                                                            <Typography variant="subtitle1">
                                                                {t(`${formStatus === 'reg' ? 'signUpTitle' : 'resetPassTitle'}`)}
                                                            </Typography>
                                                        }
                                                    />
                                                </Tabs>
                                                <div className="tab-panels">
                                                    <CustomTabPanel
                                                        index={0}
                                                        value={tabIndex}
                                                        className="sign-panel"
                                                    >
                                                        <div className='auth-form'>
                                                            <div>
                                                                <div className="formik-num-pass">
                                                                    <FormikField
                                                                        t={t}
                                                                        type="tel"
                                                                        name="phone"
                                                                        labelText={t('enter_phone')}
                                                                        value={values.phone}
                                                                        onChange={handleNumericInput}
                                                                        errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                                                                    />
                                                                    <FormikField
                                                                        t={t}
                                                                        type="password"
                                                                        name="password"
                                                                        labelText={t('enter_password')}
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
                                                            </div>
                                                        </div>
                                                    </CustomTabPanel>
                                                    <CustomTabPanel
                                                        index={1}
                                                        value={tabIndex}
                                                        className="reg-panel"
                                                    >
                                                        {form}
                                                    </CustomTabPanel>
                                                    <div className='auth-btns'>
                                                        {!isSignInTab && (
                                                            <CustomButton onClick={handleCancel} className='cancel-btn'>
                                                                {t('cancel')}
                                                            </CustomButton>
                                                        )}
                                                        <CustomButton type="submit" disabled={isFetch}>
                                                            {t(submitTxt)}
                                                        </CustomButton>
                                                    </div>
                                                </div>
                                            </Form>
                                        </FormikProvider>
                                    </div>
                                    <div className='agreements-txt'>
                                        {!isSignInTab
                                            ? <Typography className="reg-agreement" variant="body2">
                                                {`${t('agreement.firstPart')} `}
                                                <Link href="#">
                                                    <a>{`${t('agreement.secondPart')} `}</a>
                                                </Link>
                                            </Typography>
                                            : <Typography className="reg-agreement" variant="body2">
                                                {t('agreement.zeroPart')}{' '}
                                                <Link href="#">
                                                    <a>{`${t('agreement.secondPart')} `}</a>
                                                </Link>
                                            </Typography>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <IconButton
                onClick={handleCloseModal}
                className={classes.closeBtn}
                size='medium'
            >
                <CloseIcon/>
            </IconButton>
        </ResponsiveModal>
    );
};