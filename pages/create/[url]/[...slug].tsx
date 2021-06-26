import {GetStaticPaths, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import CreatePost from '@src/components/post/create_post/CreatePost';

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
                'post',
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