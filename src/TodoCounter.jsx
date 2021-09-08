import React from "react";
import "./TodoCounter.css";

function TodoCounter (){
    return (
      <h2 className = "todoCounter" >Completaste 2 de 3 TODOs</h2>

    );
}

export { TodoCounter };

/* OPCION PARA ESTILOS EN LINEA O ESTILOS EN ETIQUETAS EN REACT*/
/*   const estilos = {
  color: "red",
  backgroundColor : "black",
} 

<h2 style= {estilos} >Completaste 2 de 3 TODOs</h2>  */
