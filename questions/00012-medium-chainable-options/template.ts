type Chainable<T extends Record<string, any> = {}> = {
	option<K extends string, V>(
		key: K extends keyof T ? never : K,
		value: V,
	): Chainable<
		{ [Key in keyof T as K extends Key ? never : Key]: T[Key] } & {
			[Key in K]: V;
		}
	>;
	get(): T;
};

/*


























*/

type Chainable2<T extends Record<string, any> = {}> = {
	option<K extends string, V>(
		key: K extends keyof T ? never : K,
		value: V,
	): Chainable2<
		{ [Key in keyof T as K extends Key ? never : Key]: T[Key] } & {
			[Key in K]: V;
		}
	>;
	get(): T;
};
