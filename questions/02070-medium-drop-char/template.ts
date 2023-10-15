type DropChar<S extends string, C extends string> = S extends `${infer Some}${C}${infer Rest}`
  ? `${Some}${DropChar<Rest, C>}`
  : S
