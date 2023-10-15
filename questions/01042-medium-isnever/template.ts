type IsNever<T> = (T extends {} | null | undefined ? false : true) extends never ? true : false
