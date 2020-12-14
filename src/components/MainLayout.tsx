import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from './header/Header';
import { Footer } from './footer/Footer';
import { ErrorModal } from '@src/components/error_modal/ErrorModal';

type MainLayoutPropsType = {
    children: ReactNode;
    title?: string;
};

export const MainLayout: FC<MainLayoutPropsType> = ({
    children,
    title = 'SLONDO',
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main style={{ marginTop: '40px' }}>{children}</main>
            <Footer />
            <ErrorModal />
        </>
    );
};
