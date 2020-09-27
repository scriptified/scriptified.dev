import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export default async (req, res) => {
  const { body, method } = req;
  const { email, firstName } = body;

  if (method === 'POST') {
    try {
      const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: 'pending',
        merge_fields: {
          FNAME: firstName,
        },
      });
      console.log(response);
      return res.status(200).send({ msg: 'Success' });
    } catch (error) {
      console.log(error);
      return res.status(422).send({ msg: 'Failure' });
    }
  }
};
