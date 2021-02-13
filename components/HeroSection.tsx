import { Fragment } from 'react';
import { useThemeState } from '../theme/ThemeContext';
import SubscribeCard from './common/SubscribeCard';
import Text from './common/Text';
import { ScriptifiedLogo } from './icons/icons';
import { siteConfig } from './Layout';

/*
 ref => https://twitter.com/wesbos/status/1306668630709600262?s=20
 to avoid awkward line-break b/w "React and JavaScript"
*/
const numberOfImpWords = 3;
const desciptionArray = siteConfig.description.split(' ');
const descPart1 = desciptionArray.slice(0, desciptionArray.length - numberOfImpWords).join(' ');
const descPart2 = desciptionArray.slice(-1 * numberOfImpWords).join(' ');

const HeroSection = (): JSX.Element => {
  const theme = useThemeState();
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center mt-6 relative z-10">
        <div className="flex justify-center h-24 w-24 md:h-32 md:w-32 mt-4 sm:mt-6 lg:mt-12">
          <ScriptifiedLogo color={`text-${theme}-100`} additionalStyles="h-24 w-24 md:h-32 md:w-32" />
        </div>
        <Text type="h1" color={`text-${theme}-100`} additionalStyles="text-6xl">
          <h1>{siteConfig.name}</h1>
        </Text>
      </div>
      <Text
        // type="h1"
        color={`text-${theme}-200`}
        additionalStyles="text-3xl mb-10 sm:mb-12 lg:mb-16 max-w-3xl text-center px-4"
      >
        <h2>
          {`${descPart1} `} <span className="whitespace-no-wrap">{descPart2}</span>
        </h2>
      </Text>
      <div className="w-5/6 sm:mx-8 lg:w-2/4 mb-2 relative z-10">
        <SubscribeCard homePage />
      </div>
    </Fragment>
  );
};

export default HeroSection;
