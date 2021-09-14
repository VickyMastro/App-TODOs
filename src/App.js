/* import "./App.css"; */
import React from "react";
import { TodoCounter } from "./components/contador/TodoCounter";
import { TodoSearch } from "./components/input/TodoSearch";
import { TodoList } from "./components/lista/TodoList";
import { TodoItem } from "./components/items/TodoItem";
import { CreateTodoBottom } from "./components/boton/CreateTodoBottom";


const todosDefault = [
  {text: "cortar cebolla", complete: false },
  {text: "comer", complete: false },
  {text: "estudiar", complete: false },
  {text: "dormir", complete: false },
];

function App() {
  const [todos, setTodos] = React.useState(todosDefault)
  const [searchValue, setSearchValue] = React.useState('');

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo => {
      const text = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return text.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos]
    newTodos[todoIndex].complete = true;

    setTodos(newTodos);
    /* todos[todoIndex] = {
      text : todos[todoIndex].text,
      completed : true,
    } */
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  }

  return (
    <React.Fragment>
      <TodoCounter 
        todos={todos}
      />

      <TodoSearch 
        searchValue= {searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem  
            key = {todo.text} 
            texts = {todo.text} 
            completed = {todo.complete}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoBottom />
    </React.Fragment>
  );
}

export default App;
