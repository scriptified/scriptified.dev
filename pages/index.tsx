import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Trianglify from 'trianglify';
import { colors } from 'tailwindcss/defaultTheme';

import SubscribeCard from '../components/common/SubscribeCard';
import Layout, { siteTitle } from '../components/Layout';
import Text from '../components/common/Text';
import { getAllIssuesMeta } from '../lib/issues';
import { useThemeState } from '../theme/ThemeContext';
import FeatureSection from '../components/FeatureSection';
import Meta from '../interfaces/meta';
import LatestIssues from '../components/LatestIssues';
import Curators from '../components/Curators';

// ============= Types & Interfaces ================

export type TCurators = {
  name: string;
  desc: string;
  imgURL: string;
  links: Record<string, string>;
};

// ============= Constants & Helper Functions ================

const CURATORS = [
  {
    name: 'Ayush Gupta',
    desc: 'React Native Developer at FirstCry. Mobile and Web App Developer, Amateur Photographer and Blogger.',
    imgURL: 'https://github.com/gupta-ji6.png',
    links: {
      website: 'https://ayushgupta.tech',
      twitter: 'https://twitter.com/_guptaji_',
      github: 'https://github.com/gupta-ji6',
      linkedin: 'https://www.linkedin.com/in/guptaji6/',
    },
  },
  {
    name: 'Prateek Surana',
    desc: `Building Devfolioco && Fold Bank | Frontend engineer | Technical Writer | Loves JS`,
    imgURL: 'https://github.com/prateek3255.png',
    links: {
      website: 'https://prateeksurana.me/',
      twitter: 'https://twitter.com/psuranas',
      github: 'https://github.com/prateek3255',
      linkedin: 'https://www.linkedin.com/in/psuranas/',
    },
  },
];

// reference - https://javascript.info/task/shuffle
function shuffle(array): TCurators[] {
  const shuffledArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// ============= Component ================

export default function Home({
  allIssuesData,
  curators,
}: {
  allIssuesData: Meta[];
  curators: TCurators[];
}): JSX.Element {
  const theme = useThemeState();

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
        className={`text-lg flex flex-col items-center leading-normal bg-${theme}-500 pb-4 px-4 relative`}
      >
        <Tilt
          tiltReverse
          transitionEasing="cubic-bezier(.03,.98,.52,.99)"
          className="flex flex-col items-center justify-center mt-6 relative z-10"
        >
          {/* <div className="w-1/3"> */}
          <img
            src="/images/scriptified-logo-green.gif"
            width="w-1/4"
            height="h-1/4"
            className="w-1/4"
            alt="logo"
            loading="lazy"
          />
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
        <LatestIssues allIssuesData={allIssuesData} />
      </section>
      <section className={`bg-${theme}-400`}>
        <FeatureSection />
      </section>
      <section className={`bg-${theme}-100`}>
        <Curators curators={curators} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const curators: TCurators[] = shuffle(CURATORS);

  return {
    props: {
      allIssuesData: getAllIssuesMeta(),
      curators: curators,
    },
  };
};
