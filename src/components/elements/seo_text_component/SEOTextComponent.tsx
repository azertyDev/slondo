import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {useStyles} from './useStyles';


export const SEOTextComponent: FC<{ text?: string }> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='subtitle2'>
                {props.text}
            </Typography>
        </div>
    );
};