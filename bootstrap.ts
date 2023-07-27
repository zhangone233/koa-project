import Koa from 'koa';
import http from 'http';
import https from 'https';
import lifeCycle from './app';

const app = new Koa();

const start = async () => {
  await lifeCycle.beforeStart();
  http.createServer(app.callback).listen(process.env.PORT || 4000, lifeCycle.afterStart);
  https.createServer(app.callback).listen(process.env.PORT || 4001, lifeCycle.afterStart);
}

start();
