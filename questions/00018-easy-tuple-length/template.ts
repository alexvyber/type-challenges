type Length<T extends readonly unknown[]> = T["length"];

// const tuple = [1, 2, 3, 4] as const

// type Some = keyof typeof tuple
// const s: Some = "length"
