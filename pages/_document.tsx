import {Children} from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';

class MyDocument extends Document<{ lang: string }> {
    static async getInitialProps(ctx) {
        // Render app and path and get the context of the path with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
            });

        const initialProps = await Document.getInitialProps(ctx);

        const {pathname} = ctx;
        const lang = pathname.startsWith("/uz") ? "uz" : "ru";

        return {
            ...initialProps,
            lang,
            // Styles fragment is rendered after the app and path rendering finish.
            styles: [
                ...Children.toArray(initialProps.styles),
                sheets.getStyleElement()
            ]
        };
    }

    render() {
        const {lang} = this.props;

        return (
            <Html lang={lang}>
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
                        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2464319641801775'
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
// MyDocument.getInitialProps = async (ctx: DocumentContext) => {
//     // Render app and path and get the context of the path with collected side effects.
//     const sheets = new ServerStyleSheets();
//     const originalRenderPage = ctx.renderPage;
//
//     ctx.renderPage = () =>
//         originalRenderPage({
//             enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
//         });
//
//     const initialProps = await Document.getInitialProps(ctx);
//
//     const {pathname} = ctx;
//     const lang = pathname.startsWith("/uz") ? "uz" : "ru";
//
//     return {
//         ...initialProps,
//         lang,
//         // Styles fragment is rendered after the app and path rendering finish.
//         styles: [
//             ...Children.toArray(initialProps.styles),
//             sheets.getStyleElement()
//         ]
//     };
// };

export default MyDocument;
