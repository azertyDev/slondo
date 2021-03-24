import React, {FC} from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPaths, GetStaticProps} from "next";
import dynamic from "next/dynamic";

const FormPage = dynamic(() => import("@src/components/post/create_post/form_page/FormPage"), {
    ssr: false
});

const Create: FC = () => <FormPage/>;

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
            ['post', 'categories', 'common', 'header', 'footer', 'auth_reg'])
    }
});

export default Create;