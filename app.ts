import { Koa } from 'koa';
import cors from '@koa/cors';
import logger from 'koa-logger';
import Router from '@koa/router';
import bodyparser from 'koa-bodyparser';
import {
  responseTime,
  captureError,
  extensionArgs
} from '@app/middleware/common';

export const app = new Koa();
export const router = new Router();

export const lifeCycle: App.AppLifeCycle<App> = {
  http: {
    async beforeStart() {

    },
    async afterStart() {
      console.log(`\x1b[42;30m http \x1b[40;32m 服务已经启动：http://localhost:${process.env.PORT || 4000} \x1b[0m`);
    },
  },

  https: {
    async beforeStart() {

    },
    async afterStart() {
      console.log(`\x1b[42;30m https \x1b[40;32m 服务已经启动：http://localhost:${process.env.PORT2 || 4001} \x1b[0m`);
    },
  },

  async prepare(app) {
    app.router = router;
    app.controller = (await import('@app/controller')).default;

    app
      .use(logger())
      .use(responseTime())
      .use(captureError())
      .use(cors({
        credentials: true,
        keepHeadersOnError: true,
        allowHeaders: ['X-Requested-With']
      }))
      .use(bodyparser({
        strict: true // https://github.com/koajs/bodyparser/tree/2.x
      }))
      .use(extensionArgs())
      .use(router.routes())
      .use(router.allowedMethods({
        throw: true, // 抛出错误，而不是设置状态和头
        notImplemented() {
          console.error('501 抛出返回值来代替默认的未实现错误');
        },
        methodNotAllowed() {
          throw new Error('405 不被允许的请求方式');
        }
      }));

    // todo: 404 status
  },
};
