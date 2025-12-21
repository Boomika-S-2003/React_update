import Loginpage from './components/Loginpage'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Logoutpage from './components/Logoutpage'
import {Route,Routes} from 'react-router-dom'


const App=()=>{
    return(
    <>
   <header>
     <Navbar></Navbar>
   </header>

   
    
    <main>
        <Routes>
            <Route path='/'element={<Loginpage/>}/>
            <Route path='/Home'element={<Home/>}/>
            <Route path='/Logoutpage'element={<Logoutpage/>}/>
            
        </Routes>

    </main>
   </>
    )
}

export default App