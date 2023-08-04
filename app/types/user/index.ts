export interface UserLoginReq {
  code: number;
  dy_uid: string;
  nick_name: string;
  avatar: string;
}

export interface UserLoginResp {
  age: number;
}
