import Head from 'next/head';
import Text from '../components/common/Text';
import Layout, { siteTitle } from '../components/Layout';
import { useThemeState } from '../theme/ThemeContext';

export default function Custom404(): JSX.Element {
  const theme = useThemeState();
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - Page Not Found`}</title>
      </Head>
      <section className={`min-h-screen flex flex-col bg-gradient-to-br from-${theme}-600 to-${theme}-900`}>
        <Text type="h1">404</Text>
        <Text type="h3">Page Not Found</Text>
      </section>
    </Layout>
  );
}
