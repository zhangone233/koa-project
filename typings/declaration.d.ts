
// declare type PickTupleRecursion<T extends any[], K extends keyof T> = T[K];
// declare type PickTuple<T extends any[], K extends keyof T> = 
//   T extends [infer P, ...infer U]
//     ? P extends K
//       ? [P]
//     : T;
// declare type OmitTuple<T extends any[], K extends keyof T> = [Extract<K, keyof T> extends never ? T[K] : never];

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
}
