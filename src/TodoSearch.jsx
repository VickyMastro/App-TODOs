import React from "react";
import "./TodoSearch.css"

function TodoSearch (){
    return (
      <div className = "container">
        <input className = "InputSearch" placeholder="Escribe tu tarea..."  />
      </div> 
      
    );
}

export { TodoSearch };