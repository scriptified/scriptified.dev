import Link from 'next/link';
import Text from '../components/common/Text';
import { useThemeState } from '../theme/ThemeContext';
import BackToHome from '../components/common/BackToHome';
import Layout, { siteConfig } from '../components/Layout';
import Button from '../components/common/Button';

export default function ThankYou(): JSX.Element {
  const theme = useThemeState();

  return (
    <Layout
      title={`Thank You | ${siteConfig.name}`}
      additionalStyles={`pt-12 min-h-screen bg-gradient-to-b from-${theme}-100 to-${theme}-300`}
    >
      <section className="min-h-[80vh] max-w-4xl px-8 sm:px-8 md:px-8 lg:px-8 mx-auto text-lg leading-normal pt-16">
        <Text size="4xl" as="h1" color={`text-${theme}-900`} additionalStyles="text-4xl pb-8 text-center">
          Thank you for subscribing to Scriptified!
        </Text>
        <Text color={`text-${theme}-800`} additionalStyles="pb-8 text-center">
          Your subscription is confirmed. You will start receiving our weekly issues now onwards.
        </Text>
        <div className="flex items-center justify-center">
          <Link href="/issues" passHref legacyBehavior>
            <Button size="md" type="secondary" additionalStyles="mt-4">
              Read Previous Issues
            </Button>
          </Link>
        </div>
        <BackToHome className="my-12 max-w-4xl px-8 sm:px-8 md:px-16 lg:px-32 mx-auto flex items-center justify-center" />
      </section>
    </Layout>
  );
}
