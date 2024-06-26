import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { userAPI } from '@src/api/api';
import { DEV_URL, PROD_URL, TESTB_URL } from '@src/constants';
import {
    AuthCtx,
    ErrorCtx,
    ExitPromptCtx,
    SearchCtx,
    SocketCtx,
    UserLocationCtx
} from '@src/context';
import {
    useAuth,
    useError,
    useSearch,
    useSocket,
    useUserLocation
} from '@src/hooks';
import { useExitPrompt } from '@src/hooks/useExitPrompt';
import theme from '@src/theme';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';
import { browser } from 'process';
import { useEffect } from 'react';

import { cookieOpts, cookies } from '@root/src/helpers';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import '../slick.min.css';

const socketDev = `${DEV_URL}`;
const socketTestb = `${TESTB_URL}:8005`;
const socketProd = `${PROD_URL}:8005`;

const userObsChannel = 'user-observer-channel:App\\Events\\UserObserverEvent';

const App = props => {
    const {Component, pageProps} = props;

    const auth = useAuth();
    const user = auth.user;

    const error = useError();
    const search = useSearch();
    const socket = useSocket(socketDev);
    const userLocation = useUserLocation();
    const showExitPrompt = useExitPrompt(false);

    if (browser) {
        const regions = localStorage.getItem('regions');

        !regions &&
            userAPI.getLocations().then(regs => {
                localStorage.setItem('regions', JSON.stringify(regs));
            });
    }

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
    }, []);

    useEffect(() => {
        if (browser && socket && user?.id !== null) {
            socket.on('connect', () => {
                socket.emit('user_connected', user?.id);
            });

            socket.on(userObsChannel, data => {
                const {balance, ...observer} = data;
                const userData = {...user, balance, observer};

                auth.addUser(userData);
                cookies.set('slondo_user', userData, cookieOpts);
            });

            return () => {
                socket.off('connect', () => {
                    socket.emit('disconnect');
                });
            };
        }
    }, [socket, user]);

    return (
        <ErrorCtx.Provider value={error}>
            <SocketCtx.Provider value={socket}>
                <AuthCtx.Provider value={auth}>
                    <ExitPromptCtx.Provider value={showExitPrompt}>
                        <UserLocationCtx.Provider value={userLocation}>
                            <SearchCtx.Provider value={search}>
                                <ThemeProvider theme={theme}>
                                    <CssBaseline />
                                    <Script
                                        id="gtag-init"
                                        strategy="afterInteractive"
                                        dangerouslySetInnerHTML={{
                                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                            })(window,document,'script','dataLayer','GTM-MPMDTGC');`
                                        }}
                                    />
                                    <noscript
                                        dangerouslySetInnerHTML={{
                                            __html: `<iframe
                                                    height='0'
                                                    width='0'
                                                    style='display:none;visibility:hidden'
                                                    src='https://www.googletagmanager.com/ns.html?id=GTM-MPMDTGC'
                                                />`
                                        }}
                                    />
                                    <Component {...pageProps} />
                                </ThemeProvider>
                            </SearchCtx.Provider>
                        </UserLocationCtx.Provider>
                    </ExitPromptCtx.Provider>
                </AuthCtx.Provider>
            </SocketCtx.Provider>
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
