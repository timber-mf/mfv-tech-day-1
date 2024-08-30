import React from "react";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Service = {
  readonly todos: readonly Todo[];
  readonly addTodo: (todo: Todo) => void;
  readonly setChecked: (id: string, checked: boolean) => void;
  readonly removeTodo: (id: string) => void;
  readonly user: User | null;
  readonly setUser: (user: User | null) => void;
};

export type User = {
  name: string;
  email: string;
  department: string;
};

export const Context = React.createContext<Service | null>(null);

export function Provider(props: { children: React.ReactNode }) {
  const [todos, setTodos] = React.useState<readonly Todo[]>([]);
  const [user, setUser] = React.useState<User | null>(null);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const setChecked = (id: string, checked: boolean) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      }),
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const service: Service = {
    todos,
    addTodo,
    setChecked,
    removeTodo,
    user,
    setUser,
  };
  return <Context.Provider value={service}>{props.children}</Context.Provider>;
}

export const useService = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("useTodo must be used within a Todo.Provider");
  }
  return context;
};
