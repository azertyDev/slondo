import React, {FC, ReactNode} from "react";
import Head from "next/head";
import {Fab} from "@material-ui/core";
import Header from "./header/Header";
import {Footer} from "./footer/Footer";
import {ScrollTop} from "@src/components/elements/scroll_top/ScrollTop";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {ErrorModal} from "@src/components/error_modal/ErrorModal";


type MainLayoutPropsType = {
    children: ReactNode;
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
                {children}
                <ScrollTop>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTop>
            </main>
            <Footer/>
            <ErrorModal/>
        </>
    )
}