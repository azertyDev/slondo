import {GetServerSideProps} from 'next';
import Cabinet from '@src/components/cabinet/Cabinet';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'cabinet',
                'filters',
                'auction',
                'header',
                'footer',
                'common',
                'auth_reg',
                'notifications',
                'categories',
                'common',
                'locations',
                'errors',
                'post',
                'auction'
            ]
        )
    }
});

export default Cabinet;