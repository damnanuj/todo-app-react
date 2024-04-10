import React, { useState, useEffect } from "react";
import ToDoInput from "./ToDoInput";
import ToDo from "./ToDo";
import HomePage from "./HomePage";

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0); //maintaining the id

  const addTodo = (todo) => {
    const newTodo = { id: idCounter, task: todo, isDone:false};
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

  const deleteTask = (id) =>{
    const newTask = todos.filter(item =>item.id !== id)
    setTodos(newTask)
  }
  const taskCompleted =(id)=>{
    for(let i = 0; i<todos.length; i++){
      if(todos[i].id ===id){
        todos[i].isDone = !todos[i].isDone ;
        break;
      }
    }
    setTodos([...todos])
  }
  const editTask = (id) =>{
    console.log(id);
  }

  return (
    <>
      <div className="todoHomeContainer" style={{ width : `${todoPage}%`}}>
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
                <ToDo tasks={todos} deleteTask={deleteTask} taskCompleted={taskCompleted} editTask={editTask}/> 
            </div>
          )}
        </div>
      </div>

      <HomePage setTodoPage={setTodoPage} />
    </>
  );
};

export default ToDoContainer;
