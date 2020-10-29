import React from 'react';
import { Paper, Typography } from '@material-ui/core';

// styles
import { useStyles } from './useStyles';

export const Banner = ({ height }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper style={{ height: height }} elevation={0}>
                <Typography variant="h5" color="initial">
                    Рекламный блок
                </Typography>
            </Paper>
        </div>
    );
};
