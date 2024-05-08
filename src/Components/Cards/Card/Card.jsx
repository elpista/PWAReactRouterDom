import style from './Card.module.css';

function Card({ Card }) {

    return (

      <div className=" bg-red-600 rounded-3xl p-6 size-96">
        <div className="divFoto">
          <img className='foto border-4 border-red-900' src={Card.foto}></img>
        </div>
        <div className="divNombre font-bold italic p-4">
          <h3 className="card-text nombreTarea">{Card.nombre}</h3>
        </div>
        <div className="divPrecio font-extralight">
          <p className="card-text nombreTarea">{Card.precio}</p>
        </div>
      </div>

    )
}
//falta el routeo
export default Card;


