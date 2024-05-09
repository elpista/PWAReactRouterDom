import { Link } from 'react-router-dom';

function Card({ juego }) {

    return (
<Link className="tarjeta" to={`/Detail/${juego.id}`}>
      <div className="bg-red-600 rounded-3xl p-6 size-96">
        <div className="divFoto">
          <img className='foto border-4 border-red-900' src={juego.foto} alt={juego.nombre}></img>
        </div>
        <div className="divNombre font-bold italic p-4">
          <h3 className="juego-text nombreTarea">{juego.nombre}</h3>
        </div>
        <div className="divPrecio font-extralight">
          <p className="juego-text nombreTarea">{juego.precio}</p>
        </div>
      </div>
</Link>
    )
}
export default Card;


