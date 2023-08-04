import ServiceError from './serviceErr';
import * as CODE_MAP from '@app/constant/code';

type CODE_MAP_TYPE = typeof CODE_MAP;
type TErrCodeFn = {
  [P in keyof typeof CODE_MAP]: (
    message: string,
    extra?: string,
    origin?: Error
  ) => ServiceError;
};

interface TErr {
  ServiceError: typeof ServiceError;
  is: (err: Error) => boolean;
}

const Err: TErr & Partial<Writable<TErrCodeFn>> = {
  ServiceError,
  is: (err: Error) => err instanceof ServiceError,
};

(() => {
  Object.entries(CODE_MAP).forEach(
    ([codeKey, code]: [
      keyof CODE_MAP_TYPE,
      CODE_MAP_TYPE[keyof CODE_MAP_TYPE],
    ]) => {
      // type ErrParams = ConstructorParameters<typeof ServiceError>;
      // type aaa = PickTuple<ErrParams, '3'| '2'>;
      const create = (message: string, extra?: string, origin?: Error) =>
        new ServiceError(code, message, extra, origin);
      Err[codeKey] = create;
    }
  );
})();

export type ErrType = Readonly<Required<TErrCodeFn> & TErr>;
export default Err as ErrType;
