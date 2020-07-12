import Button from './Button';
import Text from './Text';

const SubscribeCard = () => (
  <div className="border border-green-500 lg:border-green-300 bg-white rounded p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <Text type="h3" color="green-6" additionalStyles="font-bold mb-2">
        Get Scriptified Issues In Your Inbox
      </Text>
      <Text color="gray-6">No spam ever, pinky promise!</Text>
    </div>
    <div className="md:flex md:items-center mb-6">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Email</label>
      <input
        className="bg-green-100 appearance-none border border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400"
        type="email"
        placeholder="hello@scriptfied.com"
      />
    </div>
    <Button size="xs" type="primary" additionalStyles="rounded shadow mt-4">
      Subscribe
    </Button>
  </div>
);

export default SubscribeCard;
