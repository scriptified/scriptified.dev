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
      const errorMsg = JSON.parse(error?.response?.text)?.title;
      let msg = 'Unknown error occurred. Please refresh the page and try again.';
      if (errorMsg === 'Member Exists') {
        msg = 'Looks like you are already registered.';
      }
      return res.status(422).send({ msg });
    }
  }
};
