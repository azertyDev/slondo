import React, {FC} from 'react';
import {Search} from "@src/components/search/Search";
import {GetStaticPaths, GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Type: FC = () => {
    return <Search/>;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['categories', 'header', 'footer', 'auth_reg', 'common', 'errors']
        )
    }
});

export default Type;