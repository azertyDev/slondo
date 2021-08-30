import {FeedbackContainer} from '@src/components/help/pages/feedback/FeedbackContainer';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale,
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
        ])
    }
});

export default FeedbackContainer;