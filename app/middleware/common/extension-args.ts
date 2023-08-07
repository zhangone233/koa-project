import { Middleware } from 'koa';

export default (): Middleware => async (ctx, next) => {
  if (ctx.args) {
    await next();
  } else {
    const { method, query, body } = ctx.request;
    ctx.args = {
      req: ['get', 'delete'].includes(method.toLowerCase()) ? query : body,
    };
    await next();
  }
};
