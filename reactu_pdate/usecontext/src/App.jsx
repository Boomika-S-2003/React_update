import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import CounterProvider from "./context/CounterProvider"

const App=()=>{
    return(
        <>
        <CounterProvider>
            <Navbar/>
            <Banner/>
        </CounterProvider>
        </>
    )
}

export default App