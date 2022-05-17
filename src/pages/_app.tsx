import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../state/store/store';

function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>muffin</title>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default App
