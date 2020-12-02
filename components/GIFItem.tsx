import Image from 'next/image';
import Gif from '../interfaces/gif';
import Text from './common/Text';

const GIFItem = ({ gif: { caption, gifURL } }: { gif: Gif }): JSX.Element => (
  <div className="flex flex-col items-center">
    <div className="w-1/2 h-auto">
      <Image className="rounded object-scale-down" width={500} height={300} src={gifURL} alt={caption} />
    </div>
    <Text type="small" color="text-gray-700" additionalStyles="mt-3">
      {caption}
    </Text>
  </div>
);

export default GIFItem;
