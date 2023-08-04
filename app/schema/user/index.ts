import Joi from 'joi';

export const userLoginReqSchema = Joi.object({
  code: Joi.number().required(),
  dy_uid: Joi.string().required(),
  nick_name: Joi.string().required(),
  avatar: Joi.string().not('').required(),
});
