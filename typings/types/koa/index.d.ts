declare module 'koa' {
  import Router from '@koa/router';
  import Application from "@/node_modules/@types/koa";

  declare class App<
    StateT = Application.DefaultState,
    ContextT = Application.DefaultContext
  > extends Application<StateT, ContextT> {
    // router: Router extends new (...rest: unknown[]) => infer T ? T : Router;
    router: Router<StateT, ContextT>;
  }

  declare namespace App {
    // do something

  }

  export {
    App as Koa
  };

  export = Application;
}
