import React from 'react';

// styles
import {useStyles} from './useStyles';

export const MyLotsComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>My lots</div>
        </div>
    )
}
