type Trunc<N extends string | number> = `${N}` extends `${infer L}.${string}`
	? L extends ""
		? "0"
		: L
	: `${N}`;
