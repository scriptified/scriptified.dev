import Image from 'next/image';
import Gif from '../interfaces/gif';
import { useThemeState } from '../theme/ThemeContext';
import { getMediaFormat, getUrlWithUtmTrackingParams } from '../utils';
import Text from './common/Text';
import Markdown from './Markdown';

type SupportedMediaFormats = 'gif' | 'mp4';
interface RenderMediaProps {
  format: SupportedMediaFormats | string;
  source: string;
  caption: string;
}

const GIFItem = ({ gif }: { gif: Gif }): JSX.Element => {
  const { caption, gifURL } = gif;

  const theme = useThemeState();

  const format = getMediaFormat(gifURL);

  const renderMedia = ({ format, source, caption }: RenderMediaProps): JSX.Element => {
    switch (format) {
      case 'mp4':
        const sourceWithTrackingParams = getUrlWithUtmTrackingParams(source);

        return (
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
            <source src={sourceWithTrackingParams} type="video/mp4" />
            <p>
              Your browser doesn&apos;t support HTML5 video. Here is a{' '}
              <a href={sourceWithTrackingParams}>link to the video</a> instead.
            </p>
          </video>
        );
      case 'gif':
        return (
          <Image
            className={`bg-gradient-to-br from-${theme}-300 to-${theme}-600 rounded object-fill`}
            width={500}
            height={350}
            src={source}
            alt={caption}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">{renderMedia({ format, source: gifURL, caption })}</div>
      <Text size="sm" as="div" color="text-gray-700" additionalStyles="mt-3 text-center">
        <Markdown>{caption}</Markdown>
      </Text>
    </div>
  );
};

export default GIFItem;
