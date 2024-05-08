import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"


function Detail(){

    const {id} = useParams()
    const [juego, setJuego] = useState({})

    const fetchJuego = async () => {
        const response = await fetch("/mocks/Juego-" + id + ".json");
        const result = await response.json();
        setJuego(result);
    }

    useEffect(() => {
        fetchJuego();
    }, [])

return juego  && (
    <div className="detail">
        <Header/>
        <div className="nombre">
            <h2>{juego.nombre}</h2>
        </div>
        <div className="foto">
            <img src={juego.foto}/>
        </div>
        <div className="descripcion">
            <p>{juego.descripcion}</p>
        </div>
        <div className="Panel derecha">
            <div className="fechaEstreno">
                <p>Fecha de lanzamiento: {juego.fechaEstreno}</p>
            </div>
            <div className="precio">
                <p>Precio: {juego.precio}</p>
            </div>
            <div className="desarrolladora">
                <p>Desarrolladora: {juego.desarrolladora}</p>
            </div>
            <div className="rating">
                <p>rating: {juego.rating}</p>
            </div>
        </div>
        <Footer/>
    </div>
)
}

export default Detail