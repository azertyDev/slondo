import React from 'react';

// styles
import {useStyles} from './useStyles';

export const ArchiveComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>Archive</div>
        </div>
    )
}
