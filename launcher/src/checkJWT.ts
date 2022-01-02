import {Response} from '@google-cloud/functions-framework/build/src/functions';
import {LoginTicket, OAuth2Client} from 'google-auth-library';
import {HttpFunction} from '.';

const CLIENT_ID = process.env['GOOGLE_CLIENT_ID'],
  whitelist = ['mactkg@gmail.com'];

export const checkJWT = (next: HttpFunction): HttpFunction => {
  return async (req, res) => {
    // skip OPTIONS because preflight req has no Authorization header
    if (req.method === 'OPTIONS' || process.env['NODE_ENV'] === 'development') {
      console.debug('skip checking JWT');
      next(req, res);
      return;
    }

    const auth = req.headers['authorization'];
    if (typeof auth !== 'string') {
      console.debug('wrong header format. abort');
      abort(res);
      return;
    }

    const token = auth.split('Bearer ')[1];
    const email = await getEmailFromJWT(token);
    if (!email) {
      console.error("can't get email from JWT token");
      abort(res);
      return;
    }

    const verified = await verifyEmail(email);
    if (verified) {
      req.email = email;
      next(req, res);
    } else {
      abort(res);
      return;
    }
  };
};

const client = new OAuth2Client(CLIENT_ID);
const getEmailFromJWT = async (token: string): Promise<string | undefined> => {
  const ticket = (await client
    .verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    })
    .catch(e => {
      console.error(`verify error. ${e}`);
    })) as LoginTicket;

  const payload = ticket.getPayload();
  if (!payload) return undefined;

  return payload['email'];
};

const verifyEmail = async (email: string): Promise<boolean> => {
  const found = whitelist.findIndex(o => o === email) !== -1;
  if (!found) {
    console.error(`${email} is not found in whitelist`);
  }
  return found;
};

const abort = (res: Response) => {
  res.status(400).send('');
};
