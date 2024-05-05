import Cards from "../Cards/Cards.jsx"
import Search from "../Search/Search.jsx"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

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