
import { Link } from 'react-router-dom';
import React from 'react';
function ListElement({ juego }) {


  return (
    <Link to={`/Detail/${juego.id}`}>
    <li>

      <img className="" src={juego.foto} alt={juego.nombre} />
      <div>
        <h3 >{juego.nombre}</h3>
        <p >${juego.precio}</p>
      </div>
    </li>
    </Link>
  );
}

export default ListElement;