import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import CreatePost from '@src/components/post/create_post/CreatePost';

export const getServerSideProps: GetServerSideProps = async ({locale}) => ({
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