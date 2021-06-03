import {FC} from 'react';
import Pagination from '@material-ui/lab/Pagination';


export type CustomPaginationTypes = {
    pageCount: number,
    currentPage?: number,
    itemsPerPage: number,
    handlePagePagination: (_: unknown, pageNumber: number) => void
};

export const CustomPagination: FC<CustomPaginationTypes> = (props) => {
    const {
        pageCount,
        itemsPerPage,
        currentPage,
        handlePagePagination
    } = props;

    return (
        <Pagination
            count={Math.ceil(pageCount / itemsPerPage)}
            page={currentPage}
            onChange={handlePagePagination}
            shape="rounded"
            variant="outlined"
        />
    );
};