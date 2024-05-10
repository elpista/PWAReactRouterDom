import React from "react";
import ListElement from "../ListElements/ListElements.jsx";
import style from "./List.module.css"

function List({ Juegos }) {
  return (
    <div className={style.fondo +  " w-full border-x-2 border-x-zinc-800 p-3 absolute border-b-2 border-b-zinc-800"
  }>


    <div className="overflow-y-auto max-h-60">
      <ul className="grid grid-cols-1 gap-8 ">
        {Juegos.map((juego) => (
          <ListElement key={juego.id} juego={juego}/>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default List;