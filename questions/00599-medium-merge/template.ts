// type Merge<Left, Right> = Id<
//   Pick<Left, Exclude<keyof Left, keyof Right>> &
//     Pick<Right, Exclude<keyof Right, Optionals<Right>>> &
//     Pick<Right, Exclude<Optionals<Right>, keyof Left>> &
//     Props<Left, Right, Optionals<Right> & keyof Left>
// >

// type Id<T> = T extends infer U ? { [Key in keyof U]: U[Key] } : never

// type Optionals<T> = {
//   [Key in keyof T]-?: {} extends { [P in Key]: T[Key] } ? Key : never
// }[keyof T]

// type Props<Left, Right, Key extends keyof Left & keyof Right> = {
//   [P in Key]: Left[P] | Exclude<Right[P], undefined>
// }

type Merge<Left, Right> = {
	[Prop in keyof Left | keyof Right]: Prop extends keyof Right
		? Right[Prop]
		: Prop extends keyof Left
		  ? Left[Prop]
		  : never;
};
