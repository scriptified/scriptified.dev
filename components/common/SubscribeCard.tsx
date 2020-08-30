import Button from './Button';
import Text from './Text';

const SubscribeCard = ({ homePage = false }: { homePage?: boolean }): JSX.Element => {
  const subscribeUser = () => {
    alert("You're now subscribed to Scriptified!");
  };

  const cardContainerStyles = homePage
    ? 'border-gray-400 bg-green-100 shadow-whiteLg'
    : 'border-green-700 bg-green-500 shadow-2xl';
  const labelStyles = homePage ? 'text-gray-700' : 'text-gray-100';
  const inputStyles = homePage
    ? 'bg-green-100 border-green-400 focus:bg-white focus:border-green-700'
    : 'bg-green-100 border-green-200 focus:bg-white focus:border-green-800';

  return (
    <div className={`${cardContainerStyles} rounded border px-16 py-4 flex flex-col justify-between leading-normal`}>
      {!homePage && (
        <div className="mb-8">
          <Text type="h3" color="text-white" additionalStyles="font-bold mb-2">
            Get Scriptified Issues In Your Inbox
          </Text>
          <Text color="text-gray-400">No spam ever, pinky promise!</Text>
        </div>
      )}
      <div className="md:flex md:items-center mb-6">
        <label className={`${labelStyles} block font-semibold w-32 mb-3 md:mb-0 pr-4`}>First Name</label>
        <input
          className={`${inputStyles} text-green-700 appearance-none border rounded w-5/6 py-2 px-4 leading-tight focus:outline-none`}
          type="text"
          placeholder="Binod"
        />
      </div>
      <div className="md:flex md:items-center mb-6">
        <label className={`${labelStyles} block font-semibold w-32 mb-3 md:mb-0 pr-4`}>Email</label>
        <input
          className={`${inputStyles} text-green-700 appearance-none border rounded w-5/6 py-2 px-4 leading-tight focus:outline-none`}
          type="email"
          placeholder="hello@scriptfied.com"
        />
      </div>
      <Button
        size="xs"
        type={homePage ? 'primary' : 'basic'}
        additionalStyles={`rounded shadow w-3/6 self-center mt-4`}
        onClick={subscribeUser}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeCard;
