type FlipArguments<T extends (...args: any[]) => any> = ( ...args: Reverse<Parameters<T>>) => ReturnType<T>










// type ResFlipArguments = FlipArguments<
// 	(arg0: string, arg1: number, arg2: boolean) => void
// >;
// type ResFlipArguments2 = FlipArguments<(foo: string) => number>

// type TupleRes = Parameters<(arg0: string, arg1: number, arg2: boolean) => void>