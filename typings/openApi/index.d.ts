
interface SessionData {
  /** 用户在当前小程序的 ID，如果请求时有 code 参数才会返回 */
  openid: string;
  /** 用户在小程序平台的唯一标识符，请求时有 code 参数才会返回。如果开发者拥有多个小程序，可通过 unionid 来区分用户的唯一性。 */
  unionid: string;
  /** 会话密钥，如果请求时有 code 参数才会返回 */
  session_key: string;
  /** 匿名用户在当前小程序的 ID，如果请求时有 anonymous_code 参数才会返回 */
  anonymous_openid?: string;
}

interface Code2SessionResp {
  /** 错误码 0:成功，其它失败 */
  err_no: number;
  /** 错误信息 */
  err_tips: string;
  data: SessionData;
}
