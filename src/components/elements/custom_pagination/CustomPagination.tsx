import {FC} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {useStyles} from './useStyles';
import {useMediaQuery, useTheme} from '@material-ui/core';

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
    const classes = useStyles();
    const count = Math.ceil((totalItems !== 0 ? totalItems : 1) / itemsPerPage);

    return (
        <Pagination
            classes={{
                root: classes.root
            }}
            count={count}
            page={currentPage}
            onChange={handlePagePagination}
            size={isXsDown ? 'small' : 'medium'}
            shape="rounded"
            color="secondary"
        />
    );
};