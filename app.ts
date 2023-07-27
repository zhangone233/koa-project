import { Koa } from "koa";
import Router from '@koa/router';

export const app = new Koa();
export type TApp = typeof app;
export const router = new Router();

export const lifeCycle: App.AppLifeCycle<TApp> = {
  http: {
    async beforeStart() {
      // Before app start
      // console.log('http Starting server...');      
    },
    async afterStart() {
      console.log('\x1b[42;30m http \x1b[40;32m Server started \x1b[0m');
    },
  },

  https: {
    async beforeStart() {
      // Before app start
      // console.log('https Starting server...');
    },
    async afterStart() {
      console.log('\x1b[42;30m https \x1b[40;32m Server started \x1b[0m');
    },
  },

  prepare(app) {
    app.router = router;
    app.use(router.routes());
  },
};
