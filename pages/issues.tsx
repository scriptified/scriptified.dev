import { GetStaticProps } from 'next';

import Text from '../components/common/Text';
import { getAllIssuesMeta } from '../lib/issues';
import { useThemeState } from '../theme/ThemeContext';
import SubscribeCard from '../components/common/SubscribeCard';
import IssueListItem from '../components/common/IssueListItem';
import Meta from '../interfaces/meta';
import BackToHome from '../components/common/BackToHome';
import Layout, { siteConfig } from '../components/Layout';

// import utilStyles from "../styles/utils.module.css";

export default function Issues({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element {
  const reversedIssuesData = allIssuesData.slice().reverse();
  const theme = useThemeState();

  return (
    <Layout
      title={`${siteConfig.name} | All Issues`}
      additionalStyles={`pt-12 min-h-screen bg-gradient-to-b from-${theme}-100 to-${theme}-300`}
    >
      <section className="max-w-4xl px-8 sm:px-8 md:px-16 lg:px-32 mx-auto text-lg leading-normal mt-16">
        <Text type="h1" color={`text-${theme}-900`} additionalStyles="text-5xl mb-8">
          Issues
        </Text>
        <ul className="m-0 p-0 list-none">
          {reversedIssuesData.map(data => (
            <li key={data.number}>
              <IssueListItem issueData={data} key={data.number} />
            </li>
          ))}
        </ul>
      </section>
      <div className="max-w-4xl px-8 sm:px-8 md:px-16 lg:px-32 mx-auto mt-16">
        <SubscribeCard />
      </div>
      <BackToHome className="my-12 max-w-4xl px-8 sm:px-8 md:px-16 lg:px-32 mx-auto" />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allIssuesData: getAllIssuesMeta(),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
