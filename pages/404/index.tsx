import React, {FC} from "react";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";

const Custom404: FC = () => {
    return <PageNotFound/>;
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['errors'])
    }
});

export default Custom404;