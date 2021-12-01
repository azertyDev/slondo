import Script from 'next/script';
import {browser} from 'process';
import {useEffect} from 'react';
import theme from '@src/theme';
import {userAPI} from '@src/api/api';
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {
    AuthCtx,
    ErrorCtx,
    SearchCtx,
    ExitPromptCtx,
    UserLocationCtx,
    SocketCtx
} from '@src/context';
import {
    useAuth,
    useError,
    useSearch,
    useSocket,
    useUserLocation
} from '@src/hooks';
import {useExitPrompt} from '@src/hooks/useExitPrompt';
import {DEV_URL, PRODUCTION_URL, TESTB_URL} from '@src/constants';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import '../slick.min.css';

const socketDev = `${DEV_URL}:8005`;
const socketTestb = `${TESTB_URL}:8005`;
const socketProduction = `${PRODUCTION_URL}:8005`;

const userObsChannel = 'user-observer-channel:App\\Events\\UserObserverEvent';

const App = props => {
    const {Component, pageProps} = props;

    const auth = useAuth();
    const error = useError();
    const search = useSearch();
    const socket = useSocket(socketProduction);
    const userLocation = useUserLocation();
    const showExitPrompt = useExitPrompt(false);

    const user = auth.user;

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
        if (browser && socket) {
            socket.on('connect', () => {
                if (user.id !== null) {
                    socket.emit('user_connected', user.id);
                }
            });

            socket.on(userObsChannel, data => {
                console.log(data);
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
                                                    height="0"
                                                    width="0"
                                                    style="display:none;visibility:hidden"
                                                    src="https://www.googletagmanager.com/ns.html?id=GTM-MPMDTGC"
                                                />`
                                        }}
                                    ></noscript>
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
