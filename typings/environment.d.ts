
declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    PORT2: number;
    NODE_ENV: 'development' | 'production';
  }
}
