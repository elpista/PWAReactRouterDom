
import { Link } from 'react-router-dom';
import React from 'react';
function ListElement({ juego }) {
  return (
    <Link to={`/Detail/${juego.id}`}>
      <div className="relative ">
        <li className=" flex mb-0 items-center max-w-full h-20 py-0.5 pb-2 shadow-md text-left border-b-2 border-zinc-950">
          <div className="mr-4 h-full min-w-12 flex-wrap ">
            <img className="h-full" src={juego.foto} alt={juego.nombre} />
          </div>
          <div className="flex-auto flex-wrap">
            <h3 className="text-stone-300 text-xl ">{juego.nombre}</h3>
            <p className="text-green-700 text-sm ">{juego.precio}</p>
          </div>
        </li>
      </div>
    </Link>
  );
}

export default ListElement;