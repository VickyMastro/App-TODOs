import React from "react";
import { TodoContext } from "../context/TodoContext";
import "./TodoSearch.css"

function TodoSearch (){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    
    const changes = (event) => {
        setSearchValue(event.target.value);
    }
    
    return ( 
        <input 
            className = "InputSearch" 
            placeholder="Escribe tu tarea..."  
            value={searchValue}
            onChange={changes}
        />
    );
}

export { TodoSearch };