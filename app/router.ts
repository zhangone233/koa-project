/**
 * 推荐使用装饰器定义路由
 * 也可以在这里定义
 * https://github.com/koajs/router/blob/master/API.md
 */
export default (app: App): Promise<void> | void => {
  const { router, controller } = app;
  console.log('controller', controller);

  router.get('/', (ctx) => {
    ctx.body = {
      code: 0,
      message: 'hello world',
    };
  });

  // router.get("/api/test/:id", controller.tt.index.testRequest.bind(controller.tt));

  // router.post('/api/form', (ctx) => {
  //   console.log(ctx);
  //   console.log(ctx.request.body, 'ctx.request.body');

  //   ctx.body = {
  //     code: 0,
  //     message: 'next',
  //   };
  //   // next();
  // });
};
