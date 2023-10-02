type OmitByType<T extends object, U  extends T[keyof T] > = {
  [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
};
