import React from "react";
import { TodoContext } from "./components/context/TodoContext";
import { TodoCounter } from "./components/contador/TodoCounter";
import { TodoSearch } from "./components/input/TodoSearch";
import { TodoList } from "./components/lista/TodoList";
import { TodoItem } from "./components/items/TodoItem";
import { CreateTodoBottom } from "./components/boton/CreateTodoBottom";

function AppUI() {
  const {error, loading, searchedTodos, completeTodo, deleteTodo} = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter  />

      <TodoSearch />

      <TodoList>
        {error && <p style= {{color : "white"}}>DESESPERATE</p>}
        {loading && <p style= {{color : "white"}}>Estamos cargando todo</p>}
        {(!loading && !searchedTodos.length) && <p style= {{color : "white"}}>Crea tu primer todo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            texts={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBottom />
    </React.Fragment>
  );
}

export { AppUI };
