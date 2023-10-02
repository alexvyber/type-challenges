// type ObjectEntries<T> = {
//     [Key in keyof Required<T>]: [Key, Required<T>[Key] extends never ? undefined : Required<T>[Key]]
//   }[keyof T]

  type ObjectEntries<T> = {
    [P in keyof Required<T>]: [P, Required<T>[P] extends never ? undefined : Required<T>[P] ]
  }[keyof T]

  // Op<Required<T>>
// type Op<T> = {
//   [Key in keyof T]: [Key, T[Key] extends never ? undefined : T[Key]]
// }[keyof T]

