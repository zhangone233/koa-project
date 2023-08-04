// / <reference types="koa" />

declare type App = App.KoaApplication;

declare namespace App {
  import { Koa } from 'koa';

  type KoaApplication = Koa;
  type Ctx = Koa['context'];

  interface LifeCycle<T> {
    beforeStart: (this: T, app: T) => Promise<void> | void;
    afterStart: (this: T, app: T) => Promise<void> | void;
  }

  interface AppLifeCycle<T> {
    http: LifeCycle<T>;
    https: LifeCycle<T>;
    prepare(app: T): Promise<void> | void;
  }
}

/** RouteController Method */
declare type RouteController<T extends string> = {
  [K in T]: (ctx: App.ctx) => Promise<unknown> | unknown;
}

declare type Methods = 'get' | 'post' | 'put' | 'delete' | 'options' | 'patch';
