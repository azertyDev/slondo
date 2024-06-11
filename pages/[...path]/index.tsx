import { SearchContainer } from '@root/src/components/post/search/SearchContainer';
import { userAPI } from '@src/api/api';
import {
    checkIsMobileView,
    getLocationByURL
} from '@src/helpers';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
    req,
    res
}) => {
    const isMobileView = checkIsMobileView(req);

    let location = 'uzbekistan';
    const {path, ...urlParams} = query;
    const [locationName, ...urlCategories] = path as string[];

    const [site_categories, regions] = await Promise.all([
        userAPI.getCategories(),
        userAPI.getLocations()
    ]);

    // const siteCategories = categoriesNormalize(site_categories);

    // const [category, subcategory, type] = getCtgrsByCyrillicNames(
    //     urlCategories,
    //     siteCategories
    // );

    // let filters: any = {};

    // if (category) {
    //     const params: any = {
    //         category_id: category.id
    //     };

    //     if (subcategory?.id) params.sub_category_id = subcategory.id;

    //     if (type?.id) params.type_id = type.id;

    //     filters = await userAPI.getFiltersByCtgr(params);

    //     if (category.name === 'car') {
    //         if (subcategory?.name === 'made_uzbekistan') {
    //             filters = {
    //                 ...filters.default_param,
    //                 manufacturer: manufacturersDataNormalize(filters)
    //             };
    //         } else {
    //             filters = {...filters.default_param};
    //         }
    //     }

    //     filters = normalizeFiltersByCategory(filters, type);
    // }

    const {region, city} = getLocationByURL(locationName, regions);

    if (region) {
        location =
            city && region.name !== 'city_tashkent'
                ? `${region.name}.${city.name}`
                : `${region.name}.name`;
    }

    const searchTermFromUrl = (urlParams.q as string) || '';

    if (locationName !== 'uzbekistan' && !checkQuery(locationName, regions)) {
        res.statusCode = 404;
    }

    return {
        props: {
            isMobileView,
            regions,
            // filters,
            urlCategories,
            location,
            site_categories,
            searchTermFromUrl,
            statusCode: res.statusCode,
            ...(await serverSideTranslations(locale, [
                'main',
                'cabinet',
                'filters',
                'auction',
                'header',
                'footer',
                'notifications',
                'categories',
                'common',
                'locations',
                'errors',
                'post',
                'auth_reg'
            ]))
        }
    };
};

function checkQuery(loc: string, locs): boolean {
    return locs.some(l => {
        if (l.ru_name === loc) {
            return true;
        } else if (l.cities) {
            return checkQuery(loc, l.cities);
        }
    });
}

export default SearchContainer;
