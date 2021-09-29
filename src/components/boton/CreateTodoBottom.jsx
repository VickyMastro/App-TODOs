import React from "react";
import { TodoContext } from "../context/TodoContext";
import "./CreateTodoBottom.css";

function CreateTodoBottom (props){
    const {setOpenModal} = React.useContext(TodoContext)

    const click = () => {
        setOpenModal(prevState => !prevState)
    }

    return (
      <button className= "Button"
        onClick = {click}> 

      + 
      </button>

    );
}

export { CreateTodoBottom };