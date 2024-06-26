import type { Equal, Expect } from "@type-challenges/utils";

interface Model {
	name: string;
	count: number;
	isReadonly: boolean;
	isEnable: boolean;
}

type cases = [
	Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
	Expect<
		Equal<
			OmitByType<Model, string>,
			{ count: number; isReadonly: boolean; isEnable: boolean }
		>
	>,
	Expect<
		Equal<
			OmitByType<Model, number>,
			{ name: string; isReadonly: boolean; isEnable: boolean }
		>
	>,
];

type A = OmitByType<Model, string>;
type V = OmitByType<Model, symbol>;
// TODO: write test cases for constraints and may be PR it to main repo
