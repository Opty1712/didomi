import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { Layout } from '../src/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
