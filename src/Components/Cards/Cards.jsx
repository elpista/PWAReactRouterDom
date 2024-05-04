import './styles.css';
import Card from './Card/Card.js';

function Cards({Cards}) {

  if(Cards.length === 0){
    return <h2>No hay videojuegos cargados.</h2>
  } else{
    return (
      <div className="Cards row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {Cards.map(function(card) {
          return (
            <div key={card.id} className="col">
              <div className='cardContainer mx-auto my-2'>
                <Card 
                Card={card}
                />
              </div>
            </div>
          );
        })}
      </div>
    );

  }

}
export default Cards;