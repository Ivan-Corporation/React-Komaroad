import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'


export default function FirstPost() {
    return (
        <Layout>

            <Head>
                <title>Картины</title>
            </Head>
            <h1>Картины:</h1>
            <Image
                src="/images/Aivazovsky.jpg"
                height={768}
                width={1280}
                alt="Aivazovsky"
            />
            <br></br>
            <Image
                src="/images/Grimshaw.jpg"
                height={768}
                width={1280}
                alt="Grimshaw"
            />
            <h2>
                <Link href="/">
                    <a>На главную</a>
                </Link>
            </h2>

        </Layout>
    )
}
