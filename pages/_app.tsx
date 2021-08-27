import {browser} from 'process';
import {useEffect} from 'react';
import theme from '@src/theme';
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {AuthCtx, ErrorCtx, SearchCtx, ExitPromptCtx} from "@src/context";
import {useAuth, useError, useSearch} from "@src/hooks";
import {useExitPrompt} from "@src/hooks/useExitPrompt";
import {userAPI} from "@src/api/api";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import "../slick.min.css";

const App = (props) => {
    const {Component, pageProps} = props;

    const auth = useAuth();
    const error = useError();
    const search = useSearch();
    const exitPrompt = useExitPrompt(false);

    if (browser) {
        const regions = localStorage.getItem('regions');
        !regions && userAPI.getLocations()
            .then(regs => {
                localStorage.setItem('regions', JSON.stringify(regs));
            });
    }

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ErrorCtx.Provider value={error}>
            <ExitPromptCtx.Provider value={exitPrompt}>
                <AuthCtx.Provider value={auth}>
                    <SearchCtx.Provider value={search}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline/>
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </SearchCtx.Provider>
                </AuthCtx.Provider>
            </ExitPromptCtx.Provider>
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