import {ShowPostContainer} from '@src/components/post/show_post/ShowPostContainer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticPaths, GetStaticProps} from 'next';

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'post',
                'categories',
                'common',
                'cabinet',
                'header',
                'footer',
                'auth_reg',
                'filters'
            ]
        )
    }
});

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    };
};

export default ShowPostContainer;