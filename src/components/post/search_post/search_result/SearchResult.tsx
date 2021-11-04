import {FC, Fragment, useContext, useEffect, useState} from 'react';
import {browser} from "process";
import {useTranslation} from "react-i18next";
import {POSTS_PER_PAGE} from '@src/constants';
import {Box, Grid, IconButton, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {GridViewIcon, ListViewIcon} from '@src/components/elements/icons';
import {unstable_batchedUpdates} from "react-dom";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {userAPI} from '@src/api/api';
import {ErrorCtx} from '@src/context';
import {useRouter} from "next/router";
import {getLocationByURL} from "@src/helpers";
import {ListCard} from "@src/components/elements/card/list_card/ListCard";
import {GridCard} from "@src/components/elements/card/grid_card/GridCard";
import {ContentAdv} from "@src/components/elements/adv/ContentAdv";
import {RightAdv} from "@src/components/elements/adv/right/RightAdv";
import {useStyles} from './useStyles';

type SearchResultPropsType = {
    searchTermFromUrl: string,
    rightAdvData,
    categories,
    urlParams
};

export const SearchResult: FC<SearchResultPropsType> = (props) => {
    const {
        rightAdvData,
        searchTermFromUrl,
        categories,
        urlParams
    } = props;

    const {asPath, query} = useRouter();
    const [queryLoc] = query.path as string[];
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const {t} = useTranslation('filters');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [ctgr, subCtgr, typeCtgr] = categories;

    const [regions, setRegions] = useState([]);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(0);
    const [isFetch, setIsFetch] = useState(false);
    const [listView, setListView] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

    const getPostsByFilters = async () => {
        try {
            const {q, by_filtering = 'created_at', ...params} = urlParams;

            const query: any = {
                page,
                itemsPerPage: POSTS_PER_PAGE,
                by_filtering,
                ...params
            };

            if (queryLoc !== 'uzbekistan' && regions.length) {
                const {region, city} = getLocationByURL(queryLoc, regions);
                query.region_id = region.id;
                if (city) query.city_id = city.id;
            }

            if (searchTermFromUrl) query.title = searchTermFromUrl;
            if (ctgr) query.category_id = ctgr.id;
            if (subCtgr) query.sub_category_id = subCtgr.id;
            if (typeCtgr) query.type_id = typeCtgr.id;

            setIsFetch(true);

            const {data, total} = await userAPI.getPostsByFilters(query);

            setIsFetch(false);

            if (total) {
                setPosts(data);
                setItemsCount(total);
                isNotFound && setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        if (browser) {
            const regionsFromStorage = JSON.parse(localStorage.getItem('regions'));
            regionsFromStorage && !regions.length && setRegions(regionsFromStorage);
        }
    }, []);

    useEffect(() => {
        !!regions.length && getPostsByFilters();
    }, [asPath, regions, page]);

    useEffect(() => {
        page !== 1 && setPage(1);
    }, [categories]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isFetch
                ? <CustomCircularProgress/>
                : <>
                    {isNotFound
                        ? <Typography>
                            {searchTermFromUrl !== ''
                                ? t('post_by_term_not_found', {searchText: searchTermFromUrl})
                                : t('post_not_found')
                            }
                        </Typography>
                        : <>
                            <Box position='relative'>
                                <Box
                                    mb={1}
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <Typography variant='h5' component='p'>
                                        {t('common:allPosts')}
                                    </Typography>
                                    <Box className='view-btns'>
                                        <IconButton
                                            className={listView ? '' : 'selected'}
                                            onClick={() => setListView(false)}
                                        >
                                            <GridViewIcon/>
                                        </IconButton>
                                        <IconButton
                                            className={listView ? 'selected' : ''}
                                            onClick={() => setListView(true)}
                                        >
                                            <ListViewIcon/>
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Grid container spacing={isMdDown ? 1 : 2}>
                                    {posts.map((cardData, i) => {
                                        const isAdvSlot = (i + 1) % 10 === 0;
                                        const isRightAdvSlot = isMdDown && i === 6;

                                        return <Fragment key={i}>
                                            {isRightAdvSlot && (
                                                <Grid item xs={12}>
                                                    <RightAdv mobile adv={rightAdvData}/>
                                                </Grid>
                                            )}
                                            {listView
                                                ? <Grid item xs={12}>
                                                    <ListCard cardData={cardData}/>
                                                </Grid>
                                                : <>
                                                    {isAdvSlot && (
                                                        <Grid item xs={6} sm={6} md={4} lg={3}>
                                                            <div className='content-adv-wrapper'>
                                                                <ContentAdv/>
                                                            </div>
                                                        </Grid>
                                                    )}
                                                    <Grid xs={6} sm={6} md={4} lg={3} item>
                                                        <GridCard
                                                            {...cardData}
                                                            isFetch={isFetch}
                                                        />
                                                    </Grid>
                                                </>}
                                        </Fragment>;
                                    })}
                                </Grid>
                            </Box>
                            <Box mt='70px'>
                                <CustomPagination
                                    currentPage={page}
                                    totalItems={itemsCount}
                                    itemsPerPage={POSTS_PER_PAGE}
                                    handlePagePagination={handlePagePagination}
                                />
                            </Box>
                        </>}
                </>}
        </div>
    );
};