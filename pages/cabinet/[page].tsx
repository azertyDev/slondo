import {GetStaticProps} from 'next';
import {cabinetURLs} from "@src/common_data/common";
import Cabinet from "@src/components/cabinet/Cabinet";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export async function getStaticPaths() {
    return {
        paths: cabinetURLs,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return ({
        props: {
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