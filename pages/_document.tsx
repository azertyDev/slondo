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
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=GTM-MPMDTGC`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'GTM-MPMDTGC', {
                              page_path: window.location.pathname,
                            });
                          `
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
                <Main/>
                <NextScript/>
                <noscript>
                    <iframe
                        height="0"
                        width="0"
                        style={{display: 'none', visibility: 'hidden'}}
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MPMDTGC"
                    >
                    </iframe>
                </noscript>
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
