import 'core-js/es/promise'
import 'core-js/es/set'
import 'core-js/es/map'

import React from 'react'
import {compose} from "redux"
import {Provider, useDispatch} from "react-redux"
import App from 'next/dist/pages/_app'
import {appWithTranslation} from '../i18n'
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import theme from '@src/theme'
import {store} from '@src/redux/store'
import {fetchCategories} from "@src/redux/thunks/categoriesThunk"

// Slick css file
import "../slick.min.css"


const MyApp = (props) => {
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
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Component {...props.pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}

MyApp.getInitialProps = async (appContext) => ({...await App.getInitialProps(appContext)});

const withCompose = compose(
    appWithTranslation
);

//withRedux wrapper that passes the store to the App Component
export default withCompose(MyApp)