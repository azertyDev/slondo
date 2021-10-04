import {browser} from 'process';
import {useEffect} from 'react';
import theme from '@src/theme';
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {AuthCtx, ErrorCtx, SearchCtx, ExitPromptCtx, UserLocationCtx, SocketCtx} from "@src/context";
import {useAuth, useError, useSearch, useSocket, useUserLocation} from "@src/hooks";
import {useExitPrompt} from "@src/hooks/useExitPrompt";
import {DEV_URL, PRODUCTION_URL} from "@src/constants";
import {userAPI} from "@src/api/api";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import "../slick.min.css";

const socketDev = `${DEV_URL}:8005`;
const socketProduction = `${PRODUCTION_URL}:8005`;

const App = (props) => {
    const {Component, pageProps} = props;

    const auth = useAuth();
    const error = useError();
    const search = useSearch();
    const socket = useSocket(socketProduction);
    const userLocation = useUserLocation();
    const exitPrompt = useExitPrompt(false);

    const user = auth.user;

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
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    }, []);

    useEffect(() => {
        if (browser && socket && user.id !== null) {
            socket.on('connect', () => {
                socket.emit('user_connected', user.id);
            });
            return () => {
                socket.off('connect', () => {
                    socket.emit('disconnect', user.id);
                });
            };
        }
    }, [socket]);

    return (
        <ErrorCtx.Provider value={error}>
            <ExitPromptCtx.Provider value={exitPrompt}>
                <SocketCtx.Provider value={socket}>
                    <AuthCtx.Provider value={auth}>
                        <UserLocationCtx.Provider value={userLocation}>
                            <SearchCtx.Provider value={search}>
                                <ThemeProvider theme={theme}>
                                    <CssBaseline/>
                                    <Component {...pageProps} />
                                </ThemeProvider>
                            </SearchCtx.Provider>
                        </UserLocationCtx.Provider>
                    </AuthCtx.Provider>
                </SocketCtx.Provider>
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