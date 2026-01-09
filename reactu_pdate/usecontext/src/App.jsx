import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import CounterProvider from "./context/CounterProvider"
import Providertheme from "./context/Providertheme"

const App=()=>{
    return(
        <>
        <Providertheme>
            <Navbar/>
            {/* <Banner/> */}
            <Footer/>
        </Providertheme>
        </>
    )
}

export default App