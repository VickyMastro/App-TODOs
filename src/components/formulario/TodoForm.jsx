import React from 'react';
import { TodoContext } from '../context/TodoContext';
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {addTodo, setOpenModal} =React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!newTodoValue) {
            alert("No podes agregar un TODO vacio")
        } else{
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }

    return(
        <form onSubmit = {onSubmit} className="formulario">
            <div className="form-container">
                <label>Escribe tu tarea</label>
                <hr />
                <textarea 
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Escribe aquí"
                    className="textarea"
                    rows="6"
                    cols="18"
                />

                <div className="buttons">
                    <button 
                        type="button" 
                        onClick={onCancel} 
                        className="cancel">
                        Cancelar
                    </button>

                    <button 
                        type="submit" 
                        className="submit">
                        Añadir
                    </button>
                </div>
            </div>
        </form>
    );
}

export { TodoForm };