import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import SubscribeCard from '../../components/common/SubscribeCard';
import BackToHome from '../../components/common/BackToHome';
import Text from '../../components/common/Text';
import SocialShare from '../../components/common/SocialShare';
import TipOfTheWeekItem from '../../components/TipOfTheWeekItem';
import ArticleItem from '../../components/ArticleItem';
import DevOfTheWeekItem from '../../components/DevOfTheWeekItem';
import GIFItem from '../../components/GIFItem';
import IssueItem from '../../components/IssueItem';
import Layout, { siteConfig } from '../../components/Layout';
import Quiz from '../../components/Quiz';
import TechTalk from '../../components/TechTalk';
import ToolItem from '../../components/ToolItem';
import { getAllIssueIds, issueAPI, mapToIssue } from '../../lib/issues';
import { Issue } from '../../interfaces/issue';
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
import { convertDate } from '../../utils';

export default function IssueComponent({ issueData }: { issueData: Issue }): JSX.Element {
  const theme = useThemeState();
  const router = useRouter();

  const url = `${siteConfig.url}${router.asPath}`;

  React.useEffect(() => {
    if (router.isReady && typeof router.query?.section === 'string') {
      document.getElementById(router.query.section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router.isReady, router.query.section]);

  if (router.isFallback) {
    return <></>;
  }

  return (
    <Layout
      title={`#${issueData.meta.number} | ${issueData.meta.title} | ${siteConfig.name}`}
      description={issueData.meta.desc}
      image={issueData.meta.imgURL}
      url={url}
      additionalStyles={`pt-12 bg-gradient-to-b from-${theme}-300 to-${theme}-500`}
    >
      <section
        // eslint-disable-next-line max-len
        className={`max-w-5xl px-4 sm:px-4 lg:px-16 py-8 mx-auto mb-0 lg:mb-8 bg-white sm:rounded-none md:rounded-lg shadow-md`}
      >
        <div className="flex flex-col justify-center items-center">
          <Text
            as="h2"
            size="2xl"
            // eslint-disable-next-line max-len
            additionalStyles={`sm:text-4xl md:text-5.5xl text-center font-bold bg-gradient-to-r from-${theme}-700 to-${theme}-900 bg-clip-text`}
            // color={`text-${theme}-900`}
            color="text-transparent"
          >{`#${issueData.meta.number} - ${issueData.meta.title}`}</Text>
          <Text color={`text-${theme}-600`} additionalStyles="pt-4 text-xl">
            <time>{convertDate(issueData.meta.dateOfPublishing)}</time>
          </Text>
          <SocialShare url={`${siteConfig.url}${router.asPath}`} title={issueData.meta.title} />
        </div>
        {issueData?.tipOfTheWeek !== null ? (
          <IssueItem id="tip" title="Tip of the day" icon={<TipIcon />}>
            <TipOfTheWeekItem tipOfTheWeek={issueData.tipOfTheWeek} />
          </IssueItem>
        ) : null}
        {issueData?.articles !== null ? (
          <IssueItem id="articles" title="Articles" icon={<ArticlesIcon />}>
            {issueData.articles.map(article => (
              <ArticleItem article={article} key={article.url} />
            ))}
          </IssueItem>
        ) : null}
        {issueData?.tools !== null ? (
          <IssueItem id="tools" title="Tools" icon={<ToolsAndResourcesIcon />}>
            {issueData.tools.map(tool => (
              <ToolItem tool={tool} key={tool.url} />
            ))}
          </IssueItem>
        ) : null}
        {issueData?.devOfTheWeek !== null ? (
          <IssueItem id="dev" title="Dev Of The Week" icon={<DevOfTheWeekIcon />}>
            <DevOfTheWeekItem devOfTheWeek={issueData.devOfTheWeek} />
          </IssueItem>
        ) : null}
        {issueData?.talks !== null ? (
          <IssueItem id="talk" title="Tech talks" icon={<TechTalksIcon />}>
            {issueData.talks.map(talk => (
              <TechTalk key={talk.talkURL} techTalk={talk} />
            ))}
          </IssueItem>
        ) : null}
        {issueData.quiz !== null ? (
          <IssueItem id="quiz" title="Quiz" icon={<QuizIcon />}>
            <Quiz quiz={issueData.quiz} />
          </IssueItem>
        ) : null}
        {issueData.gif !== null ? (
          <IssueItem id="gif" title="This Week in GIF" icon={<GifIcon />}>
            <GIFItem gif={issueData.gif} />
          </IssueItem>
        ) : null}
        <SubscribeCard />
        <BackToHome className="my-12 max-w-4xl mx-auto" />
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await issueAPI.allIssuesReversed();

  const paths = getAllIssueIds(data);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: number = (params.id as unknown) as number;
  try {
    const data = await issueAPI.getIssue(id);
    const issueData = mapToIssue(data);

    return {
      props: {
        issueData,
      },
      revalidate: 180,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
