import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import ApiErrorsWrapper from '../components/wrappers/ApiErrorsWrapper';
import { store } from '../state/store/store';
import '../styles/globals.css';
import '../styles/reset.css';

function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Next.js Boilerplate</title>
    </Head>
    <Provider store={store}>
      <ApiErrorsWrapper>
        <Component {...pageProps} />
      </ApiErrorsWrapper>
    </Provider>
  </>
}

export default App
