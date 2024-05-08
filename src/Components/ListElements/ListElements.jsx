import style from 'listElements.module.css'
import { Link } from 'react-router-dom';
import React from 'react';

function ListElement({ juego }) {


  return (
    <Link to={juego.id}>
    <div className={style.list-element}>
      <img className={style.imagen} src={juego.foto} alt={juego.nombre} />
      <div>
        <h3 className={style.nombre}>{juego.nombre}</h3>
        <p className={style.precio}>${juego.precio}</p>
      </div>
    </div>
    </Link>
  );
}

export default ListElement;