import React from "react";
import "./TodoCounter.css";

function TodoCounter ({todos}){
    const completedTodos = todos.filter((todo) => !!todo.complete).length;
    const totalTodos = todos.length;
    return (
      <h2 className = "todoCounter" >Completaste {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };
