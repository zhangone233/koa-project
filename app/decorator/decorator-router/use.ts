import 'reflect-metadata';
import { type Middleware } from '@koa/router';

/**
 * 使用路由中间件
 * @param { Middleware } middleware 增加的中间件
 * @param { number | 'last' } position 放入中间件队列中的位置。默认最后一位
 * @returns { void } void
 * @example
 *  \@use((ctx, next) => {
 *    console.log(ctx, 'ctx');
 *     next();
 *  })
 */
export function use(
  middleware: Middleware,
  position: number | 'last' = 'last'
): MethodDecorator {
  return function (target, propertyKey) {
    const middlewares: Middleware[] =
      Reflect.getOwnMetadata('middlewares', target, propertyKey) ?? [];
    if (position === 'last') {
      middlewares.push(middleware);
    } else {
      middlewares.splice(position, 0, middleware);
    }
    Reflect.defineMetadata('middlewares', middlewares, target, propertyKey);
  };
}

export default use;
