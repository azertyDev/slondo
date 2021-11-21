import {FC, useEffect, useState, useContext} from 'react';
import ErrorPage from '@root/pages/_error';
import {useTranslation} from 'react-i18next';
import {SearchForm} from '@src/components/post/search_post/search_form/SearchForm';
import {SearchResult} from '@src/components/post/search_post/search_result/SearchResult';
import {
    Box,
    Container,
    Grid,
    Hidden,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {SEOTextComponent} from '@src/components/elements/seo_text_component/SEOTextComponent';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {CustomHead} from '@src/components/head/CustomHead';
import {SearchHeader} from '@src/components/post/search_post/search_header/SearchHeader';
import {getSEOContent} from '@src/common_data/seo_content';
import {
    categoriesNormalize,
    getCtgrsByCyrillicNames,
    getLocationByURL,
    manufacturersDataNormalize,
    normalizeFiltersByCategory,
    toUrlParams,
    transformCyrillic
} from '@src/helpers';
import {CategoriesCtx, ErrorCtx, SearchCtx} from '@src/context';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';
import {adsAPI, userAPI} from '@src/api/api';
import {AdvType} from '@root/interfaces/Adv';
import {RightAdv} from '@src/components/elements/adv/right/RightAdv';
import {BottomAdv} from '@src/components/elements/adv/bottom/BottomAdv';
import {RegionType} from '@root/interfaces/Locations';
import {CustomPagination} from '../../elements/custom_pagination/CustomPagination';
import {POSTS_PER_PAGE} from '@root/src/constants';
import {unstable_batchedUpdates} from 'react-dom';
import {useFormik} from 'formik';
import {useModal} from '@root/src/hooks';
import {getInitStateByCategory, initStates} from './search_form/initStates';
import {postTypes} from '@root/src/common_data/post_types';

type SearchPostProps = {
    regions: RegionType[];
    filters;
    urlCategories;
    location;
    site_categories;
    searchTermFromUrl;
    statusCode: number;
};

export const SearchPost: FC<SearchPostProps> = props => {
    const {
        filters,
        regions,
        urlCategories,
        site_categories,
        location,
        statusCode,
        searchTermFromUrl
    } = props;

    const {locale, asPath, query, push} = useRouter();
    const {path, gclid, by_currency = null, ...urlParams} = query;
    const [queryLoc] = path as string[];

    const {region = null, city = null} = getLocationByURL(queryLoc, regions);

    const {t} = useTranslation('locations');

    const {term} = useContext(SearchCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const siteCategories = categoriesNormalize(site_categories);

    const ctgrsByCyrName = getCtgrsByCyrillicNames(
        urlCategories,
        siteCategories
    );

    const [ctgr = null, subctgr = null, typectgr = null] = ctgrsByCyrName;

    const userLocation = t(location);

    const seoContent = getSEOContent({
        ctgr,
        subctgr,
        typectgr,
        locale,
        location: userLocation
    });

    let seoTitle = seoContent.title;
    const seoTxt = seoContent.text;

    const description = searchTermFromUrl
        ? `${searchTermFromUrl} ${locale === 'ru' ? 'в' : ''} ${userLocation}${
              locale === 'uz' ? 'da' : 'е'
          } SLONDO.uz`
        : seoContent.description;

    if (ctgr && searchTermFromUrl) {
        seoTitle = `${searchTermFromUrl} - ${t(
            `common:categories:${
                typectgr?.name ?? subctgr?.name ?? ctgr?.name ?? ''
            }`
        )} - SLONDO.uz`;
    }

    const {mainInit} = initStates;

    const initAds: {
        right: AdvType;
        bottom: AdvType;
    } = {
        right: {
            image: null,
            url: '/uzbekistan',
            google_ads: false
        },
        bottom: {
            image: null,
            url: '/uzbekistan',
            google_ads: false
        }
    };

    const {
        price_from = '',
        price_to = '',
        post_type = null,
        free = false,
        archive = false,
        safe_deal = false,
        exchange = false,
        delivery = false,
        by_filtering = 'created_at',
        page = '1'
    } = urlParams as {[p: string]: string};

    const postTypesList = [postTypes[0], postTypes[1]];

    const postType = !!archive
        ? postTypesList[1]
        : postTypesList.find(type => type.id === +post_type) || null;

    const initStateByCtgr = getInitStateByCategory(
        ctgr?.name,
        urlParams,
        filters
    );

    const initVals = {
        region,
        city,
        category: ctgr,
        subcategory: subctgr,
        type: typectgr,
        post_type: postType,
        price_from,
        price_to,
        free,
        archive: Boolean(archive),
        safe_deal: Boolean(safe_deal),
        exchange: Boolean(exchange),
        delivery: Boolean(delivery),
        by_currency,
        by_filtering,
        page,
        ...initStateByCtgr
    };

    const [posts, setPosts] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const [isNotFound, setIsNotFound] = useState(false);
    const [filtersState, setFilters] = useState(filters);

    const [ads, setAds] = useState(initAds);
    const {right, bottom} = ads;

    const formik = useFormik({
        onSubmit,
        initialValues: initVals
    });

    const {values, setValues} = formik;
    const {category, subcategory, type} = values;

    const {handleModalClose, handleModalOpen, modalOpen} = useModal();

    const drawer = {
        drawerOpen: modalOpen,
        handleDrawerOpen: handleModalOpen,
        handleDrawerClose: handleModalClose
    };

    async function onSubmit() {
        await generateUrl(values);
        handleModalClose();
    }

    const setFiltersCategory = async values => {
        const {category, subcategory, type} = values;

        if (category) {
            const params: any = {
                category_id: category.id
            };

            if (subcategory?.id) params.sub_category_id = subcategory.id;
            if (type?.id) params.type_id = type.id;

            let filters = await userAPI.getFiltersByCtgr(params);

            if (category.name === 'car') {
                if (subcategory?.name === 'made_uzbekistan') {
                    filters = {
                        ...filters.default_param,
                        manufacturer: manufacturersDataNormalize(filters)
                    };
                } else {
                    filters = {...filters.default_param};
                }
            }

            filters = normalizeFiltersByCategory(filters, type);
            setFilters(filters);
        }
    };

    const resetByCategory = () => {
        if (
            (ctgr && ctgr.name !== category.name) ||
            (subctgr && subctgr.name !== subcategory.name) ||
            (typectgr && typectgr.name !== type.name)
        ) {
            setValues(initVals);
        }
    };

    const handleReset = () => {
        setFilters({});
        setValues(mainInit);
    };

    const handleSelectCategory = (name, value) => {
        let vals = {};

        switch (name) {
            case 'category':
                vals = {
                    ...mainInit,
                    region,
                    city,
                    by_filtering,
                    category: value
                };
                break;
            case 'subcategory':
                vals = {
                    ...mainInit,
                    region,
                    city,
                    by_filtering,
                    category: values.category,
                    subcategory: value
                };
                break;
            case 'type':
                vals = {
                    ...values,
                    page: '1',
                    type: value
                };
        }

        setValues(vals);
        setFiltersCategory(vals);
    };

    const generateUrl = async values => {
        let url = '/';

        const {category, subcategory, type, region, city, ...other} = values;

        const params = toUrlParams(other, term);

        if (region) {
            url = url.concat(city ? `${city.ru_name}/` : `${region.ru_name}/`);
        } else {
            url = url.concat(`uzbekistan/`);
        }

        if (category) {
            let categoryName = `${transformCyrillic(category.ru_name)}/`;
            if (subcategory) {
                const subcategoryName = `${transformCyrillic(
                    subcategory.ru_name
                )}/`;
                categoryName = `${categoryName}${subcategoryName}`;
            }
            url = url.concat(categoryName);
        }

        if (type) url = url.concat(`${transformCyrillic(type.ru_name)}`);
        if (params) url = url.concat(params);

        await push(url);
    };

    const handlePagePagination = (_, pageNum) => {
        setValues({...values, page: pageNum.toString()});
    };

    const getPostsByFilters = async () => {
        try {
            const {q, ...params} = urlParams;

            const query: any = {
                ...params,
                itemsPerPage: POSTS_PER_PAGE
            };

            if (queryLoc !== 'uzbekistan' && regions.length) {
                const {region, city} = getLocationByURL(queryLoc, regions);
                query.region_id = region.id;
                if (city) query.city_id = city.id;
            }

            if (searchTermFromUrl) query.title = searchTermFromUrl;
            if (ctgr) query.category_id = ctgr.id;
            if (subctgr) query.sub_category_id = subctgr.id;
            if (typectgr) query.type_id = typectgr.id;

            setIsFetch(true);

            const {data, total} = await userAPI.getPostsByFilters(query);

            setIsFetch(false);

            if (total) {
                setPosts(data);
                setItemsCount(total);
                isNotFound && setIsNotFound(false);
            } else {
                setItemsCount(0);
                setIsNotFound(true);
            }
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const fetchAds = async () => {
        try {
            const {sidebar = initAds.right, footer = initAds.bottom} =
                await adsAPI.getAds();

            const ads = {
                right: sidebar,
                bottom: footer
            };

            setAds(ads);
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    useEffect(() => {
        getPostsByFilters();
    }, [asPath]);

    useEffect(() => {
        !isSmDown && generateUrl(values);
    }, [values]);

    useEffect(() => {
        resetByCategory();
    }, [ctgr?.name, subctgr?.name, typectgr?.name]);

    const classes = useStyles();
    return statusCode !== 200 ? (
        <ErrorPage statusCode={statusCode} />
    ) : (
        <>
            <CustomHead title={seoTitle} description={description} />
            <div className={classes.root}>
                <CategoriesCtx.Provider value={siteCategories}>
                    <SearchHeader />
                    <main>
                        <Container maxWidth="xl" className="layout-container">
                            <Grid container spacing={isSmDown ? 0 : 2}>
                                <Grid item xs={12} lg={9} zeroMinWidth>
                                    <SearchForm
                                        formik={formik}
                                        drawer={drawer}
                                        filters={filtersState}
                                        categories={ctgrsByCyrName}
                                        handleReset={handleReset}
                                        handleSelectCategory={
                                            handleSelectCategory
                                        }
                                    />
                                    <SearchResult
                                        posts={posts}
                                        isFetch={isFetch}
                                        rightAdvData={right}
                                        isNotFound={isNotFound}
                                        searchTermFromUrl={searchTermFromUrl}
                                    />
                                    <Box mt="70px">
                                        <CustomPagination
                                            totalItems={itemsCount}
                                            itemsPerPage={POSTS_PER_PAGE}
                                            handlePagePagination={
                                                handlePagePagination
                                            }
                                        />
                                    </Box>
                                    <div className="bot-adv-wrapper">
                                        <BottomAdv adv={bottom} />
                                    </div>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={3}>
                                        <div className="sidebar-wrapper">
                                            <HomeSidebar />
                                        </div>
                                        <RightAdv adv={right} threshold={475} />
                                    </Grid>
                                </Hidden>
                            </Grid>
                            {!!seoTxt && <SEOTextComponent text={seoTxt} />}
                        </Container>
                    </main>
                </CategoriesCtx.Provider>
                <Hidden smDown>
                    <Footer />
                </Hidden>
            </div>
            <ErrorModal />
        </>
    );
};
