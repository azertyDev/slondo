import {GetStaticProps} from 'next';
import CreatePost from '@root/src/components/post/create_post/CreatePost';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
// import {userAPI} from '@src/api/api';

export const getStaticProps: GetStaticProps = async ({locale}) => {
    // const siteCategories = await userAPI.getCategories();

    return {
        props: {
            siteCategories: [],
            ...(await serverSideTranslations(locale, [
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
            ]))
        }
    };
};

export default CreatePost;
