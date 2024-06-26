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
      <div className=" grid md:grid-cols-3 gap-5">
        {Juegos.map(juego => (
          <Card key={juego.id} juego={juego} />
        ))}
      </div>
    );
  }
}    
export default Cards;
