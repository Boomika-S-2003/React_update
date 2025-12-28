import { Route, Routes } from "react-router-dom"
import Bakes from "./taskuselocation/Bakes"
import ShowBakes from "./taskuselocation/ShowBakes"
// import Start from "./taskuseparms/Start"
// import Show from './taskuseparms/Show'



// import Product from "./components/Product"
// import Productlist from "./components/productlist"

const App=()=>{
    return(
    <Routes>
         {/* <Route path='/'element={<Product/>}/>
        <Route path='/course/:id'element={<Productlist/>}/>  */}
       {/* <Route path='/'element={<Start/>}/>  
       <Route path='/line/:id'element={<Show/>}/>   */}
       
        <Route path='/' element={<ShowBakes/>}/>
        <Route path='/cake' element={<Bakes/>}/>

       </Routes>
    )
}
export default App