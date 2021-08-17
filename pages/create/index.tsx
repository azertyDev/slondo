import {GetStaticProps} from 'next';
import CreatePost from '@src/components/post/create_post/CreatePost';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'post',
                'auction',
                'cabinet',
                'filters',
                'locations',
                'categories',
                'common',
                'header',
                'footer',
                'auth_reg',
                'errors'
            ]
        )
    }
});

export default CreatePost;