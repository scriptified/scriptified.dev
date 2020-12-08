import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './Button';
import Text from './Text';
import { useThemeState } from '../../theme/ThemeContext';
import { XCircleIcon } from '../icons/icons';

const getThankYouMessage = (): string => {
  const thankYouCopies = [
    "Now's a perfect time to check your email inbox",
    "Now check your inbox as you're in for a sweet treat!",
  ];
  return thankYouCopies[Math.floor(Math.random() * thankYouCopies.length)];
};

const SubscribeCard = ({ homePage = false }: { homePage?: boolean }): JSX.Element => {
  const theme = useThemeState();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const subscribeUser = async () => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email }),
      });
      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.msg);
      }
      setShowThankYou(true);
    } catch (error) {
      setShowErrorMsg(true);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
      setFirstName('');
      setEmail('');
    }
  };

  const cardContainerStyles = homePage
    ? `border-${theme}-700 bg-gradient-to-b from-${theme}-100 to-${theme}-300 shadow-xl`
    : `border-${theme}-700 bg-gradient-to-b from-${theme}-400 to-${theme}-600 shadow-2xl`;
  const labelStyles = homePage ? `text-${theme}-900` : `text-${theme}-100`;
  const inputStyles = homePage
    ? `bg-${theme}-100 border-${theme}-400 focus:bg-white focus:border-${theme}-700`
    : `bg-${theme}-100 border-${theme}-200 focus:bg-white focus:border-${theme}-800`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    subscribeUser();
    setLoading(true);
  };

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (name === 'email') {
      setEmail(value);
    } else {
      setFirstName(value);
    }
  };

  return (
    <div
      // eslint-disable-next-line max-len
      className={`foo rounded-lg px-8 border-2 sm:px-16 py-6 sm:py-10 flex flex-col justify-between leading-normal ${cardContainerStyles}`}
    >
      {!homePage && !showThankYou ? (
        <div className="mb-8">
          <Text type="h2" color="text-white" additionalStyles="mb-2">
            Get Scriptified Issues In Your Inbox
          </Text>
          <Text color={`text-${theme}-200`}>No spam ever, pinky promise!</Text>
        </div>
      ) : null}

      {!showThankYou ? (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="md:flex md:items-center mb-6">
            <label htmlFor="fname" className={`${labelStyles} block font-semibold w-32 mb-3 md:mb-0 pr-4`}>
              First Name
            </label>
            <input
              // eslint-disable-next-line max-len
              className={`${inputStyles} text-${theme}-700 appearance-none border rounded w-full md:w-5/6 py-2 px-4 leading-tight focus:outline-none`}
              type="text"
              required
              name="fname"
              id="fname"
              value={firstName}
              onChange={handleChange}
              placeholder="Binod"
            />
          </div>
          <div className="md:flex md:items-center mb-6">
            <label htmlFor="email" className={`${labelStyles} block font-semibold w-32 mb-3 md:mb-0 pr-4`}>
              Email
            </label>
            <input
              // eslint-disable-next-line max-len
              className={`${inputStyles} text-${theme}-700 appearance-none border rounded w-full md:w-5/6 py-2 px-4 leading-tight focus:outline-none`}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="hello@scriptfied.com"
            />
          </div>
          {showErrorMsg && (
            <div className="flex items-center justify-start border bg-red-200 border-red-700 text-red-800 px-4 py-1 min-w-1/2 self-center rounded-md">
              <XCircleIcon />
              <Text type="small" color={`text-${theme}-900`} additionalStyles="pl-4">
                {errorMsg}
              </Text>
            </div>
          )}
          <Button
            size="md"
            type={homePage ? 'primary' : 'basic'}
            additionalStyles={`rounded shadow w-3/6 self-center mt-4`}
            buttonAttributes={{ type: 'submit' }}
            loading={loading}
          >
            Subscribe
          </Button>
        </form>
      ) : (
        <div className="flex justify-center items-center flex-col text-center space-y-4">
          <Text type="h2" color={homePage ? `text-${theme}-800` : `text-${theme}-100`}>
            Thank you for subscribing to Scriptified!
          </Text>
          <Text color={homePage ? `text-${theme}-600` : `text-${theme}-300`}>{getThankYouMessage()}</Text>
        </div>
      )}
    </div>
  );
};

export default SubscribeCard;
