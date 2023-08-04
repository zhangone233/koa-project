import BaseService from '@app/base/_service';

import type { UserLoginReq, UserLoginResp } from '@app/types/user';

export class IndexService extends BaseService {
  async userLogin(req: UserLoginReq): Promise<UserLoginResp> {
    console.log(req, 'req');
    console.log(this, 'this');
    return {
      age: 22,
    };
  }
}

export default IndexService;
