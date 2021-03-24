import React, {FC} from 'react';
import PostCategoriesPage from '@src/components/post/create_post/categories_page/PostCategoriesPage';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPaths, GetStaticProps} from "next";

const Type: FC = () => <PostCategoriesPage/>;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['post', 'common', 'categories', 'header', 'footer', 'auth_reg']
        )
    }
});

export default Type;