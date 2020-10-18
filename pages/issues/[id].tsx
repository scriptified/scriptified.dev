import { GetStaticPaths, GetStaticProps } from 'next';
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
import TipIcon from '../../components/icons/tip';
import ArticlesIcon from '../../components/icons/articles';
import ToolsAndResourcesIcon from '../../components/icons/toolsAndResources';
import DevOfTheWeekIcon from '../../components/icons/devOfTheWeek';
import TechTalksIcon from '../../components/icons/techTalks';
import QuizIcon from '../../components/icons/quiz';
import GifIcon from '../../components/icons/gif';

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
            <TipIcon color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
          <Text type="base" additionalStyles="my-2 relative z-10">
            {issueData.tipOfTheWeek.desc}
          </Text>
          <CodeSnippet snippet={issueData.tipOfTheWeek.snippet} />
        </IssueItem>
        <IssueItem title="Articles">
          <div className="absolute h-24 w-24 tip-image-position">
            <ArticlesIcon color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
          {issueData.articles.map(article => (
            <ArticleItem article={article} key={article.url} />
          ))}
        </IssueItem>
        <IssueItem title="Tools">
          <div className="absolute h-24 w-24 tip-image-position">
            <ToolsAndResourcesIcon color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
          {issueData.tools.map(tool => (
            <ToolItem tool={tool} key={tool.url} />
          ))}
        </IssueItem>
        <IssueItem title="Dev Of The Week">
          <div className="absolute h-24 w-24 tip-image-position">
            <DevOfTheWeekIcon color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
          <DevOfTheWeekItem devOfTheWeek={issueData.devOfTheWeek} />
        </IssueItem>
        <IssueItem title="Tech talks">
          <div className="absolute h-24 w-24 tip-image-position">
            <TechTalksIcon color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
          {issueData.talks.map(talk => (
            <TechTalk key={talk.talkURL} techTalk={talk} />
          ))}
        </IssueItem>
        <IssueItem title="Quiz">
          <div className="absolute h-24 w-24 tip-image-position">
            <QuizIcon color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
          <Quiz quiz={issueData.quiz} />
        </IssueItem>
        <IssueItem title="This Week in GIF">
          <div className="absolute h-24 w-24 tip-image-position">
            <GifIcon color={`text-${theme}-300`} additionalStyles="h-24 w-24" />
          </div>
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
