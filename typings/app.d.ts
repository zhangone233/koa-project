// / <reference path="../node_modules/@types/koa/index.d.ts" />

declare namespace App {

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
