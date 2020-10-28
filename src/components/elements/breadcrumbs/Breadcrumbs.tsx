import React from 'react';
import { Breadcrumbs } from '@material-ui/core';

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
