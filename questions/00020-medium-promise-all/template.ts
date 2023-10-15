// declare function PromiseAllTwo<T extends Array<any>>(
//   values: readonly [...T]
// ): Promise<
//   T extends [any, ...any]
//     ? SomePromiseAll<T>
//     : T extends Array<infer A | Promise<infer A>>
//     ? A[]
//     : never
// >

// type SomePromiseAll<T, Acc extends Array<any> = []> = T extends [
//   infer Head,
//   ...infer Tail
// ]
//   ? Head extends Promise<any>
//     ? SomePromiseAll<Tail, [...Acc, Awaited<Head>]>
//     : SomePromiseAll<Tail, [...Acc, Head]>
//   : Acc

// const asdf = [1, 2, 3, 4] as const
// type Some = typeof asdf
// type Other = keyof Some

// const other: Other = "1"

// !!!!!!!!!!!!!!!!!!!!!
declare function PromiseAll<T extends Array<any>>(values: readonly [...T]): Promise<{
  [K in keyof T]: Awaited<T[K]>
}>
