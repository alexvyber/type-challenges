type DeepReadonly<T extends object> = {
  readonly [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends Record<PropertyKey, any>
    ? DeepReadonly<T[K]>
    : T[K];
};

/*





















*/

// type DeepReadonly2<T extends object> = {
//   readonly [K in keyof T]: T[K] extends (...args: any[]) => any
//     ? T[K]
//     : T[K] extends Record<PropertyKey, any>
//     ? DeepReadonly<T[K]>
//     : T[K]
// }

// type DeepReadonly<T extends object> = {
//   readonly [K in keyof T]: keyof T[K] extends never
//     ? T[K]
//     : T[K] extends Record<PropertyKey, any>
//     ? DeepReadonly<T[K]>
//     : T[K]
// }

// type X1 = {
//   a: () => 22
//   b: string
//   c: {
//     d: boolean
//     e: {
//       g: {
//         h: {
//           i: true
//           j: "string"
//         }
//         k: "hello"
//       }
//       l: [
//         "hi",
//         {
//           m: ["hey"]
//         }
//       ]
//     }
//   }
// }

// type a = DeepReadonly<X1>

type Func = () => 22;

type isObj1<T> = T extends object ? true : false;
type isObj2<T> = T extends {} ? true : false;
type isObj3<T> = T extends Record<string, any> ? true : false;

type R1 = isObj1<Func>;
type R2 = isObj2<Func>;
type R3 = isObj3<Func>;
