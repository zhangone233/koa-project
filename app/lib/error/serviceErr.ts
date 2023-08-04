/**
 * @class ServiceError
 * @classdesc 为Controller与Service层创建错误相关信息
 */
class ServiceError extends Error {
  code: number;
  extra: string;
  origin: Error;
  message: string;

  constructor(code: number, message: string, extra = '', origin?: Error) {
    super();
    this.code = code;
    this.extra = extra;
    this.message = message;
    if (origin instanceof Error) {
      this.origin = origin;
    }
  }

  throw() {
    throw this;
  }

  toJSON() {
    const { code, extra, origin, message } = this;
    return {
      code,
      extra,
      origin,
      message,
    };
  }
}

export default ServiceError;
