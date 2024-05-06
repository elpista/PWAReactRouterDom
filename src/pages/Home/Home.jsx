import Cards from "../../Components/Cards/Cards.jsx"
import Search from "../../Components/Search/Search.jsx"
import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import { useEffect, useState } from "react";

function Home(){

    const [Juegos, setJuegos] = useState([]);

    const fetchJuegos = async () => {
        const response = await fetch("/mocks/Juegos.json");
        const result = await response.json();
        setJuegos(result);
    }

    useEffect(() => {
        fetchJuegos();
    }, [])

    return(
        <div className="Home">
            <Header/>
            <Search/>
            <Cards Juegos={Juegos}/>
            <Footer/>
        </div>
    )
}

export default Home;