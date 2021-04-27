import {FeedbackContainer} from '@src/components/feedback/FeedbackContainer';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['filters', 'auth_reg', 'errors'])
    }
});

export default FeedbackContainer;