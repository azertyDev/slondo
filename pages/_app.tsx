import React, {FC} from 'react'
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import Head from 'next/head'
import {AppProps} from 'next/app'
import theme from '../src/theme'

import {wrapper} from '../src/redux/store'

const MyApp: FC<AppProps> = (props) => {
    const {Component} = props;
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>My page</title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...props.pageProps} />
            </ThemeProvider>
        </>
    );
}

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp)