import {FC} from 'react';
import Head from 'next/head';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import {Container} from '@material-ui/core';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {SEOTextComponent} from '@src/components/elements/seo_text_component/SEOTextComponent';


type MainLayoutPropsType = {
    title?: string,
    description?: string,
    seoTxt?: string
};

export const MainLayout: FC<MainLayoutPropsType> = (props) => {
    const title = props.title;
    const description = props.description;

    const {
        children,
        seoTxt
    } = props;

    return (
        <>
            <Head>
                <title>{title}</title>
                {/*<meta name="robots" content="noindex"/>*/}
                <meta name="description" content={description}/>
                <meta property="og:site_name" content="Slondo"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title} key="ogtitle"/>
                <meta property="og:description" content={description} key="ogdesc"/>
            </Head>
            <Header/>
            <main>
                <Container
                    maxWidth="xl"
                    style={{paddingTop: '48px', position: 'relative'}}
                >
                    {children}
                    {!!seoTxt && <SEOTextComponent text={seoTxt}/>}
                </Container>
            </main>
            <Footer/>
            <ErrorModal/>
        </>
    );
};


