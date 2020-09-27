import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../theme/ThemeContext';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
