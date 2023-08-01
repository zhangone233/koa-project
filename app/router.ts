import { TApp } from "@/app";

// https://github.com/koajs/router/blob/master/API.md
export default (app: TApp): Promise<void> | void => {
  const { router } = app;
  console.log("app", app);
  console.log("router", router);

  router.get("/", (ctx) => {
    console.log(ctx, "ctx");

    ctx.body = {
      code: 0,
    };
  });

  router.get("/api/test/:id", (ctx, next) => {
    console.log(ctx, "ctx");
    console.log(next);

    ctx.response.status = 202;
    ctx.body = {
      code: 0,
      message: "ttt",
    };

    // return {
    //   code: 0,
    //   message: 'ttt'
    // }
  });

  router.post("/api/form", (ctx) => {
    console.log(ctx);
    console.log(ctx.request.body, "ctx.request.body");

    ctx.body = {
      code: 0,
      message: "next",
    };
    // next();
  });
};
