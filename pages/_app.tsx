import React from 'react';
import {compose} from "redux";
import {appWithTranslation} from '@root/i18n';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {wrapper} from '@src/redux/store';
import theme from '@src/theme';
import "../slick.min.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Head from "next/head";

const MyApp = (props) => {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            {/*<Head>*/}
            {/*    <meta name="viewport" content="viewport-fit=cover" />*/}
            {/*</Head>*/}
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

MyApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
};

const withCompose = compose(
    wrapper.withRedux,
    appWithTranslation,
);

export default withCompose(MyApp)