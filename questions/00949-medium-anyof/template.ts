declare const emptyObjectSymbol: unique symbol
// type EmptyObject = { [emptyObjectSymbol]?: never };
// type EmptyObject = { [key in PropertyKey]: never };
type EmptyObject = Record<PropertyKey, never>

type FalsyTypes = 0 | -0 | false | "" | null | undefined | EmptyObject | []

// type AnyOf<T extends readonly any[]> = (
//   T extends Array<infer U> ? (U extends FalsyTypes ? false : true) : never
// ) extends false
//   ? false
//   : true;

type AnyOf<T extends readonly any[]> = (T extends FalsyTypes[] ? false : true) extends false
  ? false
  : true
