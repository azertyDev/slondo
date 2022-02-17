import {FC, useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {
    categoriesNormalize,
    getCtgrsByCyrillicNames,
    getLocationByURL,
    manufacturersDataNormalize,
    normalizeFiltersByCategory,
    toUrlParams,
    transformCyrillic
} from '@root/src/helpers';
import {CategoriesCtx, ErrorCtx} from '@root/src/context';
import {defaultSEOContent, getSEOContent} from '@root/src/common_data/seo_content';
import {Container, Grid} from '@material-ui/core';
import {AdvType} from '@root/interfaces/Adv';
import {useFormik} from 'formik';
import {useModal} from '@root/src/hooks';
import {userAPI} from '@src/api/api';
import {POSTS_PER_PAGE, TOP_POSTS_PER_PAGE} from '@root/src/constants';
import {postTypes} from '@root/src/common_data/post_types';
import {getInitStateByCategory, initStates} from './initStates';
import {SearchProps} from '@root/interfaces/Post';
import ErrorPage from '@root/pages/_error';
import {ErrorModal} from '../../error_modal/ErrorModal';
import {CustomHead} from '../../head/CustomHead';
import {SearchHeader} from './search_header/SearchHeader';
import {Footer} from '../../footer/Footer';
import {SEOTextComponent} from '../../elements/seo_text_component/SEOTextComponent';
import {SearchResult} from './search_result/SearchResult';
import {SearchPostMobile} from '../../mobile/post/search_post/SearchMobile';
import {SearchPostDesktop} from '../../desktop/post/search_post/SearchDesktop';
import {adsAPI} from '@root/src/api/adv_api';

type SearchContainerProps = {
    isMobileView: boolean;
    statusCode: number;
    site_categories;
} & SearchProps;

export const SearchContainer: FC<SearchContainerProps> = props => {
    const {
        isMobileView,
        statusCode,
        regions,
        filters,
        location,
        site_categories,
        urlCategories,
        searchTermFromUrl
    } = props;

    const {locale, asPath, query, push} = useRouter();
    const {path, gclid, by_currency = null, all_top, ...urlParams} = query;
    const [queryLoc] = path as string[];

    const {region = null, city = null} = getLocationByURL(queryLoc, regions);

    const {t} = useTranslation('locations');

    const {setErrorMsg} = useContext(ErrorCtx);

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

    let seoTitle = seoContent?.title ?? defaultSEOContent[locale].title;
    const seoTxt = seoContent?.text ?? defaultSEOContent[locale].text;

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
        q = '',
        price_from = '',
        price_to = '',
        post_type = null,
        free = false,
        archive = false,
        safe_deal = false,
        exchange = false,
        delivery = false,
        by_filtering = 'services_at',
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
        q,
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
    const [topPosts, setTopPosts] = useState([]);

    const [postTotal, setPostTotal] = useState(0);
    const [topPostTotal, setTopPostTotal] = useState(0);

    const [isFetch, setIsFetch] = useState(false);
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
        await generateUrl({...values, all_top});
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
            (ctgr && ctgr.name !== category?.name) ||
            (subctgr && subctgr.name !== subcategory?.name) ||
            (typectgr && typectgr.name !== type?.name)
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
                    q,
                    region,
                    city,
                    by_filtering,
                    category: value
                };
                break;
            case 'subcategory':
                vals = {
                    ...mainInit,
                    q,
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

        const params = toUrlParams(other);

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
        const vals = {...values, page: pageNum.toString()};

        setValues(vals);
        isMobileView && generateUrl(vals);
    };

    const getPostsByFilters = async () => {
        try {
            const {q, ...params} = urlParams;

            const query: any = {
                ...params,
                by_filtering,
                itemsPerPage: POSTS_PER_PAGE
            };

            if (queryLoc !== 'uzbekistan' && regions.length) {
                const {region, city} = getLocationByURL(queryLoc, regions);
                query.region_id = region.id;
                if (city) query.city_id = city.id;
            }

            if (q !== '') query.title = q;
            if (ctgr) query.category_id = ctgr.id;
            if (subctgr) query.sub_category_id = subctgr.id;
            if (typectgr) query.type_id = typectgr.id;

            setIsFetch(true);

            const {data, total} = await userAPI.getPostsByFilters(query);

            const {data: topData, total: topTotal} =
                await userAPI.getPostsByFilters({
                    ...query,
                    is_top: 1,
                    itemsPerPage: all_top ? POSTS_PER_PAGE : TOP_POSTS_PER_PAGE
                });

            if (total) {
                setPosts(data);
                setPostTotal(total);
                isNotFound && setIsNotFound(false);
            } else {
                setPosts([]);
                setPostTotal(0);
                setIsNotFound(true);
            }

            if (topTotal) {
                setTopPosts(topData);
                setTopPostTotal(topTotal);
            } else {
                setTopPosts([]);
                setTopPostTotal(0);
            }

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
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
            setErrorMsg(e.message);
        }
    };

    const switchShowAll = () => {
        const vals = {...values, all_top: !all_top, page: 1};
        setValues(vals);
        isMobileView && generateUrl(vals);
    };

    useEffect(() => {
        fetchAds();
    }, []);

    useEffect(() => {
        getPostsByFilters();
    }, [asPath]);

    useEffect(() => {
        !isMobileView && generateUrl(values);
    }, [values]);

    useEffect(() => {
        resetByCategory();
    }, [ctgr?.name, subctgr?.name, typectgr?.name]);

    return statusCode !== 200 ? (
        <ErrorPage statusCode={statusCode} />
    ) : (
        <CategoriesCtx.Provider value={siteCategories}>
            <CustomHead title={seoTitle} description={description} />
            <main>
                <SearchHeader />
                <Container maxWidth="xl" className="layout-container">
                    <Grid
                        container
                        style={{marginTop: isMobileView ? 0 : '48px'}}
                    >
                        {isMobileView ? (
                            <SearchPostMobile
                                drawer={drawer}
                                formik={formik}
                                generateUrl={generateUrl}
                                handleReset={handleReset}
                                filtersState={filtersState}
                                ctgrsByCyrName={ctgrsByCyrName}
                                handleSelectCategory={handleSelectCategory}
                            />
                        ) : (
                            <SearchPostDesktop
                                right={right}
                                formik={formik}
                                handleReset={handleReset}
                                filtersState={filtersState}
                                ctgrsByCyrName={ctgrsByCyrName}
                                handleSelectCategory={handleSelectCategory}
                            />
                        )}
                        <SearchResult
                            isFetch={isFetch}
                            rightAdv={right}
                            bottomAdv={bottom}
                            isNotFound={isNotFound}
                            posts={posts}
                            topPosts={topPosts}
                            postTotal={postTotal}
                            topPostTotal={topPostTotal}
                            searchTermFromUrl={searchTermFromUrl}
                            switchShowAll={switchShowAll}
                            handlePagePagination={handlePagePagination}
                        />
                        {!!seoTxt && <SEOTextComponent text={seoTxt} />}
                    </Grid>
                </Container>
            </main>
            {!isMobileView && <Footer />}
            <ErrorModal />
        </CategoriesCtx.Provider>
    );
};
