import {PageNotFound} from "@src/components/page_not_found/PageNotFound";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['errors'])
    }
});

export default PageNotFound;