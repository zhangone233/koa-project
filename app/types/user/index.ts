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

export interface UserSensitiveDataProcessingReq {
  /** Initialization Vector 加密算法参数 */
  iv: string;
  /** 加密的用户信息数据 */
  encryptedData: string;
}
export interface UserSensitiveDataProcessingResp {
  /** 解密后的用户信息数据 */
  data: Record<string, unknown>;
}
