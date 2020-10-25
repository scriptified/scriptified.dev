import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Tilt from 'react-parallax-tilt';
import Trianglify from 'trianglify';
import { colors } from 'tailwindcss/defaultTheme';

import SubscribeCard from '../components/common/SubscribeCard';
import Layout, { siteTitle } from '../components/layout';
import Text from '../components/common/Text';
import { getAllIssuesMeta } from '../lib/issues';
import { useThemeState } from '../theme/ThemeContext';
import Button from '../components/common/Button';
import { useRouter } from 'next/router';
import FeatureSection from '../components/FeatureSection';
import IssueListItem from '../components/common/IssueListItem';
import Meta from '../interfaces/meta';

export default function Home({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element {
  const reversedIssuesData = allIssuesData.slice(0, 3).reverse();
  const theme = useThemeState();
  const router = useRouter();

  useEffect(() => {
    const section = document.getElementById('section');
    const dimensions = section.getClientRects()[0];
    const pattern = Trianglify({
      width: dimensions.width,
      height: dimensions.height,
      cellSize: 55,
      xColors: Object.values(colors[theme]),
      variance: 0.6,
      colorFunction: Trianglify.colorFunctions.interpolateLinear(0.75),
    });
    const canvas = pattern.toCanvas();
    section.appendChild(canvas);
    canvas.style.position = 'absolute';
    return () => {
      // Remove canvas if already present
      const section = document.getElementById('section');
      Array.from(section.children).forEach(element => {
        if (element.nodeName === 'CANVAS') {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [theme]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        id="section"
        className={`text-lg flex flex-col items-center leading-normal bg-${theme}-500 min-h-screen pb-4 px-4 relative`}
      >
        <Tilt
          tiltReverse
          transitionEasing="cubic-bezier(.03,.98,.52,.99)"
          className="flex flex-col items-center justify-center mt-6 relative z-10"
        >
          {/* <div className="w-1/3"> */}
          <img src="/images/scriptified-logo-green.gif" className="w-1/4" />
          {/* </div> */}
          <Text type="h1" color="text-gray-100" additionalStyles="text-6xl">
            Scriptified
          </Text>
          <Text type="h1" color="text-gray-200" additionalStyles="mb-16 sm:mb-12 lg:mb-16 text-center">
            Your Goto JavaScript Newsletter
          </Text>
        </Tilt>
        <div className="w-5/6 sm:mx-8 lg:w-2/4 mb-2 relative z-10">
          <SubscribeCard homePage />
        </div>
      </section>
      <section className={`mx-auto px-8 sm:px-16 md:px-40 lg:px-64 text-lg leading-normal py-16 bg-${theme}-100`}>
        <Text type="h1" color={`text-${theme}-900`} additionalStyles="text-2xl leading-snug my-8 mx-0">
          Latest Issues
        </Text>
        <ul className="m-0 p-0 list-none">
          {reversedIssuesData.map((data, index) => (
            <IssueListItem issueData={data} key={index} />
          ))}
        </ul>
        <Button size="md" type="secondary" onClick={() => router.push('/issues')} additionalStyles="mt-4">
          View All Issues
        </Button>
      </section>
      <section className={`bg-${theme}-400`}>
        <FeatureSection />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allIssuesData: getAllIssuesMeta(),
    },
  };
};
