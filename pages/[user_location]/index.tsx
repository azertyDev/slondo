import Cookies from 'universal-cookie';
import {GetServerSideProps} from 'next';
import {SearchPost} from '@src/components/post/search_post/SearchPost';
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
                    'main',
                    'errors',
                    'cabinet'
                ]
            )
        }
    });
};

export default SearchPost;