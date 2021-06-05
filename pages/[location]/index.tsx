import Cookies from 'universal-cookie';
import {GetServerSideProps} from 'next';
import {SearchPostsByFilters} from '@src/components/search_posts_by_filters/SearchPostsByFilters';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({locale, query, req}) => {
    const cookies = new Cookies(req.headers.cookie);
    const userLocation = cookies.get('user_location') || null;

    return ({
        props: {
            query,
            locale,
            userLocation,
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