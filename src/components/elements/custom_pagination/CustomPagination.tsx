import React, {FC} from 'react';
import Pagination from '@material-ui/lab/Pagination';


export type CustomPaginationTypes = {
    pageCount: number;
    currentPage: number;
    handlePaginationPage: (_: unknown, pageNumber: number) => void;
};

export const CustomPagination: FC<CustomPaginationTypes> = (props) => {
    const {
        pageCount,
        currentPage,
        handlePaginationPage
    } = props;

    return (
        <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePaginationPage}
            shape="rounded"
        />
    );
}