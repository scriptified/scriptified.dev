import DevOfTheWeek from '../interfaces/devOfTheWeek';
import SocialLinks from './common/SocialLinks';
import Text from './common/Text';
import { useThemeState } from '../theme/ThemeContext';

const DevOfTheWeekItem = ({
  devOfTheWeek: { name, profileImg, profileLink, bio },
}: {
  devOfTheWeek: DevOfTheWeek;
}): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="mt-0 mx-0 py-4">
      <a href={profileLink.website}>
        <img className="h-40 w-40 rounded-md mb-3" alt={name} src={profileImg} />
        <Text type="h3" color={`text-${theme}-600`} inline additionalStyles="hover:underline">
          {name}
        </Text>
      </a>
      <Text type="base" additionalStyles="my-2">
        {bio}
      </Text>
      <div className="flex">
        <SocialLinks links={profileLink} additionalStyles="space-x-3" />
      </div>
    </div>
  );
};

export default DevOfTheWeekItem;
