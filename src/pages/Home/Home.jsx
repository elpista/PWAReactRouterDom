import Cards from "../../Components/Cards/Cards.jsx"
import Search from "../../Components/Search/Search.jsx"
import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import ImageLink from "../../Components/ImageLink/ImageLink.jsx"
import { useContext, useEffect, useState } from "react";
import { JuegoContext} from '../../Context/JuegoContext.jsx'



function Home(){


    const { Juegos } = useContext(JuegoContext)
    
/*
    const fetchJuegos = async () => {
        const response = await fetch("/mocks/Juegos.json");
        const result = await response.json();
        setJuegos(result);
    }

    useEffect(() => {
        fetchJuegos();
    }, [])*/

    return(
        <div className="Home">
            <Header   />
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home;