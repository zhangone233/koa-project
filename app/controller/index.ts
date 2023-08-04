import UserController from './user';

const controller = {
  user: {
    index: new UserController(),
  },
};

export type Controller = typeof controller;
export default controller;
