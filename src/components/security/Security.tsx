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

export const Security = () => {

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
                        <div className={classes.description}>
                            <div className={classes.hero}>
                                <Typography variant='h5'>
                                    Соблюдая наши рекомендации, вы обезопасите себя от действий мошенников.
                                </Typography>
                                <Hidden lgUp>
                                    <img src="/img/scammer.png" alt="scammer"/>
                                </Hidden>
                                <Typography variant='subtitle1'>
                                    В последнее время, участились случаи обмана пользователей, торговых площадок,
                                    мошенники придумывают разнообразные способы, завладеть вашими личными данными,
                                    получить доступ к вашей учетной записи или узнать пароль от вашей банковской карты.
                                </Typography>
                            </div>
                            <Hidden mdDown>
                                <img src="/img/scammer.png" alt="scammer"/>
                            </Hidden>
                        </div>
                        <div className={classes.warning}>
                            <Typography variant='subtitle1'>Администрация SLONDO заботиться о безопасности каждого
                                пользователя, внимательно прочитайте статью!</Typography>
                        </div>
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
                                        Не переходите по внешним ссылкам!
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        Не переходите по внешним ссылкам!
                                    </Typography>
                                </Hidden>
                                <Typography variant='subtitle1'>
                                    Никогда не переходите по внешним ссылкам, которые злоумышленники отправляют вам в
                                    личные сообщения, используя внутренний чат SLONDO, либо сторонние мессенджеры, как
                                    правило это будет сайт-двойник, созданный с целью перехвата вашей личной информации
                                    или данных вашей банковской карты.
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
                                        Банковские карты
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        Банковские карты
                                    </Typography>
                                </Hidden>
                                <Typography variant='subtitle1'>
                                    Злоумышленники, связываются с вами якобы с целью покупки вашего товара, как правило
                                    они просят провести оплату на банковскую карту, для этого они просят личные данные
                                    вашей карты, и код CVV\CVC, это последние три цифры, расположенные на задней
                                    стороне, вашей банковской карты, никогда никому не сообщайте эту информацию, данный
                                    код позволит злоумышленникам свободно совершать покупки с вашей карты.
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
                                        Личная безопасность!
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        Личная безопасность!
                                    </Typography>
                                </Hidden>
                                <Typography variant='subtitle1'>
                                    Когда на ваш товар нашелся покупатель, для передачи товара и получения денег
                                    рекомендуется назначить встречу, в людных местах хорошим решением будет, встреча в
                                    торговом центре, там много камер и присутствует охрана.
                                    Избегайте встреч, в темных переулках, не носите с собой крупные суммы денег,
                                    ювелирные украшения и дорогие наручные часы.
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
                                        Не совершайте предоплату и залогов
                                    </Typography>
                                </Hidden>
                            </div>
                            <div className={classes.card}>
                                <Hidden xsDown>
                                    <Typography variant='h5'>
                                        Не совершайте предоплату и залогов
                                    </Typography>
                                </Hidden>
                                <Typography variant='subtitle1'>
                                    Если вам попалось объявление, где продается товар по цене гораздо ниже рыночной,
                                    будьте внимательны, связавшись с продавцом у вас могут попросить провести оплату на
                                    банковскую карту, либо внести часть суммы в качестве залога, мотивируя это тем, что
                                    спрос большой и залог необходим в качестве подтверждения ваших намерений приобрести
                                    товар. Никогда не делайте этого.
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
