//  extends [infer T] ? T extends [any] ? Flatten<T> : T : Arr[key]
// type Flatten<T> = {
//   [key in keyof T]: T[key] extends [infer U]
//     ? Flatten<U> extends Array<any>
//       ? Flatten<U>[number]
//       : U
//     : T[key] extends Array<infer Y>
//     ? Flatten<Y>
//     : T[key];
// };

type Flatten<T> = T extends []
  ? []
  : T extends [infer Head, ...infer Tail]
  ? [...Flatten<Head>, ...Flatten<Tail>]
  : [T]

// infer Head, ...infer Rest
type Res0 = Flatten<[]>
type Res4 = Flatten<[1]>
type Res3 = Flatten<[1, [2], [[3]]]>
type Res5 = Flatten<[[1], [2], [[3]]]>
type Res6 = Flatten<[[[[[[[[1, 2, 3]]]]]]], [2], [[3]]]>
type Res2 = Flatten<[1, 2, [3, 4], [[[[[[[[[[[[[[[5]]]], 6]]]]]]]]]]]]>

type Res01 = Flatten<"[]">
