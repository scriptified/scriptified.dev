import { AuthorizationCode } from 'simple-oauth2';
import { randomBytes } from 'crypto';
import { config, scopes } from '../../lib/cms-config';
import { NextApiRequest, NextApiResponse } from 'next';

export const randomString = () => randomBytes(4).toString('hex');

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const { host } = req.headers;
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const provider = urlParams.get('provider');

  // simple-oauth will use our config files to generate a client we can use to request access
  const client = new AuthorizationCode(config(provider));

  // we then make a build the request to our provider
  const authorizationUri = client.authorizeURL({
    // your callback url is important! More on this later
    redirect_uri: `https://${host}/api/callback?provider=${provider}`,
    scope: scopes[provider],
    state: randomString(),
  });

  // and get redirected to Github for authorisation
  res.writeHead(301, { Location: authorizationUri });
  res.end();
};

export default auth;
