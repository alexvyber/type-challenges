type TupleToNestedObject<T extends Array<PropertyKey>, U> = T extends [
  infer First extends PropertyKey,
  ...infer Rest extends Array<PropertyKey>
]
  ? { [key in First]: TupleToNestedObject<Rest, U> }
  : U

type ResTupleToNestedObject = TupleToNestedObject<["a", "b", "c"], boolean>
