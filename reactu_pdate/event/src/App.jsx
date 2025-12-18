import Navbar from './components/Navbar'
import Home from './components/Home'
import Interaction from './components/Interaction'
import { Route,Routes } from 'react-router-dom'

const App=()=>{
    return(
        <div>
          <header>
            <Navbar/>
          </header>
          <main>
             <Routes>
              <Route path='/'element={<Home/>}/>
              <Route path='/Interaction'element={<Interaction/>}/>
             </Routes>
          </main>
        </div>
    )
}
export default App