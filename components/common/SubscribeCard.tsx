import Button from './Button';
import Text from './Text';

const SubscribeCard = (): JSX.Element => {
  const subscribeUser = () => {
    alert("You're now subscribed to Scriptified!");
  };

  return (
    <div className="border border-green-700 bg-green-500 rounded px-16 py-4 flex flex-col justify-between leading-normal shadow-2xl">
      <div className="mb-8">
        <Text type="h3" color="white-0" additionalStyles="font-bold mb-2">
          Get Scriptified Issues In Your Inbox
        </Text>
        <Text color="gray-2">No spam ever, pinky promise!</Text>
      </div>
      <div className="md:flex md:items-center mb-6">
        <label className="block text-gray-100 font-semibold w-24 mb-1 md:mb-0 pr-4">Full Name</label>
        <input
          className="bg-green-100 appearance-none border border-green-200 rounded w-5/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="md:flex md:items-center mb-6">
        <label className="block text-gray-100 font-semibold w-24 mb-1 md:mb-0 pr-4">Email</label>
        <input
          className="bg-green-100 appearance-none border border-green-200 rounded w-5/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-400"
          type="email"
          placeholder="hello@scriptfied.com"
        />
      </div>
      <Button
        size="xs"
        type="basic"
        additionalStyles="rounded shadow w-3/6 self-center mt-4 bg-white hover:text-green-500"
        onClick={subscribeUser}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeCard;
