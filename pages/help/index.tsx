import {HelpPage} from '@src/components/help';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetServerSideProps} from 'next';

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
                'help'
            ]
        )
    }
});

export default HelpPage;

