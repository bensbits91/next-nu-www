import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Section from '../components/section/Section';
import { standardMetaTitle, platforms } from '../utils/strings';

export default function Index() {
    return (
        <>
            <Head>
                <title>{standardMetaTitle}</title>
            </Head>
            <Layout>
                <Section
                    h1Text='Modern SharePoint Apps'
                    content1='<p>Engage and empower your users... Enhance your sites... Next-level...</p>'
                    imgSrc='n2021-600w_2.png'
                    variant='hero'
                />
                <Section
                    bgColor='bgDarker'
                    h2Text='Popular apps...'
                    content1='<p>Classifieds...</p>'
                    imgSrc='n2021-pink-600w.png'
                    swap={true}
                    shape='slantBottomDown'
                />
                <Section
                    h2Text='Our apps work with...'
                    content1={`<p>SP 2013 - 2019, O365, Teams</p><ul>${platforms.map(p => `<li>${p}</li>`).join('')}</ul>`}
                    // content2={ourAppsWorkWithContent2}
                    flex={false}
                    />
                <Section
                    bgColor='bgDarker'
                    h2Text='Fast installation, friendly support...'
                    content1='<p>Need a good blurb here but just keep typing to make it longer blah</p>'
                    imgSrc='n2021-yellow-600w.png'
                    shape='pinchRight'
                />
                <Section
                    h2Text='Built using...'
                    content1='<p>MS tools... reliable...</p>'
                    flex={false}
                />
                <Section
                    bgColor='bgDarker'
                    h2Text='Customizable...'
                    content1='<p>Colors, images, spacing, fonts, sizes... features... apps</p>'
                    shape='slantTopUp'
                />
                <Section
                    h2Text='Why nuTandem?'
                    content1='<p>Personable and friendly... 100s of custom apps installed in the past decade... Ongoing support, new resource... 1000s of hours of support provided... We can build anything...</p>'
                />
                <Section
                    bgColor='bgDarker'
                    h2Text='Some of our customers...'
                    content1='<p>USDA FS... Sizzler... Outwest... City of Aurora... ORDLCD... COCC... Carroll... UMF... Tastea... Bing...</p>'
                    shape='slantTopDown'
                />
            </Layout>
        </>
    );
}