import React, { FC } from 'react'
import Head from 'next/head'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Container } from '@material-ui/core'
import { ErrorModal } from '@src/components/error_modal/ErrorModal'
import { AdditionalComponent } from '@src/components/elements/additional/AdditionalComponent'


type MainLayoutPropsType = {
    title?: string;
};

export const MainLayout: FC<MainLayoutPropsType> = ({ children, title = 'SLONDO' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <main>
                <Container
                    maxWidth="xl"
                    style={{ paddingTop: '48px', position: 'relative' }}
                >
                    {children}
                    <AdditionalComponent />
                </Container>
            </main>
            <Footer />
            <ErrorModal />
        </>
    )
}


