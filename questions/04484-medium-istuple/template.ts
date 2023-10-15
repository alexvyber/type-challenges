type IsTuple<T> = IsTupleCheck<T> extends never ? false : IsTupleCheck<T>

type IsTupleCheck<T> = T extends [any]
  ? true
  : T extends readonly [any]
  ? true
  : T extends []
  ? true
  : false

type ResIsTuple = IsTuple<never>
