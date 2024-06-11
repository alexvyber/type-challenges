type TupleToObject<T extends readonly PropertyKey[]> = {
	[key in T[number]]: key;
};
type Example = TupleToObject<[1, 2, 3, 4]>;
