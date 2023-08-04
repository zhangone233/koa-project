declare module 'koa' {
  import Router from '@koa/router';
  import Application from "@/node_modules/@types/koa";
  import { type Controller } from '@app/controller';

  declare class App<
    StateT = Application.DefaultState,
    ContextT = Application.DefaultContext
    > extends Application<StateT, ContextT> {
    // router: Router extends new (...rest: unknown[]) => infer T ? T : Router;
    router: Router<StateT, ContextT>;
    controller: Controller;
  }

  declare namespace App {
    // do something

  }

  export {
    App as Koa
  };

  export = Application;
}
