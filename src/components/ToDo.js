import React from 'react';





const ToDo = ({ tasks, deleteTask, taskCompleted, editTask }) => {
  return (
    <>
      {tasks.map(taskObj => (
        <div className="todo" key={taskObj.id}>
          <p className={`task ${taskObj.isDone ? 'completed' : ''}`} onClick={()=> taskCompleted(taskObj.id)}>{taskObj.task}</p>
          <div className="editDel">
            <span className="material-icons" onClick={()=>editTask(taskObj.id)}>edit_square</span>
            <span className="material-icons" onClick={() => deleteTask(taskObj.id)}>delete</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToDo;
