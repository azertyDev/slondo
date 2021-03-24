import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";
import {useTranslation} from "react-i18next";

const Custom404 = () => {
    const {t} = useTranslation('errors');
    return <h1>{t('pageNotFound')}</h1>
};

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['errors'])
    }
});

export default Custom404;