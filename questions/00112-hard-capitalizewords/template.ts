// type CapitalizeWordsDel = "!@#$%^&*()_+{}|pp🤣qq"
type CapitalizeWordsSymbols =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"

type CapitalizeWords<S extends string> =
  S extends `${infer First extends CapitalizeWordsSymbols}${infer Del}${infer Rest extends CapitalizeWordsSymbols}`
    ? `${Capitalize<First>}${Del}${CapitalizeWords<Rest>}`
    : Capitalize<S>

type CapitalizeWordsRes = CapitalizeWords<"foo bar!hello world">
