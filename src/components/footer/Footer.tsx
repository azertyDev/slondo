import React from 'react';
import { Container, Typography } from '@material-ui/core';

// Styles
import { useStyles } from './useStyles';
import { SocialsBlock } from '../elements/socials_block/SocialsBlock';

export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Container>
                <div>
                    <div>
                        <ul>
                            <li>О Slondo</li>
                            <li>Помощь</li>
                            <li>Безопасность</li>
                            <li>Ваш отзыв о Slondo</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Обратная связь</li>
                            <li>Как разместить объявление</li>
                            <li>Безопасная покупка</li>
                            <li>Карта сайта</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Акции</li>
                            <li>Бонусы</li>
                            <li>Правила аукциона</li>
                            <li>Лицензионное соглашение</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <SocialsBlock />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
