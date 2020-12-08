import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

// styles
import {useStyles} from './useStyles';

export const CustomPagination = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={props.count} page={props.currentPage} onChange={props.handlePaginationPage} shape="rounded"/>
        </div>
    );
}