import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout';
import { Issue } from '../../interfaces/issue';
import issues from '../../issues/issues';
import { getAllIssueIds } from '../../lib/issues';
import IssueItem from '../../components/IssueItem';
import ArticleItem from '../../components/ArticleItem';
import Button from '../../components/Button';
import Text from '../../components/Text';
import SubscribeCard from '../../components/SubscribeCard';
import CodeSnippet from '../../components/CodeSnippet';
// import utilStyles from "../../styles/utils.module.css";

// SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function IssueComponent({ issueData }: { issueData: Issue }) {
  return (
    <Layout>
      <Head>
        <title>{issueData.meta.title}</title>
      </Head>
      <IssueItem title="Tip of the day">
        <Text type="base" additionalStyles="my-2">
          {issueData.tipOfTheWeek.desc}
        </Text>
        <CodeSnippet language="jsx" code={issueData.tipOfTheWeek.snippet.trim()} />
      </IssueItem>
      <IssueItem title="Articles">
        {issueData.articles.map(article => (
          <ArticleItem article={article} key={article.url} />
        ))}
      </IssueItem>
      <SubscribeCard />
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
