import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { ButtonComponent } from '../../elements/button/Button'
import HomeIcon from '@material-ui/icons/Home'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
// styles
import { useStyles } from './useStyles'
import { AdsAndLotsBlock } from '../../elements/adsAndLotsBlock/AdsAndLotsBlock'

export const SuccessAdvertisement = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        color="initial"
                        className={classes.title}
                    >
                        Поздравляем!
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={1} className={classes.paper}>
                        <Grid container justify="flex-start" alignContent='center'>
                            <div className={classes.successInfo}>
                                <CheckCircleIcon color='primary' className={classes.successIcon}/>
                                <Typography color="initial">
                                    Объявление отправлено на модерацию. <br />
                                    Статус объявления Вы можете отслеживать в {' '}
                                    <a href="#">личном кабинете</a>
                                </Typography>
                            </div>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container xs={12} direction="row" justify="center" className={classes.buttonBlock}>
                    <Grid item xs={5} sm={2} md={2}>
                        <ButtonComponent>
                            <HomeIcon color="inherit" />
                            На главную
                        </ButtonComponent>
                    </Grid>
                </Grid>
                
                <Grid item container xs={12} direction="row" justify="center">
                    <AdsAndLotsBlock title='Возможно Вам понравится' xs={6} sm={4} md={3}/>
                </Grid>
            </Grid>
        </div>
    )
}
