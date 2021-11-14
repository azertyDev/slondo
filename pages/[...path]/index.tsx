import {GetServerSideProps} from 'next';
import {userAPI} from "@src/api/api";
import {SearchPost} from "@src/components/post/search_post/SearchPost";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {getLocationByURL} from "@src/helpers";

export const getServerSideProps: GetServerSideProps = async ({locale, query, res}) => {
    let location = 'uzbekistan';
    const {path, ...urlParams} = query;
    const [locationName, ...urlCategories] = path as string[];

    const [
        site_categories,
        regions
    ] = await Promise.all([
        userAPI.getCategories(),
        userAPI.getLocations()
    ]);

    const {region, city} = getLocationByURL(locationName, regions);

    if (region) {
        location = city && region.name !== 'city_tashkent'
            ? `${region.name}.${city.name}`
            : `${region.name}.name`;
    }

    const searchTermFromUrl = urlParams.q as string || '';

    if (locationName !== 'uzbekistan' && !checkQuery(locationName, regions)) {
        res.statusCode = 404;
    }

    return ({
        props: {
            urlCategories,
            location,
            site_categories,
            searchTermFromUrl,
            statusCode: res.statusCode,
            ...await serverSideTranslations(
                locale,
                [
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
                ]
            )
        }
    });
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

export default SearchPost;