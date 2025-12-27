import { Route, Routes } from "react-router-dom"
import Start from "./taskuselocation/start"
import Show from "./taskuselocation/show"

const AppLocation=()=>{
    return(
       <Routes>

        <Route path='/'element={<Start/>}/>
        <Route path='/cake'elements={<Show/>}/>


       </Routes> 
    )
}

export default AppLocation