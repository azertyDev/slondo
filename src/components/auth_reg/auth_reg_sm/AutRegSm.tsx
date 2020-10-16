import React, {useState} from 'react'
import {IconButton, Typography} from '@material-ui/core'
import {CloseWhiteIcon} from '../../elements/icons'
import {ButtonComponent} from '../../elements/button/Button'
import {AuthRegForm} from '../../elements/auth_reg_form/AuthRegForm'
import {CustomSlider} from '../../elements/custom_slider/CustomSlider'
import {settings} from './sliderSettings'
import {useStyles} from "./useStyles"


export const AuthRegSm = (props) => {
    const {t, language, handleCloseModal} = props;

    const [isAuthRegClicked, setIsAuthRegClicked] = useState(false);

    const authRegClickHandler = (value) => () => {
        setIsAuthRegClicked(value);
    };

    const onSubmit = (values, actions) => {
        actions.resetForm();
    };

    const classes = useStyles();
    return (
        <>
            {
                isAuthRegClicked
                    ? (
                        <AuthRegForm
                            t={t}
                            onSubmit={onSubmit}
                            language={language}
                            handleCloseModal={handleCloseModal}
                        />
                    )
                    : (
                        <div className={classes.authRegMenu}>
                            <div className='close-modal-block'>
                                <IconButton onClick={handleCloseModal}>
                                    <img src={CloseWhiteIcon} alt="close"/>
                                </IconButton>
                            </div>
                            <div className='welcome-block'>
                                <Typography variant='h6'>
                                    {t('auth_reg:welcome')}
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
                        </div>
                    )
            }
        </>
    )
};