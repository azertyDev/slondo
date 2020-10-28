import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

// styles
import { useStyles } from './useStyles';

export const Notification = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div>
                    <Typography variant="h5" color="initial">
                        Бонусы всем!
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                        Получайте бесплатные бонусы и тратьте их на продвежение
                        своих объявлений. По формированию позиции представляет
                        собой интересный эксперимент проверки систем массового
                        участия.
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                        Подробнее
                    </Typography>
                </div>
                <div className='notification-bg'></div>
            </Paper>
        </div>
    );
};
