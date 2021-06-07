import {GetStaticPaths, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {UserProfile} from '@src/components/user_profile/UserProfile';

export const getStaticPaths: GetStaticPaths<{slug: string}> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    };
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'cabinet',
                'main',
                'header',
                'footer',
                'common',
                'auth_reg',
                'notifications',
                'categories',
                'locations'
            ]
        )
    }
});

export default UserProfile;