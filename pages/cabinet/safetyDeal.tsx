import {SafetyDeal} from '@src/components/cabinet/cabinet_pages/safety_deal/SafetyDeal';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'cabinet',
                'filters',
                'header',
                'footer',
                'common',
                'auth_reg',
                'notifications',
                'categories',
                'common',
                'locations'
            ]
        )
    }
});

export default SafetyDeal;