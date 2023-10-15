// type IsUnion<T> = Exclude<T, never> extends never ? false : true
// type IsUnion<T> = Exclude<T, T> extends never ? false : true

type IsUnion<T, Copy = T> = [T] extends [never]
  ? false
  : T extends never
  ? false
  : [Copy] extends [T]
  ? false
  : true
