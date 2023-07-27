
// / <reference path="../../../node_modules/.pnpm/@types+koa@2.13.7/node_modules/@types/koa/index.d.ts" />
// / <reference types="koa" />

// import '@/node_modules/@types/koa';
import 'koa';

/**
 * ## 记录一个TS的声明合并问题
 * - 如果在a.d.ts文件中声明定义一个了class类型，然后把class声明默认导出（也包括commonJS的export = xxx），那么在其他文件中将无法正常进行声明合并，扩展属性极不方便。
 * issues: https://github.com/microsoft/TypeScript/issues/14080
 */

// declare module 'koa' {

//   interface Ext {
//     a: number;
//   }

  // 模块空间下的顶级interface可以正常拓展。
  // interface ContextDelegatedRequest {
  //   www:222
  // }

  // interface Application {
  //   ext: Ext;
  //   cb(): void;
  // }

  // export = Application;
  // export = {
  //   Application,
  //   Ext
  // }

  // export default Application;
// }
