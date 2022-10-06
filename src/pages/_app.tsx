import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />;
    </NextIntlProvider>
  );
}

export default MyApp;