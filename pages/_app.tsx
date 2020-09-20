import React from 'react'
import Head from 'next/head'
import {AppProps} from 'next/app'
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import {ApolloProvider} from '@apollo/client'
import {useApollo} from '../apollo/client'
import theme from '../src/theme'


export default function MyApp({Component, pageProps}: AppProps) {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const client = useApollo(pageProps.initialApolloState);

    return (
        <>
            <Head>
                <title>My page</title>
            </Head>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </>
    );
}