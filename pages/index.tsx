import {GetServerSideProps} from 'next';
import {HomePage} from '@src/components/home/HomePage';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {userAPI} from "@src/api/api";

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    const homePageData = await Promise.all([
        userAPI.getCategories(),
        userAPI.getMainSliderData({lang: locale}),
        userAPI.getPopular(),
        userAPI.getCards()
    ]);

    return ({
        props: {
            homePageData,
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