import React from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import {
    EmailIcon,
    ForeignLinkIcon,
    Logo,
    PurseIcon,
    SecurityPaymentIcon,
    ShieldIcon,
} from '@src/components/elements/icons'
import Link from 'next/link'
import { useStyles } from './useStyles'


export const Security = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container justify='center'>
                    <Grid item xs={9}>
                        <Link href="/">
                            <a>
                                <Logo />
                            </a>
                        </Link>
                        <div className={classes.description}>
                            <div className={classes.hero}>
                                <Typography variant='h5'>
                                    Соблюдая наши рекомендации, вы обезопасите себя от действий мошенников.
                                </Typography>
                                <Typography variant='subtitle1'>
                                    В последнее время, участились случаи обмана пользователей, торговых площадок,
                                    мошенники придумывают разнообразные способы, завладеть вашими личными данными,
                                    получить доступ к вашей учетной записи или узнать пароль от вашей банковской карты.
                                </Typography>
                            </div>
                            <img src="/img/scammer.png" alt="scammer" />
                        </div>
                        <div className={classes.warning}>
                            <Typography variant='subtitle1'>Администрация SLONDO заботиться о безопасности каждого
                                пользователя, внимательно прочитайте статью!</Typography>
                        </div>
                        <Paper className={classes.paper} elevation={0}>
                            <span className={classes.icon}>
                                <EmailIcon />
                            </span>
                            <div className={classes.card}>
                                <Typography variant='h5'>
                                    SMS
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Не сообщайте никому коды доступа полученные вами посредством SMS сообщений,
                                    злоумышленники, будут пытаться выведать у вас данную информацию, чтобы получить
                                    доступ к вашей учетной записи на SLONDO, даже если в переписке, вам представляются
                                    сотрудником технической поддержки и просят назвать код, полученный по SMS не
                                    сообщайте никому данную информацию.
                                </Typography>
                            </div>
                        </Paper>
                        <Paper className={classes.paper} elevation={0}>
                            <span className={classes.icon}>
                                <ForeignLinkIcon />
                            </span>
                            <div className={classes.card}>
                                <Typography variant='h5'>
                                    SMS
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Не сообщайте никому коды доступа полученные вами посредством SMS сообщений,
                                    злоумышленники, будут пытаться выведать у вас данную информацию, чтобы получить
                                    доступ к вашей учетной записи на SLONDO, даже если в переписке, вам представляются
                                    сотрудником технической поддержки и просят назвать код, полученный по SMS не
                                    сообщайте никому данную информацию.
                                </Typography>
                            </div>
                        </Paper>
                        <Paper className={classes.paper} elevation={0}>
                            <span className={classes.icon}>
                                <SecurityPaymentIcon />
                            </span>
                            <div className={classes.card}>
                                <Typography variant='h5'>
                                    SMS
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Не сообщайте никому коды доступа полученные вами посредством SMS сообщений,
                                    злоумышленники, будут пытаться выведать у вас данную информацию, чтобы получить
                                    доступ к вашей учетной записи на SLONDO, даже если в переписке, вам представляются
                                    сотрудником технической поддержки и просят назвать код, полученный по SMS не
                                    сообщайте никому данную информацию.
                                </Typography>
                            </div>
                        </Paper>
                        <Paper className={classes.paper} elevation={0}>
                            <span className={classes.icon}>
                                <ShieldIcon />
                            </span>
                            <div className={classes.card}>
                                <Typography variant='h5'>
                                    SMS
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Не сообщайте никому коды доступа полученные вами посредством SMS сообщений,
                                    злоумышленники, будут пытаться выведать у вас данную информацию, чтобы получить
                                    доступ к вашей учетной записи на SLONDO, даже если в переписке, вам представляются
                                    сотрудником технической поддержки и просят назвать код, полученный по SMS не
                                    сообщайте никому данную информацию.
                                </Typography>
                            </div>
                        </Paper>
                        <Paper className={classes.paper} elevation={0}>
                            <span className={classes.icon}>
                                <PurseIcon />
                            </span>
                            <div className={classes.card}>
                                <Typography variant='h5'>
                                    SMS
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Не сообщайте никому коды доступа полученные вами посредством SMS сообщений,
                                    злоумышленники, будут пытаться выведать у вас данную информацию, чтобы получить
                                    доступ к вашей учетной записи на SLONDO, даже если в переписке, вам представляются
                                    сотрудником технической поддержки и просят назвать код, полученный по SMS не
                                    сообщайте никому данную информацию.
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
