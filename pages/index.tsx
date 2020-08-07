import Head from 'next/head';
import Tilt from 'react-tilt';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getAllIssuesMeta } from '../lib/issues';
// import utilStyles from "../styles/utils.module.css";

export default function Home({
  allIssuesData,
}: {
  allIssuesData: {
    desc: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg leading-normal">
        <Tilt>
          <div className="flex justify-center w-full">
            <img src="/images/scriptified-logo.gif" />
          </div>
        </Tilt>
      </section>
      <section className="text-lg leading-normal pt-px mt-64">
        <h2 className="text-2xl leading-snug my-4 mx-0">Issues</h2>
        <ul className="m-0 p-0 list-none">
          {allIssuesData.map(({ id, desc, title }) => (
            <li className="mt-0 mx-0 mb-5" key={id}>
              <Link href="/issues/[id]" as={`/issues/${id}`}>
                <a className="text-green-600 font-sans font-semibold text-2xl no-underline hover:underline">{title}</a>
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
