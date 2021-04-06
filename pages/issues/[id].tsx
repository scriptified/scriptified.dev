import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import ArticleItem from '../../components/ArticleItem';
import CodeSnippet from '../../components/common/CodeSnippet';
import DevOfTheWeekItem from '../../components/DevOfTheWeekItem';
import GIFItem from '../../components/GIFItem';
import { Issue } from '../../interfaces/issue';
import IssueItem from '../../components/IssueItem';
import Layout, { siteConfig } from '../../components/Layout';
import Quiz from '../../components/Quiz';
import SubscribeCard from '../../components/common/SubscribeCard';
import TechTalk from '../../components/TechTalk';
import Text from '../../components/common/Text';
import ToolItem from '../../components/ToolItem';
import { getAllIssueIds } from '../../lib/issues';
import issues from '../../issues/issues';
import BackToHome from '../../components/common/BackToHome';
import Markdown from '../../components/Markdown';
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
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

export default function IssueComponent({ issueData }: { issueData: Issue }): JSX.Element {
  const theme = useThemeState();
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady && router.query.section && typeof router.query.section === 'string') {
      document.getElementById(router.query.section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router.isReady]);
  return (
    <Layout
      title={`#${issueData.meta.number} | ${issueData.meta.title} | ${siteConfig.name}`}
      description={issueData.meta.desc}
      image={issueData.meta.imgURL}
      additionalStyles={`pt-12 bg-gradient-to-b from-${theme}-300 to-${theme}-500`}
    >
      <section
        className={`max-w-5xl px-4 sm:px-4 lg:px-16 py-8 mx-auto mb-0 lg:mb-8 bg-white sm:rounded-none md:rounded-lg shadow-md`}
      >
        <div className="flex flex-col justify-center items-center">
          <Text
            type="h1"
            additionalStyles={`sm:text-4xl md:text-5.5xl text-center font-bold bg-gradient-to-r from-${theme}-700 to-${theme}-900 bg-clip-text`}
            // color={`text-${theme}-900`}
            color="text-transparent"
          >{`#${issueData.meta.number} - ${issueData.meta.title}`}</Text>
          <Text color={`text-${theme}-600`} additionalStyles="pt-4 text-xl">
            <time>{convertDate(issueData.meta.dateOfPublishing)}</time>
          </Text>
        </div>
        <IssueItem id="tip" title="Tip of the day" icon={<TipIcon />}>
          <Text type="base" additionalStyles="py-4 relative z-10">
            <Markdown>{issueData.tipOfTheWeek.desc}</Markdown>
          </Text>
          <CodeSnippet snippet={issueData.tipOfTheWeek.snippet} />
        </IssueItem>
        <IssueItem id="articles" title="Articles" icon={<ArticlesIcon />}>
          {issueData.articles.map(article => (
            <ArticleItem article={article} key={article.url} />
          ))}
        </IssueItem>
        <IssueItem id="tools" title="Tools" icon={<ToolsAndResourcesIcon />}>
          {issueData.tools.map(tool => (
            <ToolItem tool={tool} key={tool.url} />
          ))}
        </IssueItem>
        <IssueItem id="dev" title="Dev Of The Week" icon={<DevOfTheWeekIcon />}>
          <DevOfTheWeekItem devOfTheWeek={issueData.devOfTheWeek} />
        </IssueItem>
        <IssueItem id="talk" title="Tech talks" icon={<TechTalksIcon />}>
          {issueData.talks.map(talk => (
            <TechTalk key={talk.talkURL} techTalk={talk} />
          ))}
        </IssueItem>
        <IssueItem id="quiz" title="Quiz" icon={<QuizIcon />}>
          <Quiz quiz={issueData.quiz} />
        </IssueItem>
        <IssueItem id="gif" title="This Week in GIF" icon={<GifIcon />}>
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
