import React, {FC} from 'react';
import MyPostsContainer from "@src/components/cabinet/cabinet_pages/my_posts/MyPostsContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Posts: FC = () => {
    return <MyPostsContainer/>;
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg']
        )
    }
});

export default Posts;