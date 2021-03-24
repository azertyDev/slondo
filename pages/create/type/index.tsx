import React, {FC} from 'react';
import PostTypesPage from '@src/components/post/create_post/post_types_page/PostTypesPage';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";

const PostType: FC = () => <PostTypesPage/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['header', 'post', 'common', 'footer', 'auth_reg'])
    }
});

export default PostType;