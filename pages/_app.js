import Head from 'next/head'
import '../styles/css/main.css'
// import '../styles/css/grid.css'
import '../styles/css/fontawesome-all.min.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name='author' content='Ben Brooks' />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
