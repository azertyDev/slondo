import {FC, useEffect, useState} from 'react';
import {Grid, Hidden, IconButton, Modal, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {
    AdsIcon,
    BonusIcon,
    CloseIcon,
    PrevArrowIcon,
    RatingIcon,
    SafeBuyingIcon,
    TorgIcon
} from '@src/components/elements/icons';
import {AuthRegContainer} from '@src/components/header/auth_reg_page/auth_reg_form/AuthRegContainer';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {CustomList} from '@src/components/elements/custom_list/CustomList';
import {useStyles} from './useStyles';
import {setIsAuthModalOpen} from '@src/redux/slices/userSlice';
import {useDispatch} from 'react-redux';


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
    isOpen: boolean
};

export const AuthRegPage: FC<AuthRegPageType> = (props) => {
    const {
        isOpen
    } = props;

    const initSeconds = 60;
    const dispatch = useDispatch();

    const {t} = useTranslation('auth_reg');

    const [isAuthRegClicked, setIsAuthRegClicked] = useState(false);
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

    const authRegClickHandler = (value) => () => {
        setIsAuthRegClicked(value);
    };

    const handleBack = () => {
        setIsAuthRegClicked(false);
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
                    {isAuthRegClicked
                     ? <div className={classes.authForm}>
                         <div className='btns-wrapper'>
                             <PrevArrowIcon onClick={handleBack}/>
                             {/*<CloseIcon onClick={handleCloseModal}/>*/}
                         </div>
                         <AuthRegContainer
                             t={t}
                             timer={timer}
                             activeTimer={activeTimer}
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
                                 {t('welcome')}
                             </Typography>
                         </div>
                         <div className='auth-site-txt'>
                             <Typography variant="subtitle1" color="initial">
                                 {t('authSite')}
                             </Typography>
                         </div>
                         <div className='auth-reg-btn'>
                             <ButtonComponent onClick={authRegClickHandler(true)}>
                                 <Typography>
                                     {t('signInAndReg')}
                                 </Typography>
                             </ButtonComponent>
                         </div>
                         <div className='slider-block'>
                             <CustomSlider {...settings}>
                                 <img src={'img/bonus_img.png'} alt="bonus_img"/>
                                 <img src={'img/bonus_img.png'} alt="bonus_img"/>
                                 <img src={'img/bonus_img.png'} alt="bonus_img"/>
                                 <img src={'img/bonus_img.png'} alt="bonus_img"/>
                             </CustomSlider>
                         </div>
                         <div className='list-block'>
                             <CustomList list={list}/>
                         </div>
                     </div>}
                </Hidden>
            </div>
        </Modal>
    );
};