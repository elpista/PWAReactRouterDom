import React from "react";
import ListElement from "../ListElements/ListElements.jsx";

function List({ Juegos }) {
  return (
    <div >
      {Juegos.map((juego) => (
          <div>
            <ul>
            <ListElement juego={juego}/>
            </ul>
          </div>
      ))}
    </div>
  );
}

export default List;
