import React from 'react';
import { useThemeState } from '../theme/ThemeContext';
import SocialLinks from './common/SocialLinks';
import Text from './common/Text';

const CURATORS = [
  {
    name: 'Ayush Gupta',
    desc: 'description',
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
    desc: 'description',
    imgURL: 'https://github.com/prateek3255.png',
    links: {
      website: 'https://prateeksurana.me/',
      twitter: 'https://twitter.com/psuranas',
      github: 'https://github.com/prateek3255',
      linkedin: 'https://www.linkedin.com/in/psuranas/',
    },
  },
];

const Curators = (): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="p-12">
      <div className="lg:text-center pb-12">
        <Text
          additionalStyles="mt-2 text-3xl leading-8 font-extrabold tracking-tight tracking-wide sm:text-4xl md:text-5xl sm:leading-10"
          color={`text-${theme}-900`}
          type="h1"
        >
          Curators
        </Text>
        <Text additionalStyles="mt-4 max-w-2xl text-xl leading-7 lg:mx-auto" color={`text-${theme}-600`} type="base">
          A look at what&apos;s inside our newsletter
        </Text>
      </div>
      <div className="flex justify-evenly sm:flex-col md:flex-row flex-wrap space-y-8 sm:space-y-8 sm:space-x-8 md:space-y-0">
        {CURATORS.map((curator, index) => {
          return (
            <div className="flex sm:flex-col md:flex-row flex-wrap" key={index}>
              <div
                className={`relative mr-4 mb-4 p-1 bg-gradient-to-br from-${theme}-300 to-${theme}-700 rounded transition duration-300`}
              >
                <div className={`bg-${theme}-100 p-1 rounded`}>
                  <img
                    src={curator.imgURL}
                    loading="lazy"
                    className={`w-48 h-48 bg-gradient-to-br from-${theme}-300 to-${theme}-500 rounded shadow-2xl transform transition duration-700 hover:scale-105 hover:shadow-lg`}
                    alt={curator.name}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <a href={curator.links.website} target="_blank" rel="noreferrer">
                  <Text
                    type="h1"
                    color="text-transparent"
                    additionalStyles={`bg-gradient-to-b from-${theme}-600 to-${theme}-800 bg-clip-text hover:underline`}
                  >
                    {curator.name}
                  </Text>
                </a>
                <Text color={`text-${theme}-700`} additionalStyles="py-4">
                  {curator.desc}
                </Text>
                <SocialLinks links={curator.links} additionalStyles="space-x-3" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curators;
