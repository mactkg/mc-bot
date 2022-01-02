import {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const checkCORS = (next: HttpFunction): HttpFunction => {
  return (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'GET');
      res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
      next(req, res);
    }
  };
};
