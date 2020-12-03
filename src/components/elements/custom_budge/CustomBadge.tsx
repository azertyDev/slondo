import React from 'react';
import { Badge } from '@material-ui/core';

import { useStyles } from './useStyles';

export const CustomBadge = ({ children }) => {
    const classes = useStyles;
    return (
        <>
            <Badge badgeContent={4} color="secondary" className={classes.root}>
                {children}
            </Badge>
        </>
    );
};
