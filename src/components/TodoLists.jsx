import React, { useState } from "react";
import deleteIcon from "../assets/deleteIcon.svg";
import { useTodo } from "../context";

const TodoLists = ({ todo }) => {
  const [todoText, setTodoText] = useState(todo.todo);
  const [isEditable, setIsEditable] = useState(false);
  const { editTodo, toggleTodo, deleteTodo } = useTodo();

  const updateTodo = () => {
    editTodo(todo.id, { ...todo, todo: todoText });
    setIsEditable(false);
  };

  const checkTodo = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className="flex items-center justify-between px-3 gap-2 py-2">
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={checkTodo}
      />

      <input
        type="text"
        placeholder="Enter new tesk"
        className={`border outline-none w-full bg-transparent rounded-lg
          ${isEditable ? "border-black/10 px-2 py-1" : "border-transparent"}
        ${todo.completed ? "line-through" : ""}`}
        readOnly={!isEditable}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type="button"
        className={`px-2 py-1 rounded-md uppercase
          ${todo.completed ? "bg-slate-400" : " bg-yellow-200"}`}
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) {
            updateTodo();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {!isEditable ? "edit" : "save"}
      </button>
      <button
        type="button"
        className="py-1 px-2 bg-red-400 rounded-md uppercase"
        onClick={() => deleteTodo(todo.id)}
      >
        <img src={deleteIcon} className="h-6 w-6" alt="" />
      </button>
    </div>
  );
};

export default TodoLists;
