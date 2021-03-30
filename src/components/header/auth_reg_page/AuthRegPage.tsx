import React, {FC, useEffect, useState} from 'react';
import {Grid, Hidden, IconButton, Modal, Typography} from '@material-ui/core';
import {useTranslation} from "next-i18next";
import {
    AdsIcon,
    BonusIcon,
    CloseIcon,
    PrevArrowIcon,
    RatingIcon,
    SafeBuyingIcon,
    TorgIcon
} from "@src/components/elements/icons";
import {AuthRegContainer} from "@src/components/header/auth_reg_page/auth_reg_form/AuthRegContainer";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {CustomSlider} from "@src/components/elements/custom_slider/CustomSlider";
import {CustomList} from "@src/components/elements/custom_list/CustomList";
import {useStyles} from './useStyles';


const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const list = [
    {name: 'Акции и бонусы'},
    {name: 'Помощь'},
    {name: 'Служба поддержки'},
    {name: 'Политика конфидециальности'}
];

type AuthRegPageType = {
    handleCloseModal: () => void;
    isOpen: boolean
};

export type TimerType = {
    isActive: boolean,
    seconds: number
};

export const AuthRegPage: FC<AuthRegPageType> = (props) => {
    const {
        isOpen,
        handleCloseModal
    } = props;

    const initTimer = {
        isActive: false,
        seconds: 60
    }

    const {t} = useTranslation(['auth_reg']);
    const [isAuthRegClicked, setIsAuthRegClicked] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const [isRecoveryPswd, setIsRecoveryPswd] = useState(false);
    const [timer, setTimer] = useState<TimerType>(initTimer);

    const {isActive, seconds} = timer;

    const isSignInTab = tabIndex === 0;

    const tabsHandler = (_, newValue) => {
        setTabIndex(newValue);
    };

    const handleForgetPass = () => {
        setTabIndex(1);
        setIsRecoveryPswd(true);
    };

    const authRegClickHandler = (value) => () => {
        setIsAuthRegClicked(value);
    };

    const handleBack = () => {
        setIsAuthRegClicked(false);
    };

    const handleActiveTimer = (value: boolean) => () => {
        setTimer({...timer, isActive: value});
    };

    const handleCancel = () => {
        setTabIndex(0);
        setTimer(initTimer);
        setIsRecoveryPswd(false);
    };

    const runTimer = () => {
        if (seconds > 0) {
            setTimeout(() => {
                setTimer({...timer, seconds: seconds - 1});
            }, 1000);
        }
        if (seconds < 1) {
            setTimer(initTimer);
        }
    };

    useEffect(() => {
        isActive && runTimer();
    }, [isActive, timer]);

    console.log(timer)
    const classes = useStyles();
    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
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
                                <div className='close-btn-wrapper' onClick={handleCloseModal}>
                                    <IconButton>
                                        <CloseIcon/>
                                    </IconButton>
                                </div>
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
                    {isAuthRegClicked
                        ? <div className={classes.authForm}>
                            <div className='btns-wrapper'>
                                <PrevArrowIcon onClick={handleBack}/>
                                {/*<CloseIcon onClick={handleCloseModal}/>*/}
                            </div>
                            <AuthRegContainer
                                t={t}
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
                        : <div className={classes.authRegMenu}>
                            <div className='close-modal-block'>
                                {/*<CloseIcon onClick={handleCloseModal}/>*/}
                            </div>
                            <div className='welcome-block'>
                                <Typography variant='h6'>
                                    {t('auth_reg:welcome')}
                                </Typography>
                            </div>
                            <div className='auth-site-txt'>
                                <Typography variant="subtitle1" color="initial">
                                    {t('auth_reg:authSite')}
                                </Typography>
                            </div>
                            <div className='auth-reg-btn'>
                                <ButtonComponent onClick={authRegClickHandler(true)}>
                                    <Typography>
                                        {t('auth_reg:signInAndReg')}
                                    </Typography>
                                </ButtonComponent>
                            </div>
                            <div className='slider-block'>
                                <CustomSlider {...settings}>
                                    <img src={"img/bonus_img.png"} alt="bonus_img"/>
                                    <img src={"img/bonus_img.png"} alt="bonus_img"/>
                                    <img src={"img/bonus_img.png"} alt="bonus_img"/>
                                    <img src={"img/bonus_img.png"} alt="bonus_img"/>
                                </CustomSlider>
                            </div>
                            <div className='list-block'>
                                <CustomList list={list}/>
                            </div>
                        </div>}
                </Hidden>
            </div>
        </Modal>
    )
}