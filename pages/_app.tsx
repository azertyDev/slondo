import {useEffect} from 'react';
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {AuthCtx, ErrorCtx, SearchCtx} from "@src/context";
import {useAuth, useError, useSearch} from "@src/hooks";
import theme from '@src/theme';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import "../slick.min.css";

const App = (props) => {
    const {Component, pageProps} = props;

    const auth = useAuth();
    const error = useError();
    const search = useSearch();

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ErrorCtx.Provider value={error}>
            <AuthCtx.Provider value={auth}>
                <SearchCtx.Provider value={search}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </SearchCtx.Provider>
            </AuthCtx.Provider>
        </ErrorCtx.Provider>
    );
};

App.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
};

export default appWithTranslation(App);