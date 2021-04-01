import React, {FC} from 'react';
import ElectronicsComponent from "@src/components/categories/electronics";
import {GetStaticPaths, GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Product: FC = () => {
    return <ElectronicsComponent/>;
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: true //indicates the type of fallback
    }
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['post', 'categories', 'common', 'header', 'footer', 'auth_reg', 'errors']
        )
    }
});

export default Product;