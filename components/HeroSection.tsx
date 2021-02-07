import { Fragment } from 'react';
import Tilt from 'react-parallax-tilt';
import { useThemeState } from '../theme/ThemeContext';
import SubscribeCard from './common/SubscribeCard';
import Text from './common/Text';
import { ScriptifiedLogo } from './icons/icons';
import { siteConfig } from './Layout';

const HeroSection = (): JSX.Element => {
  const theme = useThemeState();
  return (
    <Fragment>
      <Tilt
        tiltReverse
        transitionEasing="cubic-bezier(.03,.98,.52,.99)"
        className="flex flex-col items-center justify-center mt-6 relative z-10"
      >
        <div className="flex justify-center h-24 w-24 md:h-32 md:w-32 mt-4 sm:mt-6 lg:mt-12">
          <ScriptifiedLogo color={`text-${theme}-100`} additionalStyles="h-24 w-24 md:h-32 md:w-32" />
        </div>
        <Text type="h1" color={`text-${theme}-100`} additionalStyles="text-6xl">
          <h1>{siteConfig.name}</h1>
        </Text>
      </Tilt>
      <Text
        // type="h1"
        color={`text-${theme}-200`}
        additionalStyles="text-3xl mb-10 sm:mb-12 lg:mb-16 max-w-3xl text-center"
      >
        <h2>{siteConfig.description}</h2>
      </Text>
      <div className="w-5/6 sm:mx-8 lg:w-2/4 mb-2 relative z-10">
        <SubscribeCard homePage />
      </div>
    </Fragment>
  );
};

export default HeroSection;
