import 'bootswatch/dist/cosmo/bootstrap.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (

    <>
      <Head>
        <title>Carlos Ceron</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp