import React, {FC} from "react";
import Head from "next/head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {ErrorModal} from "@src/components/error_modal/ErrorModal";
import {Container} from "@material-ui/core";


type MainLayoutPropsType = {
    title?: string;
};

export const MainLayout: FC<MainLayoutPropsType> = ({children, title = 'SLONDO'}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main>
                <Container maxWidth="xl" style={{paddingTop: '48px'}}>
                    {children}
                </Container>
            </main>
            <Footer/>
            <ErrorModal/>
        </>
    );
};
