import React, {FC, ReactElement} from 'react';
import {useStyles} from './useStyles';


export const ArchiveComponent: FC = (): ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>Archive</div>
        </div>
    )
};