type MyReadonly2<T extends object, K extends keyof T = keyof T> = {
  readonly [Key in K]: T[Key];
} & {
  [Key in keyof T as Exclude<Key, K>]: T[Key];
};

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

type Res = MyReadonly2<Todo1, "title" | "description">;
