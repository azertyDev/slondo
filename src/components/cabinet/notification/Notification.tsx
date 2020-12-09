import React from 'react';
import {Typography, Paper } from '@material-ui/core';
import { Link } from '@root/i18n';
// styles
import { useStyles } from './useStyles';

export const Notification = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={0}>
                <div>
                    <Typography variant="h5" color="initial">
                        Бонусы всем!
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                        Получайте бесплатные бонусы и тратьте их на продвежение
                        своих объявлений.<br/>
                        По формированию позиции представляет
                        собой интересный эксперимент проверки систем массового
                        участия.
                    </Typography>
                    <Link href='#'>
                        <a>
                        <Typography variant="subtitle1" color="initial" className='more-details'>
                            Подробнее
                        </Typography>
                        </a>
                    </Link>
                </div>
                <div className='notification-bg'></div>
                {/*<CloseIcon/>*/}
            </Paper>
        </div>
    );
};
