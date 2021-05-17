import React, {FC} from 'react';
import {Badge} from '@material-ui/core';
import {useStyles} from './useStyles';


export const CustomBadge: FC<any> = (props) => {
    const classes = useStyles();
    return (
        <Badge
            {...props}
            className={classes.root}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            {props.children}
        </Badge>
    );
};
