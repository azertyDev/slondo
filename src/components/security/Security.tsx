import React from 'react';
import {Container, Grid, Hidden, Paper, Typography} from '@material-ui/core';
import {
    EmailIcon,
    ForeignLinkIcon,
    Logo,
    PurseIcon,
    SecurityPaymentIcon,
    ShieldIcon
} from '@src/components/elements/icons';
import Link from 'next/link';
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';

const securityRulesData = {
    preface: [
        {
            1: 'preface.1'
        },
        {
            2: 'preface.2'
        },
        {
            3: 'preface.3'
        }
    ],
    cardData: [
        {
            icon: <EmailIcon/>,
            title: 'securityRules.advice_1',
            description: 'securityRules.advice_1'
        },
        {
            icon: <ForeignLinkIcon/>,
            title: 'securityRules.advice_2.title',
            description: 'securityRules.advice_2.description'
        },
        {
            icon: <SecurityPaymentIcon/>,
            title: 'securityRules.advice_3.title',
            description: 'securityRules.advice_3.description'
        },
        {
            icon: <ShieldIcon/>,
            title: 'securityRules.advice_4.title',
            description: 'securityRules.advice_4.description'
        },
        {
            icon: <PurseIcon/>,
            title: 'securityRules.advice_5.title',
            description: 'securityRules.advice_5.description'
        }
    ]
};


export const Security = () => {
    const {t} = useTranslation('safe_shopping');

    const {preface, cardData} = securityRulesData;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container justify='center'>
                    <Grid item xs={12} md={9}>
                        <Link href="/">
                            <a>
                                <Logo/>
                            </a>
                        </Link>
                        {
                            preface.map(el => {
                                console.log(el);
                                return (
                                    <>
                                        <div className={classes.description}>
                                            <div className={classes.hero}>
                                                <Typography variant='h5'>
                                                    Соблюдая наши рекомендации, вы обезопасите себя от действий
                                                    мошенников.
                                                </Typography>
                                                <Hidden lgUp>
                                                    <img src="/img/scammer.png" alt="scammer"/>
                                                </Hidden>
                                                <Typography variant='subtitle1'>
                                                    В последнее время, участились случаи обмана пользователей, торговых
                                                    площадок,
                                                    мошенники придумывают разнообразные способы, завладеть вашими
                                                    личными данными,
                                                    получить доступ к вашей учетной записи или узнать пароль от вашей
                                                    банковской карты.
                                                </Typography>
                                            </div>
                                            <Hidden mdDown>
                                                <img src="/img/scammer.png" alt="scammer"/>
                                            </Hidden>
                                        </div>
                                        <div className={classes.warning}>
                                            <Typography variant='subtitle1'>Администрация SLONDO заботиться о
                                                безопасности каждого
                                                пользователя, внимательно прочитайте статью!</Typography>
                                        </div>
                                    </>
                                );
                            })
                        }
                        <Paper className={classes.paper} elevation={0}>
                            <div className='card-header'>
                                <span className={classes.icon}>
                                    <EmailIcon/>
                                </span>
                                <Hidden smUp>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
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
                            <div className='card-header'>
                                <span className={classes.icon}>
                                    <ForeignLinkIcon/>
                                </span>
                                <Hidden smUp>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
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
                            <div className='card-header'>
                                <span className={classes.icon}>
                                    <SecurityPaymentIcon/>
                                </span>
                                <Hidden smUp>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
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
                            <div className='card-header'>
                               <span className={classes.icon}>
                                 <ShieldIcon/>
                               </span>
                                <Hidden smUp>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
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
                            <div className='card-header'>
                               <span className={classes.icon}>
                                 <PurseIcon/>
                               </span>
                                <Hidden smUp>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        SMS
                                    </Typography>
                                </Hidden>
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
    );
};
