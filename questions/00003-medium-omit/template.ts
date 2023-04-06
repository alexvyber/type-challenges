type MyOmit<T extends object, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type R = MyOmit<Todo, "description">
