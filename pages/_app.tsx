import React from 'react';
import {compose} from "redux";
import App from 'next/dist/pages/_app';
import {appWithTranslation} from '@root/i18n';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import theme from '@src/theme';
import {wrapper} from '@src/redux/store';
import "../slick.min.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


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
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...props.pageProps} />
        </ThemeProvider>
    );
}

MyApp.getStaticProps = async (appContext) => {
    return ({...await App.getInitialProps(appContext)});
}

const withCompose = compose(
    wrapper.withRedux,
    appWithTranslation,
);

export default withCompose(MyApp)