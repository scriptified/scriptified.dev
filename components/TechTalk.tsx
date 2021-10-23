import dynamic from 'next/dynamic';
import Talk from '../interfaces/talk';
import Text from './common/Text';
import Tags from './common/Tags';
import Markdown from './Markdown';
import { useThemeState } from '../theme/ThemeContext';
import Authors from './Authors';

// TODO: Create a loading indicator for this
// eslint-disable-next-line react/display-name
const ReactPlayer = dynamic(() => import('react-player/lazy'), { loading: (): JSX.Element => <p>Loading...</p> });

const TechTalk = ({ techTalk }: { techTalk: Talk }): JSX.Element => {
  const theme = useThemeState();
  const { title, authors, talkURL, desc, tags } = techTalk;

  return (
    <div className="py-8">
      <Text type="h2" additionalStyles="pb-4" color={`text-${theme}-600`}>
        {title}
      </Text>
      <Authors authors={authors} />
      <div className="player-wrapper py-3">
        <ReactPlayer
          className="react-player"
          url={talkURL}
          controls={true}
          pip={true}
          width="100%"
          height="100%"
          light
        />
      </div>
      <Text additionalStyles="my-4">
        <Markdown>{desc}</Markdown>
      </Text>
      <Tags tags={tags} />
    </div>
  );
};

export default TechTalk;
