type Letters =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export type Kebabtize<T extends string> = T extends `${infer Head}${infer Tail}`
  ? Head extends Uppercase<Letters>
    ? `-${Lowercase<Head>}${Kebabtize<Tail>}`
    : `${Head}${Kebabtize<Tail>}`
  : T;

type RemoveFirstDash<S extends string> =
  S extends `-${infer First}${infer Rest}` ? `${First}${Rest}` : S;

type KebabCase<T extends string> = RemoveFirstDash<Kebabtize<T>>;

type SomeRes0 = KebabCase<"FooBarBaz">;
//   ^?

type SomeRes = KebabCase<"FooBar😎Pop">;
//   ^?

type SomeRes1 = KebabCase<"😎">;
//   ^?

type SomeRes2 = KebabCase<"foo-bar">;
//   ^?

type SomeRes3 = KebabCase<"fooBarBaz">;
//   ^?

type SomeRes4 = KebabCase<"Foo-Bar">;
//   ^?

type SomeRes5 = KebabCase<123>;
//   ^?

type SomeRes6 = KebabCase<"ABC">;
//   ^?

export { KebabCase };
