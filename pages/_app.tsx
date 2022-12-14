import '../styles/globals.scss'
import '../styles/normalize.scss'
import "../styles/Home.scss";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
