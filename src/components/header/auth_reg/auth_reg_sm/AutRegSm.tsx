import React, {useState} from 'react'
import {Typography} from '@material-ui/core'
import {CloseIcon, PrevArrowIcon} from '../../../elements/icons'
import {ButtonComponent} from '../../../elements/button/Button'
import {AuthRegForm} from '../../../elements/auth_reg_form/AuthRegForm'
import {CustomSlider} from '../../../elements/custom_slider/CustomSlider'
import {CustomList} from '../../../elements/custom_list/CustomList'
import {settings} from './sliderSettings'
import {useStyles} from "./useStyles"

const list = [
    {name: 'Акции и бонусы'},
    {name: 'Помощь'},
    {name: 'Служба поддержки'},
    {name: 'Политика конфидециальности'}
];

export const AuthRegSm = (props) => {
    const {t, handleCloseModal} = props;

    const [isAuthRegClicked, setIsAuthRegClicked] = useState(false);

    const authRegClickHandler = (value) => () => {
        setIsAuthRegClicked(value);
    };

    const handleBack = () => {
        setIsAuthRegClicked(false);
    };

    const classes = useStyles();
    return (
        <>
            {
                isAuthRegClicked
                    ? (
                        <div className={classes.authForm}>
                            <div className='btns-wrapper'>
                                <PrevArrowIcon onClick={handleBack}/>
                                {/*<CloseIcon onClick={handleCloseModal}/>*/}
                            </div>
                            <AuthRegForm
                                t={t}
                                handleCloseModal={handleCloseModal}
                            />
                        </div>
                    )
                    : (
                        <div className={classes.authRegMenu}>
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
                        </div>
                    )
            }
        </>
    )
};
