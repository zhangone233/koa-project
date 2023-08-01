import http from 'http';
import https from 'https';
// import hmr from 'node-hmr';
import routesGen from '@app/router';
import { app, lifeCycle } from './app';

const startHttp = async (callback: http.RequestListener) => {
  await lifeCycle?.http?.beforeStart?.call(app, app);
  http.createServer(callback.call(app)).listen(process.env.PORT || 4000, lifeCycle?.http?.afterStart?.bind(app, app));
}

const startHttps = async (callback: http.RequestListener) => {
  await lifeCycle?.https?.beforeStart?.call(app, app);
  https.createServer(callback.call(app)).listen(process.env.PORT2 || 4001, lifeCycle?.https?.afterStart?.bind(app, app));
}

const start = async () => {
  await lifeCycle.prepare(app);

  await routesGen(app);

  // console.log(process.env, 'env');

  const callback: http.RequestListener = app.callback;
  // if (process.env.NODE_ENV === 'development') {
  //   hmr(() => {
  //     console.log('\x1b[42;30m HMR \x1b[40;32m hot module replacement ... \x1b[0m');
  //     const cb = app.callback();
  //     callback = (...rest: Parameters<ReturnType<typeof app.callback>>) => cb(...rest);
  //   }, {
  //     watchDir: './app/'
  //   });
  // }

  // if (process.env.NODE_ENV === 'development' && process.env.npm_lifecycle_event === 'server:dev') {
  //   process.on('SIGTERM', () => {
  //     console.log('ssss');
      
  //     process.kill(process.pid, 'SIGINT');
  //   });
  // }

  await Promise.all([startHttp(callback), startHttps(callback)]);
}
start();
// console.log('\x1b[42;30m DONE \x1b[40;32m Compiled successfully in 19987ms\x1b[0m');
