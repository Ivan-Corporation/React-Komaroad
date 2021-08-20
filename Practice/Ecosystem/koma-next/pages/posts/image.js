import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Layout from './../../components/layout';

const NextImage = () => (
    <Layout>
        <Head>
            <title>Изображение</title>
        </Head>
        <Image
            src="/images/profile.jpg"
            height={244}
            width={244}
            alt="avatar"
        />
        <h2>
            <Link href="/">
                <a>На главную</a>
            </Link>
        </h2>
    </Layout>
)
export default NextImage