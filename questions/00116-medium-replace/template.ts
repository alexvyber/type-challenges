type Replace<
	S extends string,
	From extends string,
	To extends string,
> = From extends ""
	? never
	: S extends `${infer Left}${From}${infer Right}`
	  ? `${Left}${To}${Right}`
	  : S;
