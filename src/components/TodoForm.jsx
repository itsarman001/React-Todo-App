import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import SendPlaneIcon from "../assets/SendPlaneIcon.svg";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-3 gap-2 py-2"
      >
        <input
          type="text"
          placeholder="Enter Task..."
          className="w-full border py-1 px-2 rounded-sm"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-200 p-1 rounded-full flex items-center justify-center"
        >
          <img src={SendPlaneIcon} className="h-6 w-6" alt="" />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
