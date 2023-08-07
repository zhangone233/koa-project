export interface UserLoginReq {
  code: number;
  dy_uid: string;
  nick_name: string;
  avatar: string;
  anonymous_code?: number;
}

export interface UserLoginResp {
  /** session_key */
  token: string;
}
