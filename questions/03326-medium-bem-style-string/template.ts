type BEM<B extends string, E extends string[], M extends string[]> = `${
  B //`${B}${E[number] extends never ? "" : `__${E[number]}` }${M[number] extends never ? "" : `--${M[number]}`}`;
}${WithPrefix<E, "__">}${WithPrefix<M, "--">}`

type WithPrefix<Str extends string[], Prefix extends string> = Str[number] extends never
  ? ""
  : `${Prefix}${Str[number]}`
