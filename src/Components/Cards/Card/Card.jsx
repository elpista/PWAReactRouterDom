import './styles.css';

function Card({ Card }) {

    return (

      <div className="Card card border-success mb-3 bg-transparent d-flex flex-column justify-content-center align-Cards-center position-relative">
        <div className="divFoto">
          <img className='foto' src={Card.foto}></img>
        </div>
        <div className="divNombre">
          <h3 className="card-text nombreTarea">{Card.nombre}</h3>
        </div>
        <div className="divPrecio">
          <p className="card-text nombreTarea">{Card.precio}</p>
        </div>
      </div>

    )
}
//falta el routeo
export default Card;


