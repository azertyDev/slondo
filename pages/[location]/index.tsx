import {GetStaticPaths, GetStaticProps} from 'next';
import {SearchPostsByFilters} from '@src/components/search_posts_by_filters/SearchPostsByFilters';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
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

export default SearchPostsByFilters;