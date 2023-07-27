import { TApp } from "@/app";

export default (app: TApp): Promise<void> | void => {
  const { router } = app;
  console.log("router", router);

  router.get("/", (ctx: unknown) => {
    console.log(ctx, "ctx");
    // @ts-expect-error test
    ctx.body = {
      code: 0,
    };
  });

  router.get("/api/test", (ctx: unknown, a: unknown, b: unknown) => {
    console.log(ctx, "ctx");
    console.log(a, "a");
    console.log(b, "b");

    // @ts-expect-error test
    ctx.body = {
      code: 0,
      message: "test",
    };
  });
};
