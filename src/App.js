/* import "./App.css"; */
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoBottom } from "./CreateTodoBottom";


const todos = [
  { text: "cortar cebolla", complete: false },
  { text: "comer", complete: false },
  { text: "dormir", complete: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem  
            key = {todo.text} 
            texts = {todo.text} 
            completed = {todo.complete}
          />
        ))}
      </TodoList>
      
      <CreateTodoBottom />
    </React.Fragment>
  );
}

export default App;
