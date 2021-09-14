import React from "react";
import "./TodoSearch.css"

function TodoSearch ({searchValue, setSearchValue}){
    
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