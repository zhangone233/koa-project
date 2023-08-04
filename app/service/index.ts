import UserService from './user';

export const service = {
  user: {
    index: new UserService(),
  },
};

export default service;
