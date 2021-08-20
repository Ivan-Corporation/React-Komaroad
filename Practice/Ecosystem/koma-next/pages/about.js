import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>О нас</title>
            </Head>
            <h1>Мы жалкие неудачники</h1>
            <h3>Наши достижения:</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>
                <Link href="/">
                    <a>На главную</a>
                </Link>
            </h2>
        </Layout>
    )
}
