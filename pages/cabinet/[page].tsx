import {GetStaticProps} from 'next';
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

const cabinetURLs = [
    '/cabinet/main',
    '/cabinet/rating',
    '/cabinet/subs',
    '/cabinet/banned',
    '/cabinet/posts',
    '/cabinet/auctions',
    '/cabinet/purchases',
    '/cabinet/favorite',
    '/cabinet/notifications',
    '/cabinet/messages',
    '/cabinet/safe_deal',
    '/cabinet/paid_services',
    '/cabinet/settings',
    '/uz/cabinet/main',
    '/uz/cabinet/rating',
    '/uz/cabinet/subs',
    '/uz/cabinet/banned',
    '/uz/cabinet/posts',
    '/uz/cabinet/auctions',
    '/uz/cabinet/purchases',
    '/uz/cabinet/favorite',
    '/uz/cabinet/notifications',
    '/uz/cabinet/safe_deal',
    '/uz/cabinet/paid_services',
    '/uz/cabinet/settings'
];