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
  readonly postAuth: (url: string, data: any) => Promise<void>;
};

export type User = {
  name: string;
  email: string;
  department: string;
  token: string;
};

export const Context = React.createContext<Service | null>(null);

const userstr = localStorage.getItem("user");
const userLocal: any = userstr ? JSON.parse(userstr) : null;

export function Provider(props: { children: React.ReactNode }) {
  const [todos, setTodos] = React.useState<readonly Todo[]>([]);
  const [user, setUser] = React.useState<User | null>(userLocal);

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

  const postAuth = React.useCallback(
    async (url: string, data: any) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(data),
      });

      return res.json();
    },
    [user],
  );

  const service: Service = {
    todos,
    addTodo,
    setChecked,
    removeTodo,
    user,
    setUser: (user) => {
      setUser(user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    },
    postAuth,
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
