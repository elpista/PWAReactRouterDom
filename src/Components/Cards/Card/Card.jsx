import { Link } from 'react-router-dom';
import style from './Card.module.css';

function Card({ juego }) {

    return (
<<<<<<< Updated upstream

      <div className=" bg-red-600 rounded-3xl p-6 size-96">
        <div className="divFoto">
          <img className='foto border-4 border-red-900' src={Card.foto}></img>
        </div>
        <div className="divNombre font-bold italic p-4">
          <h3 className="card-text nombreTarea">{Card.nombre}</h3>
        </div>
        <div className="divPrecio font-extralight">
          <p className="card-text nombreTarea">{Card.precio}</p>
=======
<Link className={style.Card} to={`/Detail/${juego.id}`}>
      <div className="Card card border-success mb-3 bg-transparent d-flex flex-column justify-content-center align-Cards-center position-relative">
        <div className="divFoto">
          <img className='foto' src={juego.foto} alt={juego.nombre}></img>
        </div>
        <div className="divNombre">
          <h3 className="juego-text nombreTarea">{juego.nombre}</h3>
        </div>
        <div className="divPrecio">
          <p className="juego-text nombreTarea">{juego.precio}</p>
>>>>>>> Stashed changes
        </div>
      </div>
</Link>
    )
}
//falta el routeo
export default Card;


