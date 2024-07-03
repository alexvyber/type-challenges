type Without<T extends Array<any>, U extends Array<any>> = {
	[K in keyof T as T[K] extends U[number] ? never : K]: T[K];
};
