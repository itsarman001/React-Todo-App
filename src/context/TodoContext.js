import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: Date.now(),
      todo: "Hello World",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (todo) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
    return useContext(todoContext)
};

export const TodoProvider = todoContext.Provider