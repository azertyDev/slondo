import {GetStaticProps} from 'next';
import {cabinetURLs} from "@src/common_data/common";
import Cabinet from "@src/components/cabinet/Cabinet";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {userAPI} from "@src/api/api";

export async function getStaticPaths() {
    return {
        paths: cabinetURLs,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const siteCategories = await userAPI.getCategories();

    return ({
        props: {
            siteCategories,
            ...await serverSideTranslations(
                locale,
                [
                    'main',
                    'cabinet',
                    'filters',
                    'auction',
                    'header',
                    'footer',
                    'notifications',
                    'categories',
                    'common',
                    'locations',
                    'errors',
                    'post',
                    'auth_reg'
                ]
            )
        }
    });
};

export default Cabinet;