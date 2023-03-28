type First<T extends any[]> = T extends [infer A, ...any[]] ? A : never

type Wrong<T extends any[]> = {
  [key in T[number]]: key
}

type S = First<[1, 2, 3]>
//   ^?
type S2 = Wrong<[1, 2, 3]>
//   ^?
