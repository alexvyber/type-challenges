type AppendArgument<Fn extends (...args: any[]) => unknown, A> = (
  ...args: [...Parameters<Fn>, A]
) => ReturnType<Fn>

type AppendArgument2<Fn extends (...args: any[]) => any, U> = Fn extends () => any
  ? (x: U) => ReturnType<Fn>
  : Fn extends (...args: [a: infer A, b: infer B]) => any
  ? (...args: [a: A, b: B, x: U]) => ReturnType<Fn>
  : (x: U) => ReturnType<Fn>
