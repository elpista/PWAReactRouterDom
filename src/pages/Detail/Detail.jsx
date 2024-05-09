import Header from "../../Components/Header/Header.jsx"
import styles from './Detail.module.css'
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
    <div>
        <Header/>
        <div className={styles.detail}>
        <div className={styles.parteIzquierda}>
            <div className={styles.nombre}>
                <h2>{juego.nombre}</h2>
            </div>
            <div className={styles.foto}>
                <img src={juego.foto}/>
            </div>
            <div className={styles.descripcion}>
                <p>{juego.descripcion}</p>
            </div>
        </div>
        <div className={styles.panelDerecha}>
            <div className={styles.fechaEstreno}>
                <p>Fecha de lanzamiento: {juego.fechaEstreno}</p>
            </div>
            <div className="precio">
                <p>Precio: {juego.precio}</p>
            </div>
            <div className="desarrolladora">
                <p>Desarrolladora: {juego.desarrolladora}</p>
            </div>
            <div className="genero">
                <p>genero: {juego.genero}</p>
            </div>
            <div className="rating">
                <p>rating: {juego.rating}</p>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
)
}

export default Detail