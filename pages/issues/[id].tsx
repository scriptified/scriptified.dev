import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout';
import { getAllIssueIds, getIssueData } from '../../lib/issues';
import Date from '../../components/date';
// import utilStyles from "../../styles/utils.module.css";

export default function Issue({
  issueData,
}: {
  issueData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{issueData.title}</title>
      </Head>
      <article>
        <h1 className="text-4xl leading-snug font-extrabold my-4 mx-0">{issueData.title}</h1>
        <div className="text-gray-600">
          <Date dateString={issueData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: issueData.contentHtml }} />
      </article>
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
  const issueData = await getIssueData(params.id as string);
  return {
    props: {
      issueData,
    },
  };
};
