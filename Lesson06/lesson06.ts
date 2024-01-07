interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends string | number | symbol> = {
  [k in K]: k extends keyof T ? T[k] : never;
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
