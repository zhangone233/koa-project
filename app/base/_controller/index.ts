import { app } from '@/app';
import { service } from '@app/service';
import Err, { ErrType } from '@app/lib/error';

abstract class AbstractController<I> {
  protected abstract readonly _routeInstance?: I;
}

export default class BaseController<I = unknown> extends AbstractController<I> {
  protected readonly _app: App = app;
  protected readonly _Err: ErrType = Err;
  protected readonly _service: typeof service = service;

  protected readonly _routeInstance?: I;
}
