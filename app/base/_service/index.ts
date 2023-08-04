import Err, { type ErrType } from '@app/lib/error';

export default class baseService {
  protected readonly _Err: ErrType = Err;
}
