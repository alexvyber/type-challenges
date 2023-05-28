type RemoveIndexSignature<T> = {
  [Key in keyof T as string extends Key
    ? never
    : number extends Key
    ? never
    : symbol extends Key
    ? never
    : Key]: T[Key];
};

type Resssss = string extends "string" ? true : false;

type ASFFFFFDSF = RemoveIndexSignature<{
  [key: string]: any;
  foo(): void;
}>;
