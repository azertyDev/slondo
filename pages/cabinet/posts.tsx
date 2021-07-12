import MyPosts from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'cabinet',
                'header',
                'footer',
                'common',
                'auth_reg',
                'notifications',
                'categories',
                'common',
                'locations',
                'errors'
            ]
        )
    }
});

export default MyPosts;