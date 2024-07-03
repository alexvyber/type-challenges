type ReplaceAll<
	S extends string,
	From extends string,
	To extends string,
> = S extends `${infer Left}${From extends "" ? never : From}${infer Right}`
	? `${Left}${To}${ReplaceAll<Right, From, To>}`
	: S;
