import React from 'react'
import {compose} from "redux"
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import App from 'next/app'
import theme from '../src/theme'
import {wrapper} from '../src/redux/store'
import {appWithTranslation} from '../i18n'

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
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...props.pageProps} />
            </ThemeProvider>
        </>
    );
}

MyApp.getInitialProps = async (appContext) => ({...await App.getInitialProps(appContext)})

const withCompose = compose(
    wrapper.withRedux,
    appWithTranslation
);

//withRedux wrapper that passes the store to the App Component
export default withCompose(MyApp)