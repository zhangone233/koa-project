import BaseController from '@app/base/_controller';
import { get, validate, controller } from '@app/decorator';

import { userLoginReqSchema } from '@app/schema/user';

@controller('/api')
class IndexController extends BaseController {
  @validate(userLoginReqSchema)
  @get('/login')
  async userLogin(ctx: App.Ctx) {
    console.log(ctx);
    const data = await this._service.user.index.userLogin({
      code: 1,
      dy_uid: '11',
      nick_name: '111',
      avatar: 'aaa',
    });

    ctx.body = {
      data,
      code: 0,
      message: 'ok',
    };
  }
}

export default IndexController;
