type MyAwaited<T extends PromiseLike<any>> = T extends Promise<infer A>
  ? A extends Promise<any>
    ? MyAwaited<A>
    : A
  : T extends PromiseLike<infer S>
  ? S
  : never
