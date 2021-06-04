import Cookies from 'universal-cookie';
import {GetServerSideProps} from 'next';
import {userAPI} from '@src/api/api';
import {ITEMS_PER_PAGE_FILTERS} from '@src/constants';
import {SearchPostsByFilters} from '@src/components/search_posts_by_filters/SearchPostsByFilters';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {getCtgrsByCyrillicNames, getSearchTxt} from '@src/helpers';

export const getServerSideProps: GetServerSideProps = async ({locale, query, req}) => {
    const cookies = new Cookies(req.headers.cookie);
    const userLocation = cookies.get('user_location') || null;

    const {location, categories, ...urlParams} = query;

    const categoriesByCyrillicNames = getCtgrsByCyrillicNames(categories as string[]);
    const [ctgr, subCtgr, typeCtgr] = categoriesByCyrillicNames;

    const searchTxtFromUrl = getSearchTxt(categories as string[]);

    const params: any = {
        page: 1,
        itemsPerPage: ITEMS_PER_PAGE_FILTERS,
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

    if (searchTxtFromUrl) params.title = searchTxtFromUrl;
    if (ctgr) params.category_id = ctgr.id;
    if (subCtgr) params.sub_category_id = subCtgr.id;
    if (typeCtgr) params.type_id = typeCtgr.id;

    const result = await userAPI.getPostsByFilters(params);

    return ({
        props: {
            urlParams,
            categories: categoriesByCyrillicNames,
            locale,
            userLocation,
            initPosts: result?.data ?? [],
            initTotal: result?.total ?? 0,
            ...await serverSideTranslations(
                locale,
                [
                    'categories',
                    'filters',
                    'post',
                    'locations',
                    'header',
                    'footer',
                    'auth_reg',
                    'common',
                    'errors'
                ]
            )
        }
    });
};

export default SearchPostsByFilters;