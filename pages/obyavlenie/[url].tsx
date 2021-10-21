import {ShowPostContainer} from '@src/components/post/show_post/ShowPostContainer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetServerSideProps} from 'next';
import {userAPI} from "@src/api/api";

export const getServerSideProps: GetServerSideProps = async ({locale, query, res}) => {
    const postUrl = query.url as string;
    const [postId] = postUrl.split('-').splice(-1);

    const [initPostData, siteCategories] =
        await Promise.all([userAPI.getPostById(postId), userAPI.getCategories()]);

    return ({
        props: {
            initPostData,
            siteCategories,
            statusCode: res.statusCode,
            ...await serverSideTranslations(
                locale,
                [
                    'post',
                    'locations',
                    'auction',
                    'categories',
                    'common',
                    'cabinet',
                    'header',
                    'footer',
                    'auth_reg',
                    'filters',
                    'errors'
                ]
            )
        }
    });
};

export default ShowPostContainer;