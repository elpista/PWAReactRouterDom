import styles from './Cards.module.css';
import Card from './Card/Card.jsx';
import {useNavigate} from "react-router-dom";
import { ROUTES } from '../../const/routes.js';

import { useContext } from "react";
import { JuegoContext} from '../../Context/JuegoContext.jsx'


function Cards() {
  const  {Juegos } = useContext(JuegoContext);
  const navigate = useNavigate();
  
  const onClickNavigate = (id) => {
    navigate('/Detail/' + id);
  }

  if (false) {
    return <h2>No hay videojuegos cargados.</h2>
  } else {
    return (
      <div className="Juegos row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {Juegos.map(juego => (
          <Card key={juego.id} juego={juego} />
        ))}
      </div>
    );
  }
}    
export default Cards;

/*function Cards() {

  const {allJuegos}  = useContext(JuegoContext)
  const navigate = useNavigate();

  const onClickNavigate = (id) => {
    navigate('/Detail/' + id);
  }



  if(allJuegos.length === 0){
    return <h2>No hay videojuegos cargados.</h2>
  } else{
    return (
<<<<<<< Updated upstream
      <div className="grid md:grid-cols-3 gap-5">
        {Juegos.map(function(card) {
=======
      <div className="Juegos row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {allJuegos.map(juego => (
          <Card juego = {juego} />
        ))} 
        </div>
        /* {
>>>>>>> Stashed changes
          return (
            <div key={card.id} className="col">
              <a onClick={() => onClickNavigate(card.id)}>
                <div className='cardContainer mx-auto my-2'>
                  <Card 
                  Card={card}
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );

  }
    )
// <a onClick={() => onClickNavigate(card.id)}>
}
}    
export default Cards;*/