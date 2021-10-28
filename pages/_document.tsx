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
                    <link
                        rel="icon"
                        sizes="54x54"
                        type="image/png"
                        href="/img/favicon.png"
                    />
                    <script
                        async
                        crossOrigin="anonymous"
                        data-ad-client='ca-pub-2464319641801775'
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}
                    />
                </Head>
                <body>
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
    // Render app and path and get the context of the path with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and path rendering finish.
        styles: [
            ...Children.toArray(initialProps.styles),
            sheets.getStyleElement()
        ]
    };
};
