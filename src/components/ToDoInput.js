import React, { useState } from "react";

const ToDoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(value)
    const task = value.trim();
    if (!task) return; // to avoid adding empty tasks
    addTodo(task);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="inputContainer">
      <input
        type="text"
        placeholder="Add your task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoInput;
