import 'reflect-metadata';
import { router } from '@/app';
import { type Middleware } from '@koa/router';

const genRouteDecorator = (method: Methods) => {
  return function (path: string): MethodDecorator {
    if (!path) throw new Error('path must be a valid string');
    return function (target, propertyKey) {
      const handlerController = Reflect.get(target, propertyKey);
      if (typeof handlerController !== 'function') {
        throw new TypeError(
          `The object being embellish is not a function : ${
            target.constructor.name
          } - ${propertyKey as string}`
        );
      }
      Reflect.defineMetadata('path', path, target, propertyKey);
      Reflect.defineMetadata('method', method, target, propertyKey);
    };
  };
};

/**
 * 装饰器，注册一个get路由
 * @param { string } path api route path
 * @returns { MethodDecorator } MethodDecorator
 */
export const get = genRouteDecorator('get');
/**
 * 装饰器，注册一个post路由
 * @param { string } path api route path
 * @returns { MethodDecorator } MethodDecorator
 */
export const post = genRouteDecorator('post');

/**
 * 修饰 Class Controller
 * @param { string } root route根路径
 * @returns { ClassDecorator } 类装饰器
 */
export const controller = function (root = ''): ClassDecorator {
  return function (target) {
    if (!/^class\s/.test(target?.toString())) {
      throw new TypeError(
        `The object being embellish is not a Class : ${target.name}`
      );
    }
    // 在修饰阶段构建初始route实例，用于绑定回调函数的this指向。之后先挂在静态属性上。
    const _this = new (target as unknown as new (
      ...args: unknown[]
    ) => unknown)();
    Reflect.set(target, '_routeInstance', _this);

    Object.getOwnPropertyNames(target.prototype)
      .filter((n) => n !== 'constructor')
      .forEach((name) => {
        const handlerController = Reflect.get(target.prototype, name);
        if (typeof handlerController !== 'function') return;

        const path = Reflect.getOwnMetadata(
          'path',
          target.prototype,
          name
        ) as string;
        const method = Reflect.getOwnMetadata(
          'method',
          target.prototype,
          name
        ) as Methods;
        const middlewares = (Reflect.getOwnMetadata(
          'middlewares',
          target.prototype,
          name
        ) ?? []) as Middleware[];

        if (path && method) {
          const fullPath = !root || root === '/' ? path : `${root}${path}`;
          router[method](
            fullPath,
            ...middlewares,
            handlerController.bind(_this)
          );
        }
      });
  };
};

export default {
  get,
  post,
  controller,
};
