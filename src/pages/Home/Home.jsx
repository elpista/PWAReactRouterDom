import Cards from "../../Components/Cards/Cards.jsx"
import Search from "../../Components/Search/Search.jsx"
import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"

function Home(){
    return(
        <div className="Home">
            <Header/>
            <Search/>
            <Cards />
            <Footer/>
        </div>
    )
}

export default Home;