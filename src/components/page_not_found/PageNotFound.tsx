import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import Head from "next/head";

export const PageNotFound: FC = () => {
    const {t} = useTranslation('errors');
    const title = t('pageNotFound');
    return (
        <div>
            <Head>
                <meta name="robots" content="noindex"/>
                <meta name="description" content=''/>
                <meta property="og:site_name" content="Slondo"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title} key="ogtitle"/>
                <meta property="og:description" content='' key="ogdesc"/>
                <title>{title}</title>
            </Head>
            <h1>{t('pageNotFound')}</h1>
        </div>
    );
};