import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from '../src/components';
import { store } from '../src/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Consents</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
