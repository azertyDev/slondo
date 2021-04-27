import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {PageNotFound} from '@src/components/page_not_found/PageNotFound';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['errors'])
    }
});

export default PageNotFound;