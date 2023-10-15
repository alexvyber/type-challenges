type Join<T extends string[], U extends string | number> = T extends [
  infer Letter extends string,
  ...infer Rest extends string[]
]
  ? `${Letter}${Rest extends [] ? "" : U}${Join<Rest, U>}`
  : ""
// Rest extends never ? `${Letter}`  :
type JoinRes = Join<["a", "p", "p", "l", "e"], "-">
