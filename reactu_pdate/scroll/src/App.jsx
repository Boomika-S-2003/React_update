import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"


const App=()=>{
    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div>
            <Home/>
            <About/>
            <Contact/>
            
        </div>
        
        </>
    )
}
export default App