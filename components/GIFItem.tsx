import Gif from '../interfaces/gif';
import Text from './common/Text';

const GIFItem = ({ gif: { caption, gifURL } }: { gif: Gif }): JSX.Element => (
  <div className="flex flex-col items-center">
    <img className="w-5/12 h-auto rounded" width="w-5/12" height="h-auto" src={gifURL} alt={caption} loading="lazy" />
    <Text type="small" color="text-gray-700" additionalStyles="mt-3">
      {caption}
    </Text>
  </div>
);

export default GIFItem;
