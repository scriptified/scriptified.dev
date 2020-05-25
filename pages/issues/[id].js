import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllIssueIds, getIssueData } from "../../lib/issues";
import utilStyles from "../../styles/utils.module.css";

export default function Issue({ issueData }) {
  return (
    <Layout>
      <Head>
        <title>{issueData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{issueData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={issueData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: issueData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllIssueIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const issueData = await getIssueData(params.id);
  return {
    props: {
      issueData,
    },
  };
}
