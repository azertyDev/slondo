import {useEffect, useState} from 'react';

type UsePaginationProps = (
    fetchData: (page: number) => Promise<any>
) => [(page: number) => void, number, () => Promise<void>];

export const usePagination: UsePaginationProps = fetchData => {
    const [page, setPage] = useState(1);

    const handlePagination = page => {
        setPage(page);
    };

    const fetchByPage = async () => {
        await fetchData(page);
    };

    useEffect(() => {
        fetchByPage();
    }, [page]);

    return [handlePagination, page, fetchByPage];
};
