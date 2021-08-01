import Cookies from 'universal-cookie';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {SearchPost} from '@src/components/post/search_post/SearchPost';
import {getStringValues} from "@src/helpers";
import {transformLocations} from "@root/transformedLocations";

export const getServerSideProps: GetServerSideProps = async ({locale, query, req, res}) => {
    const cookies = new Cookies(req.headers.cookie);
    const userLocation = cookies.get('user_location') || null;
    const locations = [...getStringValues(transformLocations), 'uzbekistan'];
    const locationExist = locations.some(loc => loc === query.user_location as string);

    if (!locationExist) res.statusCode = 404;

    return ({
        props: {
            query,
            locale,
            userLocation,
            locationExist,
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
                    'main',
                    'errors',
                    'cabinet',
                    'auction'
                ]
            )
        }
    });
};

export default SearchPost;