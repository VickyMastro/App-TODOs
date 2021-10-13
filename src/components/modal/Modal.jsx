import ReactDOM from 'react-dom';
import React from "react";
import { TodoContext } from "../context/TodoContext";
import "./modal.css";

function Modal({children}){
  const {setOpenModal} = React.useContext(TodoContext)

  const click = (event) => {
    if (event.target.id === "modalBackground") {
      setOpenModal(false)
    }
  }

    return ReactDOM.createPortal(
      <div 
        className= "modalBackground" 
        id="modalBackground" 
        onClick={click}
        >
        {children}
      </div>,
        document.getElementById("modal")
      );
}

export { Modal };