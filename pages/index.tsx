import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { useThemeState } from '../theme/ThemeContext';
import FeatureSection from '../components/FeatureSection';
import Meta from '../interfaces/meta';
import LatestIssues from '../components/LatestIssues';
import Curators from '../components/Curators';
import HeroSection from '../components/HeroSection';
import { getAllIssuesMeta, issueAPI } from '../lib/issues';

// ============= Component ================

export default function Home({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element {
  const theme = useThemeState();

  return (
    <Layout home>
      <section
        id="section"
        className={`text-lg flex flex-col bg-${theme}-500 bg-hero items-center leading-normal pb-4 px-4 relative`}
      >
        <HeroSection />
      </section>
      <section className={`mx-auto px-8 sm:px-16 md:px-40 lg:px-64 text-lg leading-normal py-16 bg-${theme}-100`}>
        <LatestIssues allIssuesData={allIssuesData} />
      </section>
      <section className={`bg-${theme}-500 bg-texture`}>
        <FeatureSection />
      </section>
      <section className={`bg-${theme}-100`}>
        <Curators />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await issueAPI.limitedIssuesReversed();
  return {
    props: {
      allIssuesData: getAllIssuesMeta(data),
    },
    revalidate: 180,
  };
};
