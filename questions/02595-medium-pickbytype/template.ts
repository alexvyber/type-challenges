type PickByType<T extends object, U> = {
	[Key in keyof T as T[Key] extends U ? Key : never]: T[Key];
};

interface Model {
	name: string;
	count: number;
	isReadonly: boolean;
	isEnable: boolean;
}

type O = PickByType<Model, boolean>;
