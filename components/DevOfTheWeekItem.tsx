import Image from 'next/image';
import DevOfTheWeek from '../interfaces/devOfTheWeek';
import SocialLinks from './common/SocialLinks';
import Text from './common/Text';
import { useThemeState } from '../theme/ThemeContext';
import Markdown from './Markdown';

const DevOfTheWeekItem = ({
  devOfTheWeek: { name, profileImg, profileLink, bio },
}: {
  devOfTheWeek: DevOfTheWeek;
}): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="mt-0 mx-0 py-4">
      <div
        className={`mb-3 w-40 h-40 p-1 bg-gradient-to-br from-${theme}-300 to-${theme}-700 rounded transition duration-300 shadow-xl hover:shadow-lg`}
      >
        <div className={`bg-${theme}-100 p-1 rounded`}>
          <a
            href={profileLink.website}
            target="_blank"
            rel="noreferrer"
            className="flex transform transition duration-700 hover:scale-105"
            aria-label={name}
          >
            <Image
              className={`h-auto w-auto rounded-md bg-gradient-to-br from-${theme}-300 to-${theme}-500 rounded hover:shadow-lg`}
              width={150}
              height={150}
              alt={name}
              src={profileImg}
            />
          </a>
        </div>
      </div>
      <a href={profileLink.website} target="_blank" rel="noreferrer">
        <Text size="2xl" color={`text-${theme}-600`} as="h4" additionalStyles="hover:underline">
          {name}
        </Text>
      </a>
      <Text size="md" as="div" additionalStyles="pt-2 pb-4">
        <Markdown>{bio}</Markdown>
      </Text>
      <div className="flex">
        <SocialLinks links={profileLink} additionalStyles="space-x-3" />
      </div>
    </div>
  );
};

export default DevOfTheWeekItem;
