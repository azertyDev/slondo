import React, {FC} from 'react'
import {Grid, Hidden, IconButton, Typography} from '@material-ui/core'
import {
    SafeBuyingIcon,
    AdsIcon,
    TorgIcon,
    RatingIcon,
    BonusIcon,
} from '@src/components/elements/icons'
import {AuthRegForm} from '../../elements/auth_reg_form/AuthRegForm'
import {CloseIcon} from '@src/components/elements/icons'
import {AuthRegSm} from '@src/components/header/auth_reg/auth_reg_sm/AutRegSm'
import {WithT} from 'i18next'
import {useStyles} from './useStyles'


type AuthRegPageType = {
    handleCloseModal: () => void;
};

export const AuthRegPage: FC<AuthRegPageType & WithT> = (props) => {
    const {t, handleCloseModal} = props

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden smDown>
                <Grid container>
                    <Grid item xs={5}>
                        <div className='info-block'>
                            <div>
                                <BonusIcon/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:bonus')}
                                </Typography>
                            </div>
                            <div>
                                <SafeBuyingIcon/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:safeBuying')}
                                </Typography>
                            </div>
                            <div>
                                <AdsIcon/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:createAd')}
                                </Typography>
                            </div>
                            <div>
                                <TorgIcon/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:createAuction')}
                                </Typography>
                            </div>
                            <div>
                                <RatingIcon/>
                                <Typography variant="subtitle2" color="initial">
                                    {t('auth_reg:rating')}
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
                                    {t('auth_reg:welcome')}
                                </Typography>
                                <Typography variant="subtitle1" color="initial">
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
            </Hidden>
            <Hidden mdUp>
                <AuthRegSm
                    t={t}
                    handleCloseModal={handleCloseModal}
                />
            </Hidden>
        </div>
    )
}