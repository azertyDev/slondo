import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {
    BonusIcon,
    SafeBuyingIcon,
    AdvertisementIcon,
    TorgIcon,
    RatingIcon,
} from '../../elements/icons'
import {AuthRegForm} from "../../elements/auth_reg_form/AuthRegForm"
import {CloseIcon} from "../../elements/icons/close_icon/CloseIcon"

// Styles
import {useStyles} from './useStyles'


export const AuthRegPage = (props) => {
    const {t, handleCloseModal} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={5}>
                    <div className='info-block'>
                        <div>
                            <img src={BonusIcon} alt="bonus-icon"/>
                            <Typography variant="subtitle2" color="initial">
                                {t('auth_reg:bonus')}
                            </Typography>
                        </div>
                        <div>
                            <img
                                src={SafeBuyingIcon}
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
                <Grid item xs={7}>
                    <div className='auth-reg-block'>
                        <div className='close-btn-wrapper'>
                            <CloseIcon onClick={handleCloseModal}/>
                        </div>
                        <div className='welcome-block'>
                            <Typography variant="h6" color="initial">
                                {t('auth_reg:welcome')}
                            </Typography>
                            <Typography variant="subtitle2" color="initial">
                                {t('auth_reg:authSite')}
                            </Typography>
                        </div>
                        <div className='auth-form'>
                            <AuthRegForm
                                t={t}
                                handleCloseModal={handleCloseModal}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};