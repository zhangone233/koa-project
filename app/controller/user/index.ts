import BaseController from '@app/base/_controller';
import { HEADER_TOKEN_NAME } from '@app/constant/app';
import { post, validate, controller, validateToken } from '@app/decorator';
import {
  userLoginReqSchema,
  UserSensitiveDataProcessingReqSchema as SDP_schema,
} from '@app/schema/user';

import type {
  UserLoginReq,
  UserSensitiveDataProcessingReq,
} from '@app/types/user';

/**
 * 用户信息模块
 * @class
 * @classdesc 登录、敏感数据数量等
 */
@controller('/api')
class IndexController extends BaseController {
  /**
   * @method
   * @param { App.Ctx<UserLoginReq> } ctx 请求上下文
   * @returns { Promise<void> }
   * @description 根据小程序客户端传来的登录凭证等相关信息，去获取会话token（session_key）
   */
  @validate(userLoginReqSchema)
  @post('/user/login')
  async userLogin(ctx: App.Ctx<UserLoginReq>) {
    const { req } = ctx.args;
    const data = await this._service.user.index.userLogin(req);

    ctx.body = {
      data,
      code: 0,
      message: 'ok',
    };
  }

  /**
   * @method
   * @param ctx
   * @returns { Promise<void> }
   * @description 对客户端的用户敏感数据信息进行解密处理
   */
  @validate(SDP_schema)
  @validateToken()
  @post('/private/sensitive/decrypt')
  async userSensitiveDataProcessing(
    ctx: App.Ctx<UserSensitiveDataProcessingReq>
  ) {
    const { req } = ctx.args;
    const sessionKey = ctx.request.headers[HEADER_TOKEN_NAME] as string;
    const data = await this._service.user.index.userSensitiveDataProcessing(
      req,
      sessionKey
    );

    ctx.body = {
      data,
      code: 0,
      message: 'ok',
    };
  }
}

export default IndexController;
