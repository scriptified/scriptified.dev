import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

import SubscribeCard from '../components/common/SubscribeCard';
import Layout, { siteTitle } from '../components/layout';
import Text from '../components/common/Text';
import { getAllIssuesMeta } from '../lib/issues';
import { useThemeState } from '../theme/ThemeContext';

export default function Home({
  allIssuesData,
}: {
  allIssuesData: {
    desc: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  const reversedIssuesData = allIssuesData.slice(0, 3).reverse();
  const theme = useThemeState();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`text-lg flex flex-col items-center leading-normal bg-${theme}-500 h-screen`}>
        <Tilt
          tiltReverse
          transitionEasing="cubic-bezier(.03,.98,.52,.99)"
          className="flex flex-col items-center justify-center mt-20 sm:mt-6"
        >
          {/* <div className="w-1/3"> */}
          <img src="/images/scriptified-logo-green.gif" className="w-1/4" />
          {/* </div> */}
          <Text type="h1" color="text-gray-100" additionalStyles="text-6xl">
            Scriptified
          </Text>
          <Text type="h1" color="text-gray-200" additionalStyles="mb-12 lg:mb-16 text-center">
            Your Goto JavaScript Newsletter
          </Text>
        </Tilt>
        <div className="sm:mx-8 lg:w-2/4">
          <SubscribeCard homePage />
        </div>
      </section>
      <section className="sm:px-16 md:px-64 lg:px-64 text-lg leading-normal mt-16">
        <h2 className="text-2xl leading-snug my-4 mx-0">Latest Issues</h2>
        <ul className="m-0 p-0 list-none">
          {reversedIssuesData.map(({ id, desc, title }) => (
            <li className="mt-0 mx-0 mb-5" key={id}>
              <Link href="/issues/[id]" as={`/issues/${id}`}>
                <a className={`text-${theme}-600 font-sans font-semibold text-2xl no-underline hover:underline`}>
                  {title}
                </a>
              </Link>
              <br />
              <p>{desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allIssuesData: getAllIssuesMeta(),
    },
  };
};
