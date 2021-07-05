/* eslint-disable max-len */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  msg: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const { body, method } = req;
  const { email, firstName } = body;

  if (method === 'POST') {
    try {
      if (process.env.NODE_ENV === 'production' && req.headers.origin !== 'https://scriptified.dev') {
        throw new Error('Invalid origin');
      }

      const response = await axios.post(
        `${process.env.EMAIL_API_ROOT}subscribers`,
        {
          email,
          metadata: {
            first_name: firstName,
          },
        },
        {
          headers: {
            Authorization: `Token ${process.env.EMAIL_AUTH_TOKEN}`,
          },
        }
      );

      console.log(response);
      return res.status(200).send({ msg: 'Success' });
    } catch (error) {
      console.log(error?.response?.data);
      const errorMsg = error?.response?.data?.[0];
      let msg = 'Unknown error occurred. Please refresh the page and try again.';
      if (process.env.NODE_ENV === 'development') {
        msg = 'To test subscribe from local environment, add relevant keys in env.local file.';
      }
      if (errorMsg?.includes('is already subscribed')) {
        msg = 'Looks like you have already subscribed.';
      }
      if (errorMsg?.includes('but has not confirmed their email')) {
        msg =
          'Looks like you subscribed but have not confirmed your email. Kindly check your mail or email hello@scriptified.dev for queries.';
      }
      if (errorMsg?.includes('already been unsubscribed')) {
        msg =
          'Looks like you unsubscribed from the newsletter. If you unsubscribed by mistake & want to resubscribe again, drop us an email at hello@scriptified.dev';
      }
      return res.status(422).send({ msg });
    }
  }
};
