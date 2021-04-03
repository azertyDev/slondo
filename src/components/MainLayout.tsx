import React, {FC} from 'react';
import Head from 'next/head';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {Container} from '@material-ui/core';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';


type MainLayoutPropsType = {
    title?: string;
    description?: string
};

export const MainLayout: FC<MainLayoutPropsType> = (props) => {
    const {children, description, title = 'SLONDO'} = props;
    return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
                <meta name="description" content={description}/>
                <meta property="og:title" content={title} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />
                <title>{title}</title>
            </Head>
            <Header/>
            <main>
                <Container
                    maxWidth="xl"
                    style={{paddingTop: '48px', position: 'relative'}}
                >
                    {children}
                </Container>
            </main>
            <Footer/>
            <ErrorModal/>
        </>
    );
};


