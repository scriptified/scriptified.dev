import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout';
import issues, { Issue } from '../../issues/issues';
import { getAllIssueIds } from '../../lib/issues';
// import utilStyles from "../../styles/utils.module.css";

export default function IssueComponent({ issueData }: { issueData: Issue }) {
  return (
    <Layout>
      <Head>
        <title>{issueData.meta.title}</title>
      </Head>
      {issueData.articles.map(({ title, url, author, desc }) => (
        <div className="mt-0 mx-0 mb-5" key={url}>
          <a href={url}>
            <a className="text-green-600 font-sans font-semibold text-2xl no-underline hover:underline">{title}</a>
          </a>
          <br />
          <p>{desc}</p>
          <small className="text-gray-600">{author}</small>
        </div>
      ))}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIssueIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const index: number = ((params.id as unknown) as number) - 1;
  const issueData: Issue = issues[index];
  return {
    props: {
      issueData,
    },
  };
};
