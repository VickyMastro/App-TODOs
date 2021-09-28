import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider (props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
      
      const [searchValue, setSearchValue] = React.useState("");
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) => {
          const text = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return text.includes(searchText);
        });
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
    
        const newTodos = [...todos];
        newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
    
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
    
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    return (
        <TodoContext.Provider value={{
            error,
            loading,
            todos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };