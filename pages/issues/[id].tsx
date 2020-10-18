import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';

import ArticleItem from '../../components/ArticleItem';
import CodeSnippet from '../../components/common/CodeSnippet';
import DevOfTheWeekItem from '../../components/DevOfTheWeekItem';
import GIFItem from '../../components/GIFItem';
import { Issue } from '../../interfaces/issue';
import IssueItem from '../../components/IssueItem';
import Layout from '../../components/layout';
import Quiz from '../../components/Quiz';
import SubscribeCard from '../../components/common/SubscribeCard';
import TechTalk from '../../components/TechTalk';
import Text from '../../components/common/Text';
import ToolItem from '../../components/ToolItem';
import { getAllIssueIds } from '../../lib/issues';
import issues from '../../issues/issues';
import { useThemeState } from '../../theme/ThemeContext';
import Tip from '../../components/icons/tip';

export default function IssueComponent({ issueData }: { issueData: Issue }): JSX.Element {
  const theme = useThemeState();

  return (
    <Layout additionalStyles="mt-12">
      <Head>
        <title>{issueData.meta.title}</title>
      </Head>
      <section className="max-w-4xl px-4 mx-auto">
        <IssueItem title="Tip of the day">
          <div className="absolute h-24 w-24 tip-image-position">
            <Tip color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
          <Text type="base" additionalStyles="my-2 relative z-10">
            {issueData.tipOfTheWeek.desc}
          </Text>
          <CodeSnippet snippet={issueData.tipOfTheWeek.snippet} />
        </IssueItem>
        <IssueItem title="Articles">
          {/* <div className="hollow-square-container">
        
          </div> */}
          {issueData.articles.map(article => (
            <ArticleItem article={article} key={article.url} />
          ))}
        </IssueItem>
        <IssueItem title="Tools">
          {/* <div className="circle-container">
          
          </div> */}
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
      </section>
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
