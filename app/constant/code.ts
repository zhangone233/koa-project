/**
 * @description 0 ~ 1000 正常发生的状态
 */

/** 成功 */
export const SUCCESS_CODE = 0;
/** bad request 一般是参数格式错误 */
export const BAD_REQUEST_CODE = 400;
/** 未知的错误 */
export const UNKNOWN_ERROR_CODE = 1000;

/**
 * @description 3000 ~ 4000 第三方引起的错误
 */

/** 请求其他 http/rpc 服务失败引发的错误 */
export const FETCH_FAILED_CODE = 3001;
/** 请求其他服务没有权限的错误 */
export const FETCH_NO_PERMISSION_CODE = 3002;

/**
 * @description 5000 ~ 其它错误
 */

/** 登录态校验失败 */
export const SESSION_EXPIRED_CODE = 5001;
