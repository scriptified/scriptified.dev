import Layout, { siteTitle } from '../components/layout';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Text from '../components/common/Text';
import { getAllIssuesMeta } from '../lib/issues';
import { useThemeState } from '../theme/ThemeContext';

// import utilStyles from "../styles/utils.module.css";

export default function Issues({
  allIssuesData,
}: {
  allIssuesData: {
    desc: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  const reversedIssuesData = allIssuesData.slice().reverse();
  const theme = useThemeState();

  return (
    <Layout additionalStyles="max-w-4xl px-4 mt-12">
      <Head>
        <title>{siteTitle} - All Issues</title>
      </Head>
      <section className="text-lg leading-normal mt-16">
        <Text type="h1" color={`text-${theme}-5`} additionalStyles="mb-8">
          Issues
        </Text>
        {/* <h2 className="text-2xl leading-snug my-4 mx-0">Issues</h2> */}
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
