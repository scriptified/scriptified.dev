import React from 'react';
import { useThemeState } from '../theme/ThemeContext';
import Text from '../components/common/Text';
import Tip from './icons/tip';
import ToolsAndResources from './icons/toolsAndResources';
import DevOfTheWeek from './icons/devOfTheWeek';
import TechTalks from './icons/techTalks';
import Quiz from './icons/quiz';
import Articles from './icons/articles';
import Gif from './icons/gif';

const featureData = [
  {
    name: 'Tip of the Day',
    icon: <Tip color="#fff" />,
    desc: 'Useful programming hot tips and tricks to make your dreadful lives easier',
  },
  {
    name: 'Articles',
    icon: <Articles color="#fff" />,
    desc: 'Insightful articles and tutorials around JavaScript and React world',
  },
  {
    name: 'Tools',
    icon: <ToolsAndResources color="#fff" />,
    desc: 'Helpful tools, resources and websites we can use to design and develop better user experiences',
  },
  {
    name: 'Dev of the Week',
    icon: <DevOfTheWeek color="#fff" />,
    desc: 'Featured developer of the week whose work is inspirational',
  },
  {
    name: 'Tech Talks',
    icon: <TechTalks color="#fff" />,
    desc: 'Interesting tech talks from conferences revolving around developement',
  },
  {
    name: 'Quiz',
    icon: <Quiz color="#fff" />,
    desc: 'Challenging programming quizzes to test your sharp programming minds',
  },
  {
    name: 'This Week in GIF',
    icon: <Gif color="#fff" />,
    desc: 'Moody GIFs to share with your co-workers on watercooler slack channels',
  },
];

const FeatureSection = () => {
  const theme = useThemeState();
  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Text
            additionalStyles="mt-2 text-3xl leading-8 font-extrabold tracking-tight tracking-wide sm:text-4xl sm:leading-10"
            color="text-white"
            type="h3"
          >
            Sections
          </Text>

          <Text additionalStyles="mt-4 max-w-2xl text-xl leading-7 lg:mx-auto" color="text-gray-200" type="base">
            A look at what&apos;s inside our newsletter
          </Text>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {featureData.map(feature => {
              return (
                <li key={feature.name} className="p-2">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div
                        className={`flex items-center justify-center h-16 w-16 rounded-md bg-${theme}-700 text-${theme}-100`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <Text color="text-white" additionalStyles="text-lg leading-6 font-semibold">
                        {feature.name}
                      </Text>
                      <Text color={`text-${theme}-100`} additionalStyles="mt-2 text-base leading-6">
                        {feature.desc}
                      </Text>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
