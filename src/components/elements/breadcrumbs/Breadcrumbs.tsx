import React from 'react';
import { Typography, Breadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// styles
import { useStyles } from './useStyles';

function handleClick(event) {
    event.preventDefault();
}

export const BreadcrumbsComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Breadcrumbs   
                separator='•'
                aria-label="breadcrumb"
                className='bc'
            >
                {children}
            </Breadcrumbs>
        </div>
    );
};
