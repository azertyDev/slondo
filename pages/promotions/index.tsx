import {GetServerSideProps} from 'next';
import {Promotions} from '@src/components/promotions/Promotions';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({locale}) => ({
    props: {
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
                'errors',
                'promotions',
                'help'
            ]
        )
    }
});

export default Promotions;