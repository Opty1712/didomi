import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import React from 'react';
import { Layout } from '../src/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Consents</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
