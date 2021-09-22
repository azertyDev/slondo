import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {UserProfile} from '@src/components/user_profile/UserProfile';

export const getServerSideProps: GetServerSideProps = async ({locale}) => ({
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
                'locations',
                'error',
                'post'
            ]
        )
    }
});

export default UserProfile;