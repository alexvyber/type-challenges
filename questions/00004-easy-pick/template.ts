type MyPick<T extends object, K extends keyof T> = { [key in K]: T[key] };
