import {GetStaticProps} from 'next';
import {HomePage} from '@src/components/home/HomePage';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {userAPI} from "@src/api/api";

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const siteCategories = await userAPI.getCategories();

    return ({
        props: {
            siteCategories,
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
};

export default HomePage;