import Err from '@app/lib/error';
import { type Middleware } from 'koa';
import ServiceError from '@app/lib/error/serviceErr';
import { UNKNOWN_ERROR_CODE } from '@/app/constant/code';

function createError(error: ServiceError) {
  if (Err.is(error)) {
    return {
      code: error.code,
      extra: error.extra,
      stack: error.origin,
      message: error.message,
    };
  } else {
    return {
      code: UNKNOWN_ERROR_CODE,
      message: error.message,
      stack: error.stack,
    };
  }
}

export default (): Middleware => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      if (error instanceof ServiceError) {
        console.error(
          `ERROR code = ${error.code || 1000}, message = ${
            error.message
          }, extra = ${error.stack || error.extra}, ctx.body = ${JSON.stringify(
            ctx.request.body || {}
          ).slice(0, 100)}, ctx.request.query = ${JSON.stringify(
            ctx.request.query || {}
          ).slice(0, 100)}, ctx.params = ${JSON.stringify(
            ctx.params || {}
          ).slice(0, 100)}`
        );
      } else {
        console.error(error);
      }
    }
    ctx.body = createError(error);
  }
};
