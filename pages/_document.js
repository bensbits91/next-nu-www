import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    //   static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    //   }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script type="text/javascript" src="/js/breakpoints.min.js"></script>
                    <script type="text/javascript" src="/js/browser.min.js"></script>
                    <script type="text/javascript" src="/js/jquery.min.js"></script>
                    <script type="text/javascript" src="/js/main.js"></script>
                    <script type="text/javascript" src="/js/util.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
