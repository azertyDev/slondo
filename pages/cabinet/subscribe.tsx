import SubsContainer from "@src/components/cabinet/cabinet_pages/subs/SubsContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            [
                'cabinet',
                'header',
                'footer',
                'common',
                'auth_reg',
                'locations'
            ]
        )
    }
});

export default SubsContainer;