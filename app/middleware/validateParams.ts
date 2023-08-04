import Joi from 'joi';
import { Middleware } from 'koa';

export const getValidateParams = (
  method: Methods,
  schema: Joi.Schema
): Middleware => {
  return async function (ctx, next) {
    let data: unknown;
    if (['get', 'delete'].includes(method)) {
      data = ctx.request.query;
    } else {
      data = ctx.request.body;
    }

    const { error } = schema.validate(data);
    if (error) {
      // todo: 需要一个优雅的校验报错(⊙o⊙)…
      ctx.body = {
        code: 400,
        message: error.message || '参数校验失败，请检查入参',
      };
      return;
    }

    await next();
  };
};
