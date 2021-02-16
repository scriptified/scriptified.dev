import dynamic from 'next/dynamic';
import Talk from '../interfaces/talk';
import Text from './common/Text';
import Tags from './common/Tags';
import Markdown from './Markdown';
import { useThemeState } from '../theme/ThemeContext';

// TODO: Create a loading indicator for this
// eslint-disable-next-line react/display-name
const ReactPlayer = dynamic(() => import('react-player/lazy'), { loading: (): JSX.Element => <p>Loading...</p> });

const TechTalk = ({ techTalk }: { techTalk: Talk }): JSX.Element => {
  const theme = useThemeState();

  return (
    <div className="py-8">
      <Text type="h2" additionalStyles="pb-4" color={`text-${theme}-600`}>
        {techTalk.title}
      </Text>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={techTalk.talkURL}
          controls={true}
          pip={true}
          width="100%"
          height="100%"
          light
        />
      </div>
      <Text additionalStyles="my-4">
        <Markdown>{techTalk.desc}</Markdown>
      </Text>
      <Tags tags={techTalk.tags} />
    </div>
  );
};

export default TechTalk;
