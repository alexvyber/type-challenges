import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
	Expect<Equal<First<["asdfasdf", 3, 2, 1]>, "asdfasdf">>,
	Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
	Expect<Equal<First<[]>, never>>,
	Expect<Equal<First<[undefined]>, undefined>>,
];

type errors = [
	// @ts-expect-error
	First<"notArray">,
	// @ts-expect-error
	First<{ 0: "arrayLike" }>,
];
