import React from "react";
import style from './List.module.css'
import ListElement from "../ListElement/ListElements.jsx";

function List({ juegos }) {
  return (
    <div className={style.list-container}>
      {juegos.map((juego) => (
          <div key={card.id} className="elementContainer mx-auto my-2">
            <ListElement juego={juego} />
          </div>
      ))}
    </div>
  );
}

export default List;
