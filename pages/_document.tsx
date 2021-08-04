import {Children} from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-MPMDTGC');`
                        }}
                    />
                    <link
                        rel="icon"
                        sizes="54x54"
                        type="image/png"
                        href="/img/favicon.png"
                    />
                </Head>
                <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPMDTGC" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                    }}>
                </noscript>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...Children.toArray(initialProps.styles),
            sheets.getStyleElement()
        ]
    };
};
