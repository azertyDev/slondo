import {FC, useContext, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {FILTERS_PER_PAGE} from '@src/constants';
import {CardView} from '@src/components/elements/card/CardView';
import {Box, Typography} from '@material-ui/core';
import {cookies} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {ErrorCtx} from '@src/context';
import {useStyles} from './useStyles';

type SearchResultPropsType = {
    searchTermFromUrl: string,
    categories,
    urlParams
};

export const SearchResult: FC<SearchResultPropsType> = (props) => {
    const {
        searchTermFromUrl,
        categories,
        urlParams
    } = props;

    const {t} = useTranslation('filters');
    const {setErrorMsg} = useContext(ErrorCtx);

    const [ctgr, subCtgr, typeCtgr] = categories;

    const [posts, setPosts] = useState([]);
    const [isNotFound, setIsNotFound] = useState(false);
    const [page, setPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(0);

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

    const getPostsByFilters = async () => {
        try {
            const userLocation = cookies.get('user_location');

            const query: any = {
                page,
                itemsPerPage: FILTERS_PER_PAGE,
                ...urlParams
            };

            if (userLocation) {
                const {region, city, district} = userLocation;
                if (district) {
                    query.district_id = district.id;
                } else if (city) {
                    query.city_id = city.id;
                } else {
                    query.region_id = region.id;
                }
            }

            if (searchTermFromUrl) query.title = searchTermFromUrl;
            if (ctgr) query.category_id = ctgr.id;
            if (subCtgr) query.sub_category_id = subCtgr.id;
            if (typeCtgr) query.type_id = typeCtgr.id;

            const {data, total} = await userAPI.getPostsByFilters(query);

            if (total) {
                setPosts(data);
                setItemsCount(total);
                isNotFound && setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        getPostsByFilters();
    }, [urlParams, page]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isNotFound
                ? <Typography>{t('post_not_found', {searchText: searchTermFromUrl})}</Typography>
                : <>
                    <Box position='relative'>
                        <CardView
                            listMode
                            data={posts}
                        />
                    </Box>
                    <Box display='flex' justifyContent='center' mt='70px'>
                        <CustomPagination
                            currentPage={page}
                            totalItems={itemsCount}
                            itemsPerPage={FILTERS_PER_PAGE}
                            handlePagePagination={handlePagePagination}
                        />
                    </Box>
                </>}
        </div>
    );
};
