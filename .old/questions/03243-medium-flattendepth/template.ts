type FlattenDepth<T extends Array<any>, D extends number = 1> = T extends [
	...infer Some,
]
	? Some
	: never;
