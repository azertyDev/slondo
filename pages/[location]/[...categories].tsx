import {FC} from 'react';
import {useRouter} from 'next/router';
import {GetStaticPaths, GetStaticProps} from 'next';
import {SearchPostsByFilters} from '@src/components/search_posts_by_filters/SearchPostsByFilters';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {getCtgrsByCyrillicNames} from '@src/helpers';
import {PageNotFound} from '@src/components/page_not_found/PageNotFound';

const SearchPage: FC = () => {
    const {query, locale} = useRouter();
    const {categories} = query;
    const [categoryName, subCtgrName, typeCtgrName] = categories as string[];
    const ctgrsByCyrillicName = getCtgrsByCyrillicNames(categoryName, subCtgrName, typeCtgrName);
    const [ctgr, subCtgr, typeCtgr] = ctgrsByCyrillicName;

    const is404 = !ctgr || !subCtgr || typeCtgrName && !typeCtgr || categories.length > 3;

    return is404
           ? <PageNotFound/>
           : <SearchPostsByFilters
               locale={locale}
               query={query}
               ctgrsByQuery={ctgrsByCyrillicName}
           />;
};

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

export default SearchPage;