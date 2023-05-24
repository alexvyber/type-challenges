type SomeTrimRight<S extends string> = S extends `${infer T}${
  | "\n"
  | "\t"
  | " "}`
  ? SomeTrimRight<T>
  : S;

type Trim<S extends string> = SomeTrimRight<TrimLeft<S>>;

type Sss = Trim<"     str     ">;
type Ssss = SomeTrimRight<"    asdfasdf  ">;
