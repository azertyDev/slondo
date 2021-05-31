import React, {FC} from 'react';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import BannedPostsContainer from '@src/components/cabinet/cabinet_pages/banned_posts/BannedPostsContainer';

const BannedPosts: FC = () => <BannedPostsContainer />;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg', 'notifications', 'categories', 'common', 'locations']
        )
    }
});

export default BannedPosts;