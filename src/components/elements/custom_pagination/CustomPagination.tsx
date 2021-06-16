import {FC} from 'react';
import Pagination from '@material-ui/lab/Pagination';


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

    const count = Math.ceil((totalItems !== 0 ? totalItems : 1) / itemsPerPage);

    return (
        <Pagination
            count={count}
            page={currentPage}
            onChange={handlePagePagination}
            shape="rounded"
            variant="outlined"
        />
    );
};