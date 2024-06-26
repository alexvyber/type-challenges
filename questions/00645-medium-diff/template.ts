type Propertize<Prop, First, Second> = Prop extends keyof First
	? Prop extends keyof Second
		? never
		: Prop
	: Prop;

// type Diff<First, Second> = {
//   [Prop in keyof First | keyof Second as Propertize<
//     Prop,
//     First,
//     Second
//   >]: Prop extends keyof First
//     ? First[Prop]
//     : Prop extends keyof Second
//     ? Second[Prop]
//     : never;
// };

// type Diff<First, Second> = {
//   [Prop in keyof (First & Second) as Exclude<
//     Prop,
//     keyof First & keyof Second
//   >]: Prop extends keyof First
//     ? First[Prop]
//     : Prop extends keyof Second
//     ? Second[Prop]
//     : never;
// };

// type Diff<One, Two> = Omit<One & Two, keyof (One | Two)>
type Diff<One, Two> = Omit<One & Two, keyof One & keyof Two>;

type Foo = {
	name: string;
	age: string;
};
type Bar = {
	name: string;
	age: string;
	gender: number;
};
