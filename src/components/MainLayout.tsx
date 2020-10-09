import React from "react";
import Head from "next/head";
import Header from "./header/Header";
import {Footer} from "./footer/Footer";


export const MainLayout = ({children, title = 'SLONDO'}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}