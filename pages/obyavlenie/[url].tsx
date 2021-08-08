import {ShowPostContainer} from '@src/components/post/show_post/ShowPostContainer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetServerSideProps} from 'next';

export const getServerSideProps: GetServerSideProps = async ({locale, req}) => {
    return ({
        props: {
            referer: req.headers.referer,
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
                    'errors'
                ]
            )
        }
    });
};

export default ShowPostContainer;