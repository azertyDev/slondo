import {FC, useEffect, useState} from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {
    AdsIcon,
    BonusIcon,
    RatingIcon,
    SafeBuyingIcon,
    TorgIcon
} from '@src/components/elements/icons';
import {AuthRegContainer} from '@src/components/header/auth_reg_page/auth_reg_form/AuthRegContainer';
import {setIsAuthModalOpen} from '@src/redux/slices/userSlice';
import {useDispatch} from 'react-redux';
import {ResponsiveDialog} from '@src/components/elements/responsive_dialog/ResponsiveDialog';
import {useStyles} from './useStyles';


type AuthRegPageType = {
    modalOpen: boolean,
    handleModalClose: () => void
};

export const AuthRegPage: FC<AuthRegPageType> = (props) => {
    const {
        modalOpen,
        handleModalClose
    } = props;

    const initSeconds = 60;
    const dispatch = useDispatch();

    const {t} = useTranslation('auth_reg');

    const [tabIndex, setTabIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [isRecoveryPswd, setIsRecoveryPswd] = useState(false);
    const [activeTimer, setActiveTimer] = useState(false);
    const [timer, setTimer] = useState(initSeconds);

    const isSignInTab = tabIndex === 0;

    const tabsHandler = (_, newValue) => {
        setTabIndex(newValue);
    };

    const handleCancel = () => {
        setTabIndex(0);
        setActiveTimer(false);
        setIsRecoveryPswd(false);
    };

    const handleCloseModal = () => {
        handleCancel();
        dispatch(setIsAuthModalOpen(false));
    };

    const handleForgetPass = () => {
        setTabIndex(1);
        setIsRecoveryPswd(true);
    };

    const handleActiveTimer = (value: boolean) => () => {
        setActiveTimer(value);
    };

    const runTimer = () => {
        if (activeTimer) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            }
        } else {
            setTimer(initSeconds);
        }
    };

    useEffect(() => {
        runTimer();
    }, [activeTimer, timer]);

    const classes = useStyles();
    return (
        <ResponsiveDialog
            openDialog={modalOpen}
            handleCloseDialog={handleModalClose}
        >
            <div className={classes.root}>
                <Hidden smDown>
                    <Grid container>
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
                        <Grid item xs={7}>
                            <div className='auth-reg-block'>
                                <div className='welcome-block'>
                                    <Typography variant="h6" color="initial">
                                        {t('welcome')}
                                    </Typography>
                                    <Typography variant="subtitle1" color="initial">
                                        {t('authSite')}
                                    </Typography>
                                </div>
                                <AuthRegContainer
                                    t={t}
                                    activeTimer={activeTimer}
                                    timer={timer}
                                    tabIndex={tabIndex}
                                    errorMsg={errorMsg}
                                    setErrorMsg={setErrorMsg}
                                    isRecoveryPswd={isRecoveryPswd}
                                    isSignInTab={isSignInTab}
                                    handleCancel={handleCancel}
                                    handleForgetPass={handleForgetPass}
                                    tabsHandler={tabsHandler}
                                    handleActiveTimer={handleActiveTimer}
                                    handleCloseModal={handleCloseModal}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Hidden>
                {/*--------------------------------> Mobile <------------------------------------------*/}
                <Hidden mdUp>
                    <div className='auth-reg-block'>
                        <div className='welcome-block'>
                            <Typography variant="h6" color="initial">
                                {t('welcome')}
                            </Typography>
                        </div>
                        <AuthRegContainer
                            t={t}
                            activeTimer={activeTimer}
                            timer={timer}
                            tabIndex={tabIndex}
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                            isRecoveryPswd={isRecoveryPswd}
                            isSignInTab={isSignInTab}
                            handleCancel={handleCancel}
                            handleForgetPass={handleForgetPass}
                            tabsHandler={tabsHandler}
                            handleActiveTimer={handleActiveTimer}
                            handleCloseModal={handleCloseModal}
                        />
                    </div>
                </Hidden>
            </div>
        </ResponsiveDialog>
    );
};