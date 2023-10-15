type PercentageParser<A extends string> = [...ReturnSign<A>]

type ReturnSign<T> = T extends `${infer First}${infer Rest}`
  ? First extends "-" | "+"
    ? [First, ...ReturnPercent<Rest>]
    : ["", ...ReturnPercent<T>]
  : ["", "", ""]

type ReturnPercent<T> = T extends `${infer U}${"%"}` ? [U, "%"] : [T, ""]
