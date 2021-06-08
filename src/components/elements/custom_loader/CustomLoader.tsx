import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from './useStyles';


export const CustomLoader = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress {...props} />
        </div>
    );
};