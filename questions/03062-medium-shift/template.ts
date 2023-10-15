type Shift<T extends Array<unknown>> = T extends [infer First, ...infer Rest] ? Rest : []
