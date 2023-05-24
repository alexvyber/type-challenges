type ReplaceKeys<Source, Keys extends keyof Replacement, Replacement> = {
  [Prop in keyof Source]: Prop extends Keys & keyof Replacement
    ? Prop extends keyof Replacement
      ? Replacement[Prop]
      : never
    : Source[Prop];
};

// type ReplaceKeys<Source, Keys extends keyof Replacement, Replacement> = {
//   [Prop in keyof Source]: Prop extends Keys & keyof Replacement
//     // ? Prop extends keyof Replacement
//       ? Replacement[Prop]
//       // : never
//     : Source[Prop];
// }
