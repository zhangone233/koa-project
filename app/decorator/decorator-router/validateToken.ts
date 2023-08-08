import { use } from './use';
import { HEADER_TOKEN_NAME } from '@app/constant/app';
import getValidateHeaders from '@app/middleware/validateHeaders';

/**
 * 验证headers中token是否存在
 * @returns { MethodDecorator }
 */
export const validateToken = (
  tokenName = HEADER_TOKEN_NAME
): MethodDecorator => {
  const middleware = getValidateHeaders([tokenName]);
  return use(middleware);
};

export default validateToken;
