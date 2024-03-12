import React, { useState, useEffect } from "react";
import ToDoInput from "./ToDoInput";
import ToDo from "./ToDo";
import HomePage from "./HomePage";

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0); //maintaining the id

  const addTodo = (todo) => {
    const newTodo = { id: idCounter, task: todo, completed:false};
    setTodos([...todos, newTodo]);
    setIdCounter(idCounter + 1); // Increment the ID counter
    // [{id: 0, task: 'task1'},
    //  {id: 1, task: 'Task2'}
    // ]
  };

  useEffect(() => {
    console.log(todos); // Logging the current todos
  }, [todos]); // Log todos whenever it changes 
  const [todoPage, setTodoPage] = useState(0)

  return (
    <>
      <div className="todoHomeContainer" style={{ width : `${todoPage}vw`}}>
        <span className="material-icons backArrow" onClick={()=> setTodoPage(0)}>arrow_back</span>
        <div className="todoContainer">
          <div className="top">
            <h1 className="heading">TO-DO APP</h1>
            <ToDoInput addTodo={addTodo} />
          </div>

          {todos.length === 0 ? (
            <p className="noItems">No items, please add something.</p>
          ) : (
            <div className="todosHolder">
              {todos.map((todo) => (
                <ToDo key={todo.id} task={todo.task}/> // Render ToDo component for each todo
              ))}
            </div>
          )}
        </div>
      </div>

      <HomePage setTodoPage={setTodoPage} />
    </>
  );
};

export default ToDoContainer;
