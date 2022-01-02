import {
  Request as GoogleRequest,
  Response,
} from '@google-cloud/functions-framework/build/src/functions';
import {InstancesClient, ZoneOperationsClient} from '@google-cloud/compute';
import {notify} from './notify';
import {checkCORS} from './checkCORS';
import {checkJWT} from './checkJWT';

/* notes

https://cloud.google.com/functions/docs/writing/http?hl=ja

*/

type Logger = Console;
type Env = NodeJS.ProcessEnv;
type Func = (logger?: Logger) => HttpFunction;
type EnvFunc = (env: Env, logger?: Logger) => HttpFunction;
export interface Request extends GoogleRequest {
  email?: string;
}
export interface HttpFunction {
  (req: Request, res: Response): any;
}

const _echo: Func = logger => {
  return (req, res) => {
    logger?.info(req.query);
    res.status(200);
    res.send(`Hello, ${req.query.user ?? 'Cloud Functions'}`);
  };
};

type ServerConfig = {
  project: string;
  zone: string;
  instance: string;
};
const getServerConfig = (env: Env) => {
  return {
    project: env['SERVER_PROJECT'],
    zone: env['SERVER_ZONE'],
    instance: env['SERVER_INSTANCE'],
  } as ServerConfig;
};

const _getInfo: EnvFunc = (env, _) => {
  return async (req, res) => {
    if (req.method !== 'GET') {
      res.status(404).send('');
      return;
    }

    const config = getServerConfig(env);
    const cli = new InstancesClient();
    const [instanceList] = await cli.list({
      project: config.project,
      zone: config.zone,
    });

    const data = [];
    for (const instance of instanceList) {
      const {id, name, status} = instance;
      data.push({
        id,
        name,
        status,
      });
    }

    res.status(200);
    res.json(data);
  };
};

const _start: EnvFunc = (env, logger) => {
  return async (req, res) => {
    if (req.method !== 'POST') {
      res.status(404).send('');
      return;
    }

    const config = getServerConfig(env);
    const cli = new InstancesClient();
    let [operation] = await cli.start({
      project: config.project,
      zone: config.zone,
      instance: config.instance,
    });

    const opCli = new ZoneOperationsClient();
    while (operation.status !== 'DONE') {
      [operation] = await opCli.wait({
        operation: operation.name,
        project: config.project,
        zone: config.zone,
      });
    }
    logger?.log(operation);
    notify(
      `Minecraft Serverをスタートしたよ(operation: ${operation.id}, user: ${req.email})`
    );

    res.status(200);
    res.send('ok');
  };
};

const _stop: EnvFunc = (env, logger) => {
  return async (req, res) => {
    if (req.method !== 'POST') {
      res.status(404).send('');
      return;
    }

    const config = getServerConfig(env);
    const cli = new InstancesClient();
    let [operation] = await cli.stop({
      project: config.project,
      zone: config.zone,
      instance: config.instance,
    });

    const opCli = new ZoneOperationsClient();
    while (operation.status !== 'DONE') {
      [operation] = await opCli.wait({
        operation: operation.name,
        project: config.project,
        zone: config.zone,
      });
    }
    logger?.log(operation);
    notify(
      `Minecraft Serverを停止したよ(operation: ${operation.id}, user: ${req.email})`
    );

    res.status(200);
    res.send('ok');
  };
};

// registration
const check = (next: HttpFunction): HttpFunction => checkJWT(checkCORS(next));
export const echo = check(_echo(console));
export const getInfo = check(_getInfo(process.env, console));
export const start = check(_start(process.env, console));
export const stop = check(_stop(process.env, console));
