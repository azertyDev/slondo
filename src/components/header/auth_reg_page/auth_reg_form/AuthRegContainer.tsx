import {Dispatch, FC, SetStateAction} from 'react';
import {WithT} from 'i18next';
import {Tab, Tabs, Typography} from '@material-ui/core';
import {useRouter} from 'next/router';
import {AuthForm} from '@src/components/header/auth_reg_page/auth_reg_form/auth_form/AuthForm';
import {AgreementsTxt} from '@src/components/header/auth_reg_page/auth_reg_form/AgreementsTxt';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {RegForm} from './reg_form/RegForm';
import {RecoveryContainer} from './recovery_form/RecoveryContainer';
import {useStyles} from './useStyles';


type AuthRegContainerPropsType = {
    activeTimer: boolean,
    timer: number,
    tabIndex: number,
    errorMsg: string,
    isSignInTab: boolean,
    isRecoveryPswd: boolean,
    tabsHandler: (_, v) => void,
    handleForgetPass: () => void,
    setErrorMsg: Dispatch<SetStateAction<string>>,
    handleActiveTimer: (v) => () => void,
    handleCloseModal: () => void,
    handleCancel: () => void
} & WithT;

export const AuthRegContainer: FC<AuthRegContainerPropsType> = (props) => {
    const {
        t,
        activeTimer,
        timer,
        tabIndex,
        errorMsg,
        setErrorMsg,
        isRecoveryPswd,
        tabsHandler,
        handleForgetPass,
        isSignInTab,
        handleActiveTimer,
        handleCloseModal,
        handleCancel
    } = props;

    const {locale} = useRouter();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="form-block">
                <div className="server-error">
                    {errorMsg && (
                        <Typography variant="body2" className="error-text">
                            {t(errorMsg)}
                        </Typography>
                    )}
                </div>
                <div className="tabs-container">
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
                                    {t(`${isRecoveryPswd ? 'resetPassTitle' : 'signUpTitle'}`)}
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
                                <AuthForm
                                    t={t}
                                    setErrorMsg={setErrorMsg}
                                    handleCloseModal={handleCloseModal}
                                    handleForgetPass={handleForgetPass}
                                />
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel
                            index={1}
                            value={tabIndex}
                            className="reg-panel"
                        >
                            {isRecoveryPswd
                             ? <RecoveryContainer
                                 t={t}
                                 timer={timer}
                                 activeTimer={activeTimer}
                                 setErrorMsg={setErrorMsg}
                                 handleCancel={handleCancel}
                                 handleCloseModal={handleCloseModal}
                                 handleActiveTimer={handleActiveTimer}
                             />
                             : <div className='reg-form'>
                                 <RegForm
                                     t={t}
                                     setErrorMsg={setErrorMsg}
                                     handleCancel={handleCancel}
                                 />
                             </div>}
                        </CustomTabPanel>
                    </div>
                </div>
                <div className='agreements-txt'>
                    <AgreementsTxt locale={locale} t={t} isRegAgreements={!isSignInTab}/>
                </div>
            </div>
        </div>
    );
};
