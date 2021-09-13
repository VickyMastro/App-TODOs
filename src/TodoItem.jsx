import React from "react";
import "./TodoItem.css";

function TodoItem (props){
    return (
        <li className= "Item">
            <span 
                className= {`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                ✔
            </span>
            <p 
                className= {`Item-p ${props.completed && 'Item-p--completed'}`}
            >
                {props.texts}
            </p>
            <span 
                className= {`Icon Icon-delete`}
                onClick={props.onDelete}
            >
                X
            </span>
        </li>

    );
}

export { TodoItem };


