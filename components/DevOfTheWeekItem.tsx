import DevOfTheWeek from '../interfaces/devOfTheWeek';
import Text from './common/Text';

const DevOfTheWeekItem = ({ devOfTheWeek: { name, profileImg, profileLink, bio } }: { devOfTheWeek: DevOfTheWeek }) => (
  <div className="mt-0 mx-0 py-4">
    <a href={profileLink.website}>
      <img className="h-40 w-40 rounded-md mb-3" alt={name} src={profileImg} />
      <Text type="h3" color="green-5" inline>
        {name}
      </Text>
    </a>
    <Text type="base" additionalStyles="my-2">
      {bio}
    </Text>
    <div>
      <a href={profileLink.website}>
        <Text type="small" color="green-5" additionalStyles="hover:underline" inline>
          Portfolio
        </Text>
      </a>
      <Text type="small" color="green-5" inline>
        {' | '}
      </Text>
      <a href={profileLink.github}>
        <Text type="small" color="green-5" additionalStyles="hover:underline" inline>
          GitHub
        </Text>
      </a>
      <Text type="small" color="green-5" inline>
        {' | '}
      </Text>
      <a href={profileLink.instagram}>
        <Text type="small" color="green-5" additionalStyles="hover:underline" inline>
          Instagram
        </Text>
      </a>
    </div>
  </div>
);

export default DevOfTheWeekItem;
