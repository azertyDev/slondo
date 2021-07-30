import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {SiteGuides} from '@src/components/site_guides/SiteGuides';

export const getServerSideProps: GetServerSideProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'safe_shopping',
                'errors',
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

export default SiteGuides;