import {FC, useEffect, useState} from 'react';
import {CardView} from '@src/components/elements/card/card_view/CardView';
import {Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {cookies} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {useStyles} from './useStyles';

type SearchResultPropsType = {
    query,
    urlParams,
    categories,
    searchTxtFromUrl: string
} & WithT;

export const SearchResult: FC<SearchResultPropsType> = (props) => {
    const {
        t,
        query,
        urlParams,
        categories,
        searchTxtFromUrl
    } = props;

    const dispatch = useDispatch();
    const [ctgr, subCtgr, typeCtgr] = categories;

    const [posts, setPosts] = useState([]);
    const [isNotFound, setIsNotFound] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const itemsPerPage = 40;

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

    const getPostsByFilters = async () => {
        try {
            const userLocation = cookies.get('user_location');

            const query: any = {
                page,
                itemsPerPage,
                ...urlParams
            };

            if (userLocation) {
                Object.keys(userLocation).forEach(key => {
                    query[`${key}_id`] = userLocation[key].id;
                });
            }
            if (searchTxtFromUrl) query.title = searchTxtFromUrl;
            if (ctgr) query.category_id = ctgr.id;
            if (subCtgr) query.sub_category_id = subCtgr.id;
            if (typeCtgr) query.type_id = typeCtgr.id;

            const {data, total} = (await userAPI.getPostsByFilters(query));

            if (data.length) {
                setPosts(data);
                setTotalPages(total);
                isNotFound && setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        getPostsByFilters();
    }, [query, page]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isNotFound
             ? <Typography>{t('post_not_found')}</Typography>
             : <>
                 <CardView
                     listMode
                     list={posts}
                 />
                 <div className='pagination-wrapper'>
                     <CustomPagination
                         currentPage={page}
                         pageCount={totalPages}
                         itemsPerPage={itemsPerPage}
                         handlePagePagination={handlePagePagination}
                     />
                 </div>
             </>}
        </div>
    );
};
