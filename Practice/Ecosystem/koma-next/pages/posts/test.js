import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>

            <Head>
                <title>Тест</title>
            </Head>
            <h1>ТЕСТ</h1>

            <h2>
                <Link href="/">
                    <a>На главную</a>
                </Link>
            </h2>

        </Layout>
    )
}
