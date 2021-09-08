import React from "react";
import "TodoCounter.css";

/* OPCION PARA ESTILOS EN LINEA O ESTILOS EN ETIQUETAS EN REACT*/
/* const estilos = {
  color: "red",
  backgroundColor : "black",
} */

function TodoCounter (){
    return (
      <h2 /* style= {estilos}  */>Completaste 2 de 3 TODOs</h2>

    );
}

export { TodoCounter };
