import {GetServerSideProps} from 'next';
import {SearchPost} from "@src/components/post/search_post/SearchPost";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {userAPI} from "@src/api/api";

export const getServerSideProps: GetServerSideProps = async ({locale, query, res}) => {
    const locationName = query.path[0];
    const regions = await userAPI.getLocations();

    if (locationName !== 'uzbekistan' && !checkQuery(locationName, regions)) {
        res.statusCode = 404;
    }

    return ({
        props: {
            regions,
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