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
<div>
    <Header/>
    <div className="detail grid md:grid-cols-2 gap-x-20 mb-20">
    <div className="izquierda w-96 mt-10 bg-red-600 rounded-3xl p-6">
        <div className="nombre font-bold flex text-4xl mb-1">
            <h1>{juego.nombre}</h1>
        </div>
        <div className="foto flex">
            <img src={juego.foto}/>
        </div>
        <div className="desc mt-2">
            <p>{juego.descripcion}</p>
        </div>
    </div>
    <div className="derecha w-80 h-72 mt-28 bg-gray-500 text-left pl-5 pt-3 space-y-4 rounded-3xl">
        <div className="estreno ">
            <p><b>Fecha de lanzamiento:</b> <br/> {juego.fechaEstreno}</p>
        </div>
        <div className="precio">
            <p><b>Precio:</b> {juego.precio}</p>
        </div>
        <div className="desarrolladora">
            <p><b>Desarrolladora:</b> {juego.desarrolladora}</p>
        </div>
        <div className="rating">
            <p><b>Rating:</b> {juego.rating}</p>
        </div>
    </div>
    </div>
    <Footer ig="@ig_falso" mail="mail.falso@gmail.com"/>
</div>
)
}

export default Detail