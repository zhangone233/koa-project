export default {
  async beforeStart(): Promise<void> {
    // Before app start
    console.log('Starting server...');
  },
  async afterStart(): Promise<void> {
    // After app start
    console.log('Server started');
  },
};
