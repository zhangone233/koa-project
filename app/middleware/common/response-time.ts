import { type Middleware } from 'koa';

export default (): Middleware => async (ctx, next) => {
  // ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // ctx.set('Access-Control-Allow-Methods', 'POST');

  const nowTime = Date.now();
  await next();
  const responseTime = Date.now() - nowTime;
  ctx.set('X-Response-Time', `${responseTime}ms`);
};
