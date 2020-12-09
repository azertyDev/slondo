import React from 'react';
import { Container, Typography } from '@material-ui/core';

// Styles
import { useStyles } from './useStyles';
import { SocialsBlock } from '../elements/socials_block/SocialsBlock';
import { Link } from '@root/i18n';

export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Container>
                <div>
                    <div>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                        >
                                            О Slondo
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
                                <Link href="#">
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
                    </div>
                    <div>
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
                                <Link href="#">
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
                    </div>
                    <div>
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
                                <Link href="#">
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
                    </div>
                    <div>
                        <div className="social-icons">
                            <SocialsBlock />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
