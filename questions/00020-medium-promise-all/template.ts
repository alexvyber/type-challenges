declare function PromiseAll<T extends Array<any>>(
  values: readonly [...T]
): Promise<
  T extends [any, ...any]
    ? SomePromiseAll<T>
    : T extends Array<infer A | Promise<infer A>>
    ? A[]
    : never
>

type SomePromiseAll<T, Acc extends Array<any> = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Head extends Promise<any>
    ? SomePromiseAll<Tail, [...Acc, Awaited<Head>]>
    : SomePromiseAll<Tail, [...Acc, Head]>
  : Acc
