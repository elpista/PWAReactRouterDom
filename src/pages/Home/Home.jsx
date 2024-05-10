import Cards from "../../Components/Cards/Cards.jsx"
import Search from "../../Components/Search/Search.jsx"
import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import ImageLink from "../../Components/ImageLink/ImageLink.jsx"
import { useContext, useEffect, useState } from "react";
import { JuegoContext} from '../../Context/JuegoContext.jsx'



function Home(){


    const { Juegos } = useContext(JuegoContext)
    

    return(
        <div className="Home ">
            <Header />
            <div className="flex justify-around mt-10">
            <Cards/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;