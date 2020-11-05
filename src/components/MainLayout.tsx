import React from "react";
import Head from "next/head";
import Header from "./header/Header";
import {Footer} from "./footer/Footer";
import {ScrollTop} from "@src/components/elements/scrollTop/ScrollTop";
import {Fab} from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const MainLayout = ({children, title = 'SLONDO'}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main>
                {children}
                <ScrollTop>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </main>
            <Footer/>
        </>
    )
}