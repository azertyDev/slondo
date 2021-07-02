import {FC} from 'react';
import Head from 'next/head';
import {Header} from '@src/components/header/Header';
import {Main} from './main/Main';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {defaultSEOContent} from '@src/common_data/seo_content';
import {useTranslation} from 'next-i18next';

export const HomePage: FC = () => {
    const {language} = useTranslation().i18n;
    const seo = defaultSEOContent[language as string];
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="robots" content="noindex"/>
                <meta name="description" content={seo.description}/>
                <meta property="og:site_name" content="Slondo"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={seo.title} key="ogtitle"/>
                <meta property="og:description" content={seo.description} key="ogdesc"/>
            </Head>
            <Header/>
            <Main seoTxt={seo.text}/>
            <Footer/>
            <ErrorModal/>
        </>
    );
};
