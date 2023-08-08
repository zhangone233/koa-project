import Err from '@app/lib/error';
import { type Middleware } from 'koa';

export default (headers: string[]): Middleware =>
  async (ctx, next) => {
    for (const header of headers) {
      if (!ctx.request.headers[header]) {
        // ctx.throw(400, `Missing required header: ${header}`);
        throw Err.BAD_REQUEST_CODE(`Missing required header: ${header}`);
      }
    }
    await next();
  };
