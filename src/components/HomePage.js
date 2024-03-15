import React from "react";
import weiredGuy from "../imgs/weired-guy.png";

const HomePage = ({setTodoPage}) => {

  const renderTodoPage = () =>{
    setTodoPage(100)
  }
  return (
    <div className="homePage">
      <img className="guyImg" src={weiredGuy} alt="banner" />
      <div className="rightHomeTexts">
            <div className="nothingText">
                <span>Seems like</span>
                <span>You have no list :( </span>
            </div>
            <div className="letsAdd">
                <p>Let's add something</p>
                <span 
                  onClick={renderTodoPage} 
                  className="material-icons arrow">
                    arrow_forward
                </span>
            </div>
      </div>
    </div>
  );
};

export default HomePage;
