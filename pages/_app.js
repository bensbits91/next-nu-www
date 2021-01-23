import Head from 'next/head'
import Footer from '../components/Footer'
import '../styles/css/main.css'
import '../styles/css/fontawesome-all.min.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name='author' content='Ben Brooks' />
            </Head>
            <div id='wrapper'>
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    )
}

export default MyApp
