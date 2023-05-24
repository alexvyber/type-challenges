export type LengthOfString<S extends string, Arr extends any[] = []> = S extends `${string}${infer Rest}` 
? LengthOfString<Rest, [null, ...Arr]> 
: Arr['length']

type L = LengthOfString<'1ss'>

type LenghtArr<Arr extends any[] = []> = Arr["length"]
type ASd = LenghtArr<[1,2,3,4]>
