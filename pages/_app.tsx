import Head from "next/head";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title></title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"
        />
      </Head>

      <Component {...pageProps} />
    </div>
  );
};

export default App;
