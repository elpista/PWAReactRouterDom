import styles from './Cards.module.css';
import Card from './Card/Card.jsx';
import {useNavigate} from "react-router-dom";
import { ROUTES } from '../../const/routes.js';

function Cards({Juegos}) {
  const navigate = useNavigate();

  const onClickNavigate = (id) => {
    navigate(ROUTES.detail);
  }

  if(Juegos.length === 0){
    return <h2>No hay videojuegos cargados.</h2>
  } else{
    return (
      <div className="Juegos row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {Juegos.map(function(card) {
          return (
            <div key={card.id} className="col">
              <a onClick={onClickNavigate(card.id)}>
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

}
export default Cards;