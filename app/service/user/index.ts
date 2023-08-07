import BaseService from '@app/base/_service';
import https, { type RequestOptions } from 'https';
import { APP_ID, APP_SECRET } from '@app/constant/app';
import type { UserLoginReq, UserLoginResp } from '@app/types/user';

export class IndexService extends BaseService {
  async userLogin(req: UserLoginReq): Promise<UserLoginResp> {
    console.log(req, 'req');

    return new Promise((resolve, reject) => {
      const { code } = req;
      const body = JSON.stringify({
        code,
        appid: APP_ID,
        secret: APP_SECRET,
      });

      const options: RequestOptions = {
        method: 'POST',
        path: '/api/apps/v2/jscode2session',
        host: 'developer.toutiao.com',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      };

      const request = https.request(options, (res) => {
        let dataJson = '';
        res.on('data', (chunkStream: Buffer) => {
          dataJson += chunkStream.toString();
        });
        res.once('end', () => {
          const { err_no, err_tips, data }: Code2SessionResp =
            JSON.parse(dataJson);
          if (err_no === 0) {
            return resolve({
              token: data.session_key,
            });
          }
          reject(
            this._Err.FETCH_FAILED_CODE(err_tips, 'code2Session result fail')
          );
        });
      });

      request.once('error', (err: Error) => {
        reject(
          this._Err.FETCH_FAILED_CODE(
            err.message,
            'code2Session request fail',
            err
          )
        );
      });

      request.write(body);
      request.end(() => {
        console.log('request end');
      });
    });
  }
}

export default IndexService;
