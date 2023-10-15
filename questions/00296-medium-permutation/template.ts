type Permutation<T, Acc = T> = [T] extends [never]
  ? []
  : Acc extends Acc
  ? [Acc, ...Permutation<Exclude<T, Acc>>]
  : []

type SS = Permutation<never>
type SSS = Permutation<1 | 2 | 3>
