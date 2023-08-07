import BaseController from '@app/base/_controller';
import { userLoginReqSchema } from '@app/schema/user';
import { get, validate, controller } from '@app/decorator';

import type { UserLoginReq } from '@app/types/user';

@controller('/api')
class IndexController extends BaseController {
  @validate(userLoginReqSchema)
  @get('/login')
  async userLogin(ctx: App.Ctx<UserLoginReq>) {
    const { req } = ctx.args;
    const data = await this._service.user.index.userLogin(req);

    ctx.body = {
      data,
      code: 0,
      message: 'ok',
    };
  }
}

export default IndexController;
