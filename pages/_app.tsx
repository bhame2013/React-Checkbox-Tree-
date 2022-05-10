import Head from "next/head";
import { AppProps } from "next/app";
import { TreeProvider } from 'src/contexts/tree'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TreeProvider>
      <Head>
        <title>HiPlatform Desafio de Frontend</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="HiPlatform Desafio de Frontend" />
        <meta
          name="viewport"
          content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"
        />
      </Head>

      <Component {...pageProps} />
    </TreeProvider>
  );
};

export default App;
