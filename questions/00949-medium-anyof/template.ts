declare const emptyObjectSymbol: unique symbol;
type EmptyObject = { [emptyObjectSymbol]?: never };

type FalsyTypes = 0 | -0 | false | "" | null | undefined | EmptyObject | [];

type AnyOf<T extends readonly any[]> = (
  T extends Array<infer U> ? (U extends FalsyTypes ? false : true) : never
) extends false
  ? false
  : true;
