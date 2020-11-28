import React from 'react';
import Head from 'next/head';
import { useThemeState } from '../theme/ThemeContext';
import SocialLinks from './common/SocialLinks';
import Text from './common/Text';

function shuffle(array: any[]): any[] {
  const shuffledArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

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

type TCurator = {
  name: string;
  desc: string;
  imgURL: string;
  links: Record<string, string>;
};

function Curators(): JSX.Element {
  const theme = useThemeState();
  const curators: TCurator[] = React.useMemo(() => {
    console.log(typeof window === 'undefined' ? 'server aya' : 'client aya');
    if (typeof window === 'undefined') {
      return shuffle(CURATORS);
    }
    return (window as any).__curators;
  }, []);
  const stringifiedCurators = React.useMemo(() => {
    return JSON.stringify(curators);
  }, [curators]);

  return (
    <div className="p-12">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `window.__curators=${stringifiedCurators}` }}></script>
      </Head>
      <div className="lg:text-center pb-12">
        <Text
          additionalStyles="mt-2 text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl md:text-5xl sm:leading-10"
          color={`text-${theme}-900`}
          type="h1"
        >
          Curators
        </Text>
        <Text additionalStyles="mt-4 max-w-2xl text-xl leading-7 lg:mx-auto" color={`text-${theme}-600`} type="base">
          The two nerdy devs who curate this newsletter for you
        </Text>
      </div>
      <div className="flex justify-evenly items-center flex-col flex-wrap">
        <div className="grid px-0 lg:px-12">
          {curators.map((curator, index) => {
            return (
              <div className="flex sm:flex-col md:flex-row flex-wrap mb-8" key={index}>
                <div
                  className={`flex-shrink-1 mr-4 mb-4 p-1 bg-gradient-to-br from-${theme}-300 to-${theme}-700 rounded transition duration-300`}
                >
                  <div className={`bg-${theme}-100 p-1 rounded`}>
                    <a href={curator.links.website} target="_blank" rel="noreferrer">
                      <img
                        src={curator.imgURL}
                        loading="lazy"
                        className={`w-48 h-48 bg-gradient-to-br from-${theme}-300 to-${theme}-500 rounded shadow-2xl transform transition duration-700 hover:scale-105 hover:shadow-lg`}
                        width="w-48"
                        height="h-48"
                        alt={curator.name}
                      />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <a
                    href={curator.links.website}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-${theme}-800 hover:underline`}
                  >
                    <Text
                      type="h1"
                      color="text-transparent"
                      additionalStyles={`bg-gradient-to-b from-${theme}-600 to-${theme}-800 bg-clip-text`}
                      inline
                    >
                      {curator.name}
                    </Text>
                  </a>
                  <Text type="base" color={`text-${theme}-700`} inline additionalStyles="py-4">
                    {curator.desc}
                  </Text>
                  <SocialLinks links={curator.links} additionalStyles="space-x-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Curators;
