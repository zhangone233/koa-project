import Joi from 'joi';

export const userLoginReqSchema = Joi.object({
  code: Joi.string().not('').required(),
  // dy_uid: Joi.string().required(),
  // nick_name: Joi.string().required(),
  // avatar: Joi.string().not('').required(),
  // anonymous_code: Joi.string().not('').optional(),
});

export const UserSensitiveDataProcessingReqSchema = Joi.object({
  iv: Joi.string().not('').required(),
  encryptedData: Joi.string().not('').required(),
});
