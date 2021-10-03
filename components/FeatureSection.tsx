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
    desc: 'Hot programming tips and tricks to make your dreadful lives easier as a developer',
  },
  {
    name: 'Articles',
    icon: <Articles />,
    desc: 'Helpful articles and tutorials around JavaScript and React world',
  },
  {
    name: 'Tools',
    icon: <ToolsAndResources />,
    desc: 'Helpful tools, libraries and websites that can save your time and increase productivity while developing',
  },
  {
    name: 'Dev of the Week',
    icon: <DevOfTheWeek />,
    desc:
      'Shoutout to a developer following whom you can become a better developer & learn from their inspirational work',
  },
  {
    name: 'Tech Talks',
    icon: <TechTalks />,
    desc: 'Interesting tech talks from conferences revolving around JavaScript and React development',
  },
  {
    name: 'Quiz',
    icon: <Quiz />,
    desc:
      'Challenging quizzes that can help you understand things that you might not have known about JavaScript/React',
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
            additionalStyles="pt-2 text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl md:text-5xl sm:leading-10 text-shadow"
            color="text-white"
            type="h1"
          >
            Sections
          </Text>

          <Text
            additionalStyles="pt-4 max-w-2xl text-xl leading-7 lg:mx-auto text-shadow"
            color={`text-${theme}-100`}
            type="base"
          >
            A look at what&apos;s inside our newsletter
          </Text>
        </div>

        <div className="pt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featureData.map(feature => {
              return (
                <li key={feature.name} className="py-4 pr-4 lg:pr-8 mb-4 flex justify-center">
                  <div className="flex">
                    <div
                      className={`flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-md text-${theme}-100 bg-gradient-to-br from-${theme}-600 to-${theme}-800 transition-all hover:animate-spring-bounce`}
                    >
                      {feature.icon}
                    </div>
                    <div className="pl-4">
                      <Text type="h2" color="text-white" additionalStyles="text-lg leading-6 font-semibold text-shadow">
                        {feature.name}
                      </Text>
                      <Text
                        color={`text-${theme}-100`}
                        additionalStyles="pt-2 text-base leading-6 max-w-sm text-shadow"
                      >
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
