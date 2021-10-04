import {FC} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';

export type CustomPaginationTypes = {
    totalItems: number,
    currentPage: number,
    itemsPerPage: number,
    handlePagePagination: (_: unknown, pageNumber: number) => void
};

export const CustomPagination: FC<CustomPaginationTypes> = (props) => {
    const {
        totalItems,
        itemsPerPage,
        currentPage,
        handlePagePagination
    } = props;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const count = Math.ceil((totalItems !== 0 ? totalItems : 1) / itemsPerPage);

    const classes = useStyles();
    return totalItems > itemsPerPage && (
        <Pagination
            shape="rounded"
            color="secondary"
            count={count}
            page={currentPage}
            classes={{root: classes.root}}
            onChange={handlePagePagination}
            size={isXsDown ? 'small' : 'medium'}
        />
    );
};