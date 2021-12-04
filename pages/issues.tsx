import { GetStaticProps } from 'next';

import Text from '../components/common/Text';
import { useThemeState } from '../theme/ThemeContext';
import SubscribeCard from '../components/common/SubscribeCard';
import IssueListItem from '../components/common/IssueListItem';
import Meta from '../interfaces/meta';
import BackToHome from '../components/common/BackToHome';
import Layout, { siteConfig } from '../components/Layout';
import { getAllIssuesMeta, issueAPI } from '../lib/issues';

// import utilStyles from "../styles/utils.module.css";

export default function Issues({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element {
  const theme = useThemeState();

  return (
    <Layout
      title={`${siteConfig.name} | All Issues`}
      additionalStyles={`pt-12 min-h-screen bg-gradient-to-b from-${theme}-100 to-${theme}-300`}
    >
      <section className="max-w-4xl px-8 sm:px-8 md:px-16 lg:px-24 mx-auto text-lg leading-normal pt-16">
        <Text as="h1" size="6xl" color={`text-${theme}-900`} additionalStyles="text-5xl pb-8">
          Issues
        </Text>
        <ul className="m-0 p-0 list-none">
          {allIssuesData.map(data => (
            <li key={data.number}>
              <IssueListItem issueData={data} key={data.number} />
            </li>
          ))}
        </ul>
      </section>
      <div className="max-w-4xl px-8 sm:px-8 md:px-16 lg:px-32 mx-auto pt-16">
        <SubscribeCard />
      </div>
      <BackToHome className="my-12 max-w-4xl px-8 sm:px-8 md:px-16 lg:px-32 mx-auto" />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await issueAPI.allIssuesReversed();
  return {
    props: {
      allIssuesData: getAllIssuesMeta(data),
    },
    revalidate: 180,
  };
};
