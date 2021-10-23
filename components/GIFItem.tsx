import Gif from '../interfaces/gif';
import { useThemeState } from '../theme/ThemeContext';
import Text from './common/Text';
import Markdown from './Markdown';

const GIFItem = ({ gif: { caption, gifURL } }: { gif: Gif }): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`bg-gradient-to-br from-${theme}-300 to-${theme}-600 rounded object-fill`}
          width={500}
          height={350}
          title={caption}
          preload="metadata"
        >
          <source src={gifURL} type="video/mp4" />
          <p>
            Your browser doesn&apos;t support HTML5 video. Here is a <a href={gifURL}>link to the video</a> instead.
          </p>
        </video>
      </div>
      <Text type="small" color="text-gray-700" additionalStyles="mt-3 text-center">
        <Markdown>{caption}</Markdown>
      </Text>
    </div>
  );
};

export default GIFItem;
