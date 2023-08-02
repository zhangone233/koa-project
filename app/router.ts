import controller from "@app/controller";

// https://github.com/koajs/router/blob/master/API.md
export default (app: App): Promise<void> | void => {
  const { router } = app;
  console.log("app", app);
  console.log("router", router);

  router.get("/", (ctx) => {
    console.log(ctx, "ctx");

    ctx.body = {
      code: 0,
    };
  });

  router.get("/api/test/:id", controller.tt.testRequest.bind(controller.tt));

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
