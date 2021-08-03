import Head from 'next/head'
// import Link from 'next/link'
import Layout from '../../components/Layout';
import { standardMetaTitle } from '../../utils/strings';

export default function ContactIndex() {
    return (
        <>
            <Head>
                <title>{standardMetaTitle} | Contact Us</title>
            </Head>
            <Layout>
                <h1>Contact nuTandem</h1>
                <div>
                    Form...
                </div>
            </Layout>
        </>
    )
}