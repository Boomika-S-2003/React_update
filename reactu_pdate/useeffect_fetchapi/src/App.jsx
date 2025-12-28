import { Route, Routes } from "react-router-dom"
import Fetchapi from "./Fetchapi"
import Showusers from "./Showusers"

const App =()=>{
    return(
        <div>
        

        <Routes>

            <Route path='/' element={<Fetchapi/>}/>


            <Route path='/Showusers' element={<Showusers/>}/>

            <Route path='/fetchapi' element={<Fetchapi/>}/>


        </Routes>
        </div>
    )
}

export default App