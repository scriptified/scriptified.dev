import { GetStaticPaths, GetStaticProps } from 'next';

import ArticleItem from '../../components/ArticleItem';
import Button from '../../components/common/Button';
import CodeSnippet from '../../components/common/CodeSnippet';
import DevOfTheWeekItem from '../../components/DevOfTheWeekItem';
import GIFItem from '../../components/GIFItem';
import Head from 'next/head';
import { Issue } from '../../interfaces/issue';
import IssueItem from '../../components/IssueItem';
import Layout from '../../components/layout';
import Quiz from '../../components/Quiz';
import SubscribeCard from '../../components/common/SubscribeCard';
import Text from '../../components/common/Text';
import ToolItem from '../../components/ToolItem';
import { getAllIssueIds } from '../../lib/issues';
import issues from '../../issues/issues';
import TechTalk from '../../components/TechTalk';

// import utilStyles from "../../styles/utils.module.css";

// SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function IssueComponent({ issueData }: { issueData: Issue }): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{issueData.meta.title}</title>
      </Head>
      <IssueItem title="Tip of the day">
        <Text type="base" additionalStyles="my-2">
          {issueData.tipOfTheWeek.desc}
        </Text>
        <CodeSnippet snippet={issueData.tipOfTheWeek.snippet} />
      </IssueItem>
      <IssueItem title="Articles">
        {issueData.articles.map(article => (
          <ArticleItem article={article} key={article.url} />
        ))}
      </IssueItem>
      <IssueItem title="Tools">
        {issueData.tools.map(tool => (
          <ToolItem tool={tool} key={tool.url} />
        ))}
      </IssueItem>
      <IssueItem title="Dev Of The Week">
        <DevOfTheWeekItem devOfTheWeek={issueData.devOfTheWeek} />
      </IssueItem>
      <IssueItem title="Tech talks">
        {issueData.talks.map(talk => (
          <TechTalk key={talk.talkURL} techTalk={talk} />
        ))}
      </IssueItem>
      <IssueItem title="Quiz">
        <Quiz quiz={issueData.quiz} />
      </IssueItem>
      <IssueItem title="This Week in GIF">
        <GIFItem gif={issueData.gif} />
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
  const issueData: Issue = issues[index] as Issue;
  return {
    props: {
      issueData,
    },
  };
};
