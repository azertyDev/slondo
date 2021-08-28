import {HomePage} from '@src/components/home/HomePage';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'main',
                'locations',
                'post',
                'footer',
                'header',
                'errors',
                'auth_reg',
                'categories',
                'common',
                'cabinet'
            ]
        )
    }
});

export default HomePage;