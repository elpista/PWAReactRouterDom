import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"

//use params     //   const {id} = useParams()  (react-router-dom)

// https://reactrouter.com/en/main/hooks/use-params

// CAMBIAR POR FETCH
let juego = {
    nombre: "Fallout 4",
    foto: "",
    descripcion: "Bethesda Game Studios, el galardonado creador de Fallout 3 y The Elder Scrolls V: Skyrim, os da la bienvenida al mundo de Fallout 4, su juego más ambicioso hasta la fecha y la siguiente generación de mundos abiertos.",
    precio: "$12 USD",
    rating: "2.5",
    id: "1"
}

function Detail(){

return (
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
            <div className="precio">
                <p>{juego.precio}</p>
            </div>
            <div className="rating">
                <p>{juego.rating}</p>
            </div>
        </div>
        <Footer/>
    </div>
)
}

export default Detail