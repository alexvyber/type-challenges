type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`

// type SomeRes = Absolute<18014398509481982n> // "18014398509481982"
// type SomeRes2 = Absolute<-10>
