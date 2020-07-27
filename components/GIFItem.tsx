import Gif from '../interfaces/gif';
import Text from './common/Text';

const GIFItem = ({ gif: { caption, gifURL } }: { gif: Gif }): JSX.Element => (
  <div className="flex flex-col items-center">
    <img className="w-5/12 h-auto rounded" src={gifURL} alt={caption} />
    <Text type="small" color="gray-6" additionalStyles="mt-3">
      {caption}
    </Text>
  </div>
);

export default GIFItem;
