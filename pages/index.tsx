import {HomePage} from '@src/components/home/HomePage';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'main',
                'filters',
                'header',
                'footer',
                'errors',
                'auth_reg',
                'categories',
                'common'
            ]
        )
    }
});

export default HomePage;