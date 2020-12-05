import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Trianglify from 'trianglify';
import { colors } from 'tailwindcss/defaultTheme';

import Layout, { siteTitle } from '../components/Layout';
import { getAllIssuesMeta } from '../lib/issues';
import { useThemeState } from '../theme/ThemeContext';
import FeatureSection from '../components/FeatureSection';
import Meta from '../interfaces/meta';
import LatestIssues from '../components/LatestIssues';
import Curators from '../components/Curators';
import HeroSection from '../components/HeroSection';

export default function Home({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element {
  const theme = useThemeState();

  useEffect(() => {
    const section = document.getElementById('section');
    if (section) {
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
    }
    return () => {
      // Remove canvas if already present
      const section = document.getElementById('section');
      if (section) {
        Array.from(section.children).forEach(element => {
          if (element.nodeName === 'CANVAS') {
            element.parentNode.removeChild(element);
          }
        });
      }
    };
  }, [theme]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        id="section"
        className={`text-lg flex flex-col items-center leading-normal bg-${theme}-500 pb-4 px-4 relative`}
      >
        <HeroSection />
      </section>
      <section className={`mx-auto px-8 sm:px-16 md:px-40 lg:px-64 text-lg leading-normal py-16 bg-${theme}-100`}>
        <LatestIssues allIssuesData={allIssuesData} />
      </section>
      <section className={`bg-${theme}-400`}>
        <FeatureSection />
      </section>
      <section className={`bg-${theme}-100`}>
        <Curators />
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
