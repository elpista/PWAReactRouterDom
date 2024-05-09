import React, { useContext } from "react";
import { JuegoContext } from "../../Context/JuegoContext";
import { useLocation } from "react-router-dom";
import Card  from '../../Components/Cards/Card/Card.jsx'
import Header from "../../Components/Header/Header.jsx";
import style from './SearchPage.module.css'
export const SearchPage = () => {
    const location = useLocation()

    const { Juegos } = useContext(JuegoContext)

    const filteredJuegos = Juegos.filter(juego =>
		juego.nombre.toLowerCase().includes(location.state.toLowerCase())
	);
    return (
        <div className={style.container} >

        <Header />
        
        <p className='p-search'>
            Se encontraron <span>{filteredJuegos.length}</span>{' '}
            resultados:
        </p>
            <div className='grid md:grid-cols-3 gap-5'>
                {filteredJuegos.map(juego => (
                <Card juego={juego} key={juego.id}/>
            ))}
            </div>
        </div>
)
 }