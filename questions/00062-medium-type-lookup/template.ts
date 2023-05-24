type LookUp<U extends Record<"type", string>, T extends U["type"]> = U extends {
  type: T;
}
  ? U
  : never;
