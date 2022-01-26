import {FC} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useRouter} from 'next/router';

export type CustomPaginationTypes = {
    totalItems: number;
    currentPage?: number;
    itemsPerPage: number;
    handlePagePagination: (_: unknown, pageNumber: number) => void;
};

export const CustomPagination: FC<CustomPaginationTypes> = props => {
    const {totalItems, itemsPerPage, currentPage, handlePagePagination} = props;

    const {page = 1} = useRouter().query;
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const count = Math.ceil((totalItems !== 0 ? totalItems : 1) / itemsPerPage);

    const classes = useStyles();
    return (
        totalItems > itemsPerPage && (
            <Pagination
                shape="rounded"
                color="secondary"
                count={count}
                page={currentPage ?? +page}
                classes={{root: classes.root}}
                onChange={handlePagePagination}
                size={isXsDown ? 'small' : 'medium'}
            />
        )
    );
};
