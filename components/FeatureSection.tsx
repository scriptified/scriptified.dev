import React from 'react';
import { useThemeState } from '../theme/ThemeContext';
import Text from '../components/common/Text';

const featureData = [
  {
    name: 'Tip of the Day',
    icon: '',
    desc: 'Useful programming hot tips and tricks to make your dreadful lives easier',
  },
  {
    name: 'Articles',
    icon: '',
    desc: 'Insightful articles and tutorials around JavaScript and React world',
  },
  {
    name: 'Tools',
    icon: '',
    desc: 'Helpful tools, resources and websites we can use to design and develop better user experiences',
  },
  {
    name: 'Dev of the Week',
    icon: '',
    desc: 'Featured developer of the week whose work is inspirational',
  },
  {
    name: 'Tech Talks',
    icon: '',
    desc: 'Interesting tech talks from conferences revolving around developement',
  },
  {
    name: 'Quiz',
    icon: '',
    desc: 'Challenging programming quizzes to test your sharp programming minds',
  },
  {
    name: 'This Week in GIF',
    icon: '',
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
                        className={`flex items-center justify-center h-12 w-12 rounded-md bg-${theme}-700 text-white`}
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
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
