type AppendToObject<Obj extends object, Prop extends PropertyKey, Value> = Prettify<
  Obj & { [key in Prop]: Value }
>

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type test1 = {
  key: "cat"
  value: "green"
}

type Some = AppendToObject<test1, "home", boolean>
