import React from "react";
import "./CreateTodoBottom.css";

function CreateTodoBottom (){
    const click = () => {
      alert("Aqui se deberia abrir el modal")
    }
    return (
      <button className= "Button"
        onClick = {click}
      > 
      + 
      </button>

    );
}

export { CreateTodoBottom };