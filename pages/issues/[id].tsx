import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import ArticleItem from '../../components/ArticleItem';
import CodeSnippet from '../../components/common/CodeSnippet';
import DevOfTheWeekItem from '../../components/DevOfTheWeekItem';
import GIFItem from '../../components/GIFItem';
import { Issue } from '../../interfaces/issue';
import IssueItem from '../../components/IssueItem';
import Layout, { siteTitle } from '../../components/Layout';
import Quiz from '../../components/Quiz';
import SubscribeCard from '../../components/common/SubscribeCard';
import TechTalk from '../../components/TechTalk';
import Text from '../../components/common/Text';
import ToolItem from '../../components/ToolItem';
import { getAllIssueIds } from '../../lib/issues';
import issues from '../../issues/issues';
import BackToHome from '../../components/common/BackToHome';
import {
  TipIcon,
  ArticlesIcon,
  ToolsAndResourcesIcon,
  DevOfTheWeekIcon,
  TechTalksIcon,
  QuizIcon,
  GifIcon,
} from '../../components/icons/icons';
import { useThemeState } from '../../theme/ThemeContext';

const convertDate = (date: string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

export default function IssueComponent({ issueData }: { issueData: Issue }): JSX.Element {
  const theme = useThemeState();
  return (
    <Layout additionalStyles={`pt-12 bg-gradient-to-b from-${theme}-300 to-${theme}-500`}>
      <Head>
        <title>{`#${issueData.meta.number} - ${issueData.meta.title} - ${siteTitle}`}</title>
      </Head>
      <section
        className={`max-w-5xl px-4 sm:px-4 lg:px-16 py-8 mx-auto mb-0 lg:mb-8 bg-white sm:rounded-none md:rounded-lg shadow-md`}
      >
        <div className="flex flex-col justify-center items-center">
          <Text
            type="h1"
            additionalStyles={`sm:text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-${theme}-700 to-${theme}-900 bg-clip-text`}
            // color={`text-${theme}-900`}
            color="text-transparent"
          >{`#${issueData.meta.number} - ${issueData.meta.title}`}</Text>
          <Text color={`text-${theme}-500`} additionalStyles="pt-4">
            {convertDate(issueData.meta.dateOfPublishing)}
          </Text>
        </div>
        <IssueItem title="Tip of the day" icon={<TipIcon />}>
          <Text type="base" additionalStyles="my-4 relative z-10">
            {issueData.tipOfTheWeek.desc}
          </Text>
          <CodeSnippet snippet={issueData.tipOfTheWeek.snippet} />
        </IssueItem>
        <IssueItem title="Articles" icon={<ArticlesIcon />}>
          {issueData.articles.map(article => (
            <ArticleItem article={article} key={article.url} />
          ))}
        </IssueItem>
        <IssueItem title="Tools" icon={<ToolsAndResourcesIcon />}>
          {issueData.tools.map(tool => (
            <ToolItem tool={tool} key={tool.url} />
          ))}
        </IssueItem>
        <IssueItem title="Dev Of The Week" icon={<DevOfTheWeekIcon />}>
          <DevOfTheWeekItem devOfTheWeek={issueData.devOfTheWeek} />
        </IssueItem>
        <IssueItem title="Tech talks" icon={<TechTalksIcon />}>
          {issueData.talks.map(talk => (
            <TechTalk key={talk.talkURL} techTalk={talk} />
          ))}
        </IssueItem>
        <IssueItem title="Quiz" icon={<QuizIcon />}>
          <Quiz quiz={issueData.quiz} />
        </IssueItem>
        <IssueItem title="This Week in GIF" icon={<GifIcon />}>
          <GIFItem gif={issueData.gif} />
        </IssueItem>
        <SubscribeCard />
        <BackToHome className="my-12 max-w-4xl mx-auto" />
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
