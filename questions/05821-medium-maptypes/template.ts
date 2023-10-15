type MapTypes<T extends object, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R["mapFrom"]
    ? R extends { mapFrom: T[K] }
      ? R["mapTo"]
      : never
    : T[K]
}

type Arg = { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
type ResMapTypes = MapTypes<{ name: string; date: Date }, Arg>
