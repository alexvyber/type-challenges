type Flip<T> = {
	[K in keyof T as T[K] extends PropertyKey
		? T[K]
		: T[K] extends boolean
		  ? `${T[K]}`
		  : never]: K;
};

type FlipRes = Flip<{ pi: 3.14; bool: true }>;
