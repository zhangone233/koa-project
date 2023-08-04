import Joi from 'joi';
import 'reflect-metadata';
import { Middleware } from 'koa';
import { getValidateParams } from '@app/middleware/validateParams';

export const validate = (
  schema: Joi.Schema,
  position: number | 'last' = 'last'
): MethodDecorator => {
  return function (target, propertyKey) {
    const method: Methods = Reflect.getOwnMetadata(
      'method',
      target,
      propertyKey
    );
    const middlewares: Middleware[] =
      Reflect.getOwnMetadata('middlewares', target, propertyKey) ?? [];
    const validateParamsMiddleware = getValidateParams(method, schema);
    if (position === 'last') {
      middlewares.push(validateParamsMiddleware);
    } else {
      middlewares.splice(position, 0, validateParamsMiddleware);
    }
    Reflect.defineMetadata('middlewares', middlewares, target, propertyKey);
  };
};

export default validate;
