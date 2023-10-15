type ConstructTuple<L extends number> = ConstructTupleRec<[], L>
type ConstructTupleRec<T extends any[], L> = T["length"] extends L
  ? T
  : ConstructTupleRec<[unknown, ...T], L>
type ConstructTupleRes = ConstructTuple<2>
