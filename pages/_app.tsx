import React, {useEffect} from 'react';
import {compose} from "redux";
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {wrapper} from '@src/redux/store';
import theme from '@src/theme';
import "../slick.min.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


const App = (props) => {
    const {Component, pageProps} = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

App.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
};

const withCompose = compose(
    wrapper.withRedux,
    appWithTranslation
);

export default withCompose(App);