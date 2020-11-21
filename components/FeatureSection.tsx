import React from 'react';

import { useThemeState } from '../theme/ThemeContext';
import Text from '../components/common/Text';
import Tip from '../public/images/tip.svg';
import ToolsAndResources from '../public/images/toolsAndResources.svg';
import DevOfTheWeek from '../public/images/devOfTheWeek.svg';
import TechTalks from '../public/images/techTalks.svg';
import Quiz from '../public/images/quiz.svg';
import Gif from '../public/images/gif.svg';
import Articles from '../public/images/articles.svg';

const featureData = [
  {
    name: 'Tip of the Day',
    icon: <Tip />,
    desc: 'Useful programming hot tips and tricks to make your dreadful lives easier',
  },
  {
    name: 'Articles',
    icon: <Articles />,
    desc: 'Insightful articles and tutorials around JavaScript and React world',
  },
  {
    name: 'Tools',
    icon: <ToolsAndResources />,
    desc: 'Helpful tools, resources and websites we can use to design and develop better user experiences',
  },
  {
    name: 'Dev of the Week',
    icon: <DevOfTheWeek />,
    desc: 'Featured developer of the week whose work is inspirational',
  },
  {
    name: 'Tech Talks',
    icon: <TechTalks />,
    desc: 'Interesting tech talks from conferences revolving around developement',
  },
  {
    name: 'Quiz',
    icon: <Quiz />,
    desc: 'Challenging programming quizzes to test your sharp programming minds',
  },
  {
    name: 'This Week in GIF',
    icon: <Gif />,
    desc: 'Moody GIFs to share with your co-workers on watercooler slack channels',
  },
];

const FeatureSection = (): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="py-12">
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-16 md:px-40 lg:px-64">
        <div className="lg:text-center">
          <Text
            additionalStyles="mt-2 text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl md:text-5xl sm:leading-10"
            color="text-white"
            type="h1"
          >
            Sections
          </Text>

          <Text additionalStyles="mt-4 max-w-2xl text-xl leading-7 lg:mx-auto" color={`text-${theme}-100`} type="base">
            A look at what&apos;s inside our newsletter
          </Text>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {featureData.map(feature => {
              return (
                <li key={feature.name} className="py-4 mr-4 lg:mr-8 mb-4 flex justify-center">
                  <div className="flex">
                    <div
                      className={`flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-md text-${theme}-100 bg-gradient-to-br from-${theme}-500 to-${theme}-700 transition hover:animate-bounce-in`}
                    >
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <Text type="h2" color="text-white" additionalStyles="text-lg leading-6 font-semibold">
                        {feature.name}
                      </Text>
                      <Text color={`text-${theme}-100`} additionalStyles="mt-1 text-base leading-6 max-w-sm">
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
