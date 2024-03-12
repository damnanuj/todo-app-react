




import React from "react";

const ToDo = ({task}) => {
  return (
    <>
      <div className="todo">
        <p 
          className= {`"completed? 'completed' : ""`}
        >{task}</p>
        <div className="editDel">
          <span className="material-icons">edit_square</span>
          <span className="material-icons">delete</span>
        </div>
      </div>
    </>
  );
};

export default ToDo;
