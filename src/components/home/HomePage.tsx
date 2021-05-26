import React, {FC} from 'react';
import Head from 'next/head';
import {Header} from '@src/components/header/Header';
import {Main} from './main/Main';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';


export const HomePage: FC = () => {
    return (
        <>
            <Head>
                <title>Slondo - доска объявлений</title>
                <meta name="robots" content="noindex"/>
            </Head>
            <Header/>
            <Main/>
            <Footer/>
            <ErrorModal/>
        </>
    );
};
