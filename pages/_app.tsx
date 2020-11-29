import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../theme/ThemeContext';
import { LoadingProvider } from '../components/LoadingContext';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </ThemeProvider>
  );
}
