type DeepMutable<T extends object> = {
  -readonly [P in keyof T]: T[P] extends (...args: any[]) => any
    ? T[P]
    : T[P] extends object
    ? DeepMutable<T[P]>
    : T[P]
}
