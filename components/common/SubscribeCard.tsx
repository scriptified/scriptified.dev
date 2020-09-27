import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './Button';
import Text from './Text';
import { useThemeState } from '../../theme/ThemeContext';

const SubscribeCard = ({ homePage = false }: { homePage?: boolean }): JSX.Element => {
  const router = useRouter();
  const theme = useThemeState();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribeUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/subscribe', {
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
      router.replace('/check-email');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setFirstName('');
      setEmail('');
    }
  };

  const cardContainerStyles = homePage
    ? `border-gray-400 bg-${theme}-200 shadow-xl`
    : `border-${theme}-700 bg-${theme}-500 shadow-2xl`;
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
      className={`${cardContainerStyles} rounded-lg border px-10 sm:px-16 py-12 sm:py-14 flex flex-col justify-between leading-normal`}
    >
      {!homePage && (
        <div className="mb-8">
          <Text type="h3" color="text-white" additionalStyles="font-bold mb-2">
            Get Scriptified Issues In Your Inbox
          </Text>
          <Text color="text-gray-400">No spam ever, pinky promise!</Text>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="md:flex md:items-center mb-6">
          <label className={`${labelStyles} block font-semibold w-32 mb-3 md:mb-0 pr-4`}>First Name</label>
          <input
            // eslint-disable-next-line max-len
            className={`${inputStyles} text-${theme}-700 appearance-none border rounded w-full md:w-5/6 py-2 px-4 leading-tight focus:outline-none`}
            type="text"
            required
            name="fname"
            value={firstName}
            onChange={handleChange}
            placeholder="Binod"
          />
        </div>
        <div className="md:flex md:items-center mb-6">
          <label className={`${labelStyles} block font-semibold w-32 mb-3 md:mb-0 pr-4`}>Email</label>
          <input
            // eslint-disable-next-line max-len
            className={`${inputStyles} text-${theme}-700 appearance-none border rounded w-full md:w-5/6 py-2 px-4 leading-tight focus:outline-none`}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="hello@scriptfied.com"
          />
        </div>
        <Button
          size="xs"
          type={homePage ? 'primary' : 'basic'}
          additionalStyles={`rounded shadow w-3/6 self-center mt-4`}
          buttonAttributes={{ type: 'submit' }}
          loading={loading}
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default SubscribeCard;
