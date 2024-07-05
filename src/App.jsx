import { useEffect, useState } from "react";
import { TodoForm, TodoLists } from "./components/";
import { TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const editTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleTodo }}>
      <div className="py-2 mb-4">
        <h1 className="text-3xl font-bold text-center uppercase">Tick Tick</h1>
      </div>
      <div className="mb-4">
        <TodoForm />
      </div>
      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoLists todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
