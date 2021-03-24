import React, {FC} from 'react'
import {Container, Grid, Typography} from '@material-ui/core'
import {SocialsBlock} from '@src/components/elements/socials_block/SocialsBlock'
import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {Logo} from '@src/components/elements/icons/logo/Logo'
import {useStyles} from './useStyles'


export const Footer: FC = () => {
    const {t} = useTranslation(['footer']);

    const classes = useStyles()
    return (
        <footer className={classes.root}>
            <div className='footer-wrapper'>
                <Container maxWidth='xl'>
                    <Grid container className="footer-content" justify="center">
                        <Grid container className="footer-top">
                            <Grid item xs={3} container justify="center">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    {t('aboutSlondo')}
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Помощь
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/security">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Безопасность
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Ваш отзыв о Slondo
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={3} container justify="center">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Обратная связь
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Как разместить объявление
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Безопасная покупка
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sitemap">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Карта сайта
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={3} container justify="center">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Акции
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Бонусы
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Правила аукциона
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/legal/userAgreements">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    Лицензионное соглашение
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={3} container>
                                <div className="social-icons">
                                    <SocialsBlock footer/>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="footer-bottom">
                            <Grid item xs={3} container justify='center' alignItems='center'>
                                <Logo/>
                            </Grid>
                            <Grid item xs={6} container justify="center" alignItems='center'>
                                <Typography variant="subtitle1" color="initial">
                                    Использование материалов сайта разрешено только с
                                    письменного разрешения. Цитирование материалов сайта
                                    допускается, при этом ссылка на источник должна
                                    содержать указание на slondo.uz и являться
                                    гиперссылкой.
                                </Typography>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Typography variant="subtitle1" color="initial">
                                    Copyright © 2020 Slondo.
                                </Typography>
                            </Grid>
                        </div>
                    </Grid>
                </Container>
            </div>
        </footer>
    )
}