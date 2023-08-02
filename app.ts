import fs from 'fs';
import path from 'path';
import { requireContext } from '@app/utils/fs'

import { Koa } from "koa";
import Router from '@koa/router';
import bodyparser from 'koa-bodyparser';

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

    // console.log(path.join('app', 'controller', 'tt'));
    // console.log(path.resolve(__dirname, '/app', '/controller', '/tt', 'index'));

    // const ttBuffer = fs.readFileSync(path.resolve(__dirname, 'app', 'controller', 'tt', 'index.ts'), {
    //   encoding: 'utf-8'
    // });
    // console.log(ttBuffer, 'buffer');

    // console.log(path.resolve(__dirname, 'app', 'controller', 'tt', 'index.ts'), 'path');
    // console.log(requireContext('./service'));

    // const res = await import('@app/controller/tt');
    // console.log(res, 'res');

    // app.controller = res;
    // const tt = fs.readFileSync(path.)

    app
      .use(bodyparser({
        strict: true // https://github.com/koajs/bodyparser/tree/2.x
      }))
      .use(router.routes())
      .use(router.allowedMethods({
        throw: true, // 抛出错误，而不是设置状态和头
        notImplemented() {
          console.error('501 抛出返回值来代替默认的未实现错误');
        },
        methodNotAllowed() {
          throw new Error('405 不被允许的请求方式')
        }
      }));
  },
};
